
function TextStyleConfig({
  // eslint-disable-next-line react/prop-types
  fontSize,
  // eslint-disable-next-line react/prop-types
  setFontSize,
  // eslint-disable-next-line react/prop-types
  fontColor,
  // eslint-disable-next-line react/prop-types
  setFontColor,
  // eslint-disable-next-line react/prop-types
  isBold,
  // eslint-disable-next-line react/prop-types
  setIsBold,
}) {
  return (
    <div className='textStyleConfig'>
      <label className='configLabel'>
        Font Size:
      <input type="text" className='input' value={fontSize} onChange={(e) => setFontSize(e.target.value)}/>
      </label>
      <label className='configLabel'>
        Font Color:
      <input type="color" className='colorPicker' value={fontColor} onChange={(e) => setFontColor(e.target.value)}/>
      </label>
      <label className='configLabel'>
        Bold:
      <input type="checkbox" value={isBold} onChange={(e) => setIsBold(e.target.value)}/>
      </label>
    </div>
  )
}

export default TextStyleConfig