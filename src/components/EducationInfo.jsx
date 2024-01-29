import { useContext } from "react"
import { PropsContext } from "../App"

function EducationInfo() {

  const {data} = useContext(PropsContext)

  return (
    <div className="mt-[40px] px-[56px]" >
        <h3 className="text-xl text-center bg-[#f3f4f6] rounded-sm" style={{color: data.color}}>Education</h3>
        {
          data.educations.map(element => (
            <div className="flex flex-row gap-5 mb-[24px]" key={element.id}>
              <div>
                <p>{element.startDate}<span> - </span> {element.endDate}</p>
                <p>{element.location}</p>
              </div>
              <div>
                <p className="font-bold">{element.school}</p>
                <p>{element.degree}</p>
              </div>
             </div>
          )
            
          )
        }

        
    </div>
  )
}
export default EducationInfo
