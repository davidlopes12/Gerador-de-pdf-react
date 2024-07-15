import { useState } from "react"

import TextStyleConfig from './TextStyleConfig'
import ImageUpload from './ImageUpload'

import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function GeneratePDF() {
  const [title, setTitle] = useState('');
  const [descript, setDescript] = useState('');
  const [fontSize, setFontSize] = useState('12');
  const [fontColor, setFontColor] = useState('#000');
  const [isBold, setIsBold] = useState(false);
  const [image, setImage] = useState(null)
  
  const generatePdf = () => {

    const customStyle = {
      fontSize: parseInt(fontSize),
      color: fontColor,
      bold: isBold,
    }

    const documentDefintion = {
      content: [
        {text: `Título ${title}`, style: 'customStyle'},
        {text: `Descrição ${descript}`, style: 'customStyle'},
        image ? {image: image, width: 150} : {}
      ],
      styles: {
        customStyle: customStyle
      },
    }

    pdfMake.createPdf(documentDefintion).download();

  }

  return (
    <div className="container">
      <label className='label'>
        Título:
        <input type="text" className='input' value={title} onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <label className='label'>
        Descrição:
        <input type="text" className='input' value={descript} onChange={(e) => setDescript(e.target.value)}/>
      </label>
      <TextStyleConfig fontSize={fontSize} setFontSize={setFontSize} fontColor={fontColor} setFontColor={setFontColor} isBold={isBold} setIsBold={setIsBold}/>
      <ImageUpload setImage={setImage}/>
      <button className='button' onClick={generatePdf}>Gerar PDF</button>
    </div>
  )
}

export default GeneratePDF