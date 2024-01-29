import { useContext } from "react"
import { PropsContext } from "../App"

function PersonalInfo() {

  const {data} = useContext(PropsContext)


  return (
    <div className='flex flex-col items-center text-white px-[24px] py-[36px]' style={{background:`${data.color}`}}>
      <h1 className="justify-self-center text-4xl mb-[14px]">{data.info[0].text}</h1>
      <div className="flex flex-wrap gap-5 justify-center text-lg">
        <div>

            <span>{data.info[1].text}</span>
        </div>
        <div>
            
            <span>{data.info[2].text}</span>
        </div>
        <div>

            <span>{data.info[3].text}</span>
        </div>
      </div>
    </div>
  )
} 
export default PersonalInfo
