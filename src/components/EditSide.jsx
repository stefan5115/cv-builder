import FormContainer from "./FormContainer"
import SideBar from "./SideBar"
import CustomizeContainer from "./CustomizeContainer"
import { useState } from "react"


function EditSide() {

  const [showForm, setShowForm] = useState(true)
  const [showCustomize, setShowCustomize] = useState(false)
  const [activeButton, setActiveButton] = useState(null)

  const handleShowFrom = () => {
    setShowForm(true)
    setShowCustomize(false)
    setActiveButton('first')
  }

  const handleShowCustomize = () => {
    setShowForm(false)
    setShowCustomize(true)
    setActiveButton('second')
  }



  return (
    <div className="flex gap-5 flex-wrap grow h-fit">
      <SideBar handleShowFrom={handleShowFrom} handleShowCustomize={handleShowCustomize} activeButton={activeButton} ></SideBar>
      {showForm && <FormContainer></FormContainer>}
      {showCustomize && <CustomizeContainer></CustomizeContainer>}
    </div>
  )
}

export default EditSide
