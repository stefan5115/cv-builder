import { useContext, useState } from "react"
import { PropsContext } from "../App"

function Customize() {
  const [activeButton,setActiveButton] = useState('font-sans')
  const {data, getColor,handleLayoutChange,handleFontChange} = useContext(PropsContext)

  const handleButtonClick = (font) => {
    setActiveButton(font)
    handleFontChange(font)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="p-[18px] bg-white rounded-md">
        <h1 className="text-2xl font-bold">Layout</h1>
        <div className="flex gap-5 pl-[10px] pt-[20px]">
            <button onClick={()=> handleLayoutChange('grid grid-rows-[auto_1fr] h-[100%]')}>
                <div className="border-[1px] w-[50px] h-[50px] rounded-lg " style={{background: `linear-gradient(180deg, ${data.color} 50%, white 50%)`}}></div>
                Top
            </button>
            <button onClick={() => handleLayoutChange('grid grid-cols-[44%_56%] h-[100%]')}>
                <div className="border-[1px] w-[50px] h-[50px] rounded-lg " style={{background: `linear-gradient(90deg, ${data.color} 50%, white 50%)`}}></div>
                Left
            </button>
            <button onClick={() => handleLayoutChange('grid grid-cols-[56%_44%] h-[100%] right')}>
                <div className="border-[1px] w-[50px] h-[50px] rounded-lg "style={{background: `linear-gradient(90deg, white 50%, ${data.color} 50%)`}}></div>
                Right
            </button>
        </div>
      </div>
      <div className="p-[18px] bg-white rounded-md">
        <h1 className="text-2xl font-bold">Color</h1>
        <div className="flex gap-5 pl-[10px] pt-[20px] items-center">
            Accent Color 
            <div className="h-[32px] w-[32px] overflow-hidden rounded-[100%]">
              <input type="color" className="w-[100%] h-[100%] scale-[1.5] " value={data.color} onChange={getColor}/>
            </div>
        </div>
      </div>
      <div className="p-[18px] bg-white rounded-md">
      <h1 className="text-2xl font-bold">Fonts</h1>
        <div className="flex gap-5 pl-[10px] pt-[20px]">
          <button className={`${activeButton === 'font-serif' ? 'flex flex-col items-center p-[10px] rounded-md font-serif border-[1px] border-solid border-black text-white bg-[#0e374e]': 'flex flex-col items-center p-[10px] rounded-md font-serif border-[1px] border-solid border-black'}`} onClick={() => handleButtonClick('font-serif')}>
              <span>Aa</span>
              Serif
          </button>
          <button className={`${activeButton === 'font-sans' ? 'flex flex-col items-center p-[10px] rounded-md font-sans border-[1px] border-solid border-black text-white bg-[#0e374e]': 'flex flex-col items-center p-[10px] rounded-md font-sans border-[1px] border-solid border-black'}`} onClick={() => handleButtonClick('font-sans')}>
              <span>Aa</span>
              Sans
          </button>
          <button className={`${activeButton === 'font-mono' ? 'flex flex-col items-center p-[10px] rounded-md font-mono border-[1px] border-solid border-black text-white bg-[#0e374e]': 'flex flex-col items-center p-[10px] rounded-md font-mono border-[1px] border-solid border-black'}`} onClick={() => handleButtonClick('font-mono')}>
              <span>Aa</span>
              Mono
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Customize
