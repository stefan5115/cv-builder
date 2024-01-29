import { useContext } from "react"
import { PropsContext } from "../App"

function ExperienceInfo() {

  const {data} = useContext(PropsContext)

  return (
    <div className="mt-[40px] px-[56px]">
      <h3 className="text-xl text-center bg-[#f3f4f6] rounded-sm" style={{color:data.color}}>Professional Experience</h3>
      {
        data.experiences.map(element => (
          <div className="flex flex-row gap-5" key={element.id}>
            <div className="shrink-0">
              <p>{element.startDate} <span> - </span>{element.endDate}</p>
              <p>{element.location}</p>
            </div>
            <div className="mb-[24px]">
              <p className="font-bold mb-[2px]">{element.company}</p>
              <p>{element.position}</p>
              <p className="mt-[4px]">{element.description}</p>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

export default ExperienceInfo
