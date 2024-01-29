import TemplateLoarder from "./TemplateLoarder"
import { useContext } from "react"
import { PropsContext } from "../App"
import Customize from "./Customize"

function CustomizeContainer() {

  const {loadExampleCv,deleteBtn} = useContext(PropsContext)

  return (
    <div className="flex flex-col grow-[999] gap-5">
        <TemplateLoarder loadExampleCv={loadExampleCv} deleteBtn={deleteBtn}></TemplateLoarder>
        <Customize></Customize>
    </div>
  )
}

export default CustomizeContainer
