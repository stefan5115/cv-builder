// eslint-disable-next-line no-unused-vars
import { PropsContext } from "../App";
import { useState, useContext } from "react";
import ExperienceForm from "./ExperienceForm";

function AddExperienceSection() {
  const [isChange, setIsChange] = useState(false);

  const handleChange = () => setIsChange(!isChange);

  const {data,addExperience,removeExperience,handleExperience} = useContext(PropsContext)
 
  return (
    <div className="p-[18px] bg-white rounded-md">
      <button className="w-full flex justify-between" onClick={handleChange}>
            <span className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>Experience
            </span>
            <span>X</span>
      </button>
      <ExperienceForm className={isChange ? 'block' : 'hidden'}
                      data={data}
                      addExperience={addExperience}
                      removeExperience={removeExperience}
                      handleExperience={handleExperience}></ExperienceForm>
    </div>
  )
}

export default AddExperienceSection
