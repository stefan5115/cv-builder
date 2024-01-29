import AddEducationSection from "./AddEducationSection"
import AddExperienceSection from "./AddExperienceSection"
import PersonalDetails from "./PersonalDetails"
import TemplateLoarder from "./TemplateLoarder"
import { useContext } from "react"
import { PropsContext } from "../App"

function FormContainer() {

  const {handleData,data,loadExampleCv,deleteBtn} = useContext(PropsContext)

  return (
    <div className="flex flex-col grow-[999] gap-5">
        <TemplateLoarder loadExampleCv={loadExampleCv} deleteBtn={deleteBtn}></TemplateLoarder>
        <PersonalDetails data={data} handleData={handleData}></PersonalDetails>
        <AddEducationSection></AddEducationSection>
        <AddExperienceSection></AddExperienceSection>
    </div>
  )
}

export default FormContainer
