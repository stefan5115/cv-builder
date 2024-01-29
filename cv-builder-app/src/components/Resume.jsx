

import { useContext } from "react"
import EducationInfo from "./EducationInfo"
import ExperienceInfo from "./ExperienceInfo"
import PersonalInfo from "./PersonalInfo"
import { PropsContext } from "../App"



function Resume() {

  const {layout,font} = useContext(PropsContext)

  return (
    <div className={`${layout} ${font}`}>
        <PersonalInfo ></PersonalInfo>
        <div>
            <EducationInfo ></EducationInfo>
            <ExperienceInfo ></ExperienceInfo>
        </div>
    </div>
  )
}

export default Resume
