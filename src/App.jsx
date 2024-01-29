/* eslint-disable no-unused-vars */
import { createContext, useRef, useState } from "react"
import EditSide from "./components/EditSide"
import ResumeContainer from "./components/ResumeContainer"
import {v4 as uuidv4} from 'uuid'
import CV from "./components/SampleCv"


export const PropsContext = createContext()

function App() {
  const [data,setData] = useState({
    color:'#0e374e',
    info:[
      {
        name:'First And Last Name',
        text:''
      },
      {
        name:'Enter Email',
        text:''
      },
      {
        name:'Enter Phone Number',
        text:''
      },
      {
        name:'City, Country',
        text:''
      }
    ],
    educations: [
      {
        id: uuidv4(),
        school:'',
        degree:'',
        startDate:'',
        endDate:'',
        location:'',
      }
    ],
    experiences: [
      {
        id: uuidv4(),
        company:'',
        position:'',
        startDate:'',
        endDate:'',
        location:'',
        description:'',
      }
    ]
  })

  const handleData = (e) => {
    setData({...data,
              info:data.info.map(element => {
                if(element.name === e.target.placeholder)
                  element.text = e.target.value
                  return element
              })    
    })
  }

  const addEducation = () => {
    setData({
      ...data,educations: [...data.educations, {
          id: uuidv4(),
          school:'',
          degree:'',
          startDate:'',
          endDate:'',
          location:'',                      
      }]
    })
  }

  const removeEducation = (id) => {
    setData({...data, educations: data.educations.filter(education => education.id !== id)})
  }

  const handleEducation = (e,id) =>{
    setData({
      ...data,
      educations: data.educations.map(education =>{
        if(education.id === id)
        education[e.target.name] = e.target.value
      return education
      })                
    })
  }

  const addExperience = () => {
    setData({
      ...data,experiences: [...data.experiences, {
          id: uuidv4(),
          company:'',
          position:'',
          startDate:'',
          endDate:'',
          location:'',    
          description:'',                  
      }]
    })
  }

  const removeExperience = (id) => {
    setData({...data, experiences: data.experiences.filter(experience => experience.id !== id)})
  }

  const handleExperience = (e,id) =>{
    setData({
      ...data,
      experiences: data.experiences.map(experience =>{
        if(experience.id === id)
        experience[e.target.name] = e.target.value
      return experience
      })                
    })
  }

  const loadExampleCv = e => {
    setData(CV)
    e = ''
  }

  const deleteBtn = () => {
    setData(
      {
        color:'#0e374e',
    info:[
      {
        name:'First And Last Name',
        text:''
      },
      {
        name:'Enter Email',
        text:''
      },
      {
        name:'Enter Phone Number',
        text:''
      },
      {
        name:'City, Country',
        text:''
      }
    ],
    educations:[],
    experiences:[]
      }
    )
  }

  const getColor = e => {
    setData({...data, color:e.target.value})
  }

  const [layout,setLayout] = useState('grid grid-rows-[auto_1fr] h-[100%]')

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout)
  }

  const [font,setFont] = useState('font-sans')


  const handleFontChange = (newFont) => {
    setFont(newFont)
  }

  const componentRef = useRef()


  return (
    <PropsContext.Provider value={{data,addEducation,removeEducation,handleEducation,addExperience,removeExperience,handleExperience ,handleData,componentRef, loadExampleCv, deleteBtn, handleLayoutChange,layout,getColor,handleFontChange,font}}>
      <div className="app max-w-[1500px] m-auto flex gap-5 px-[24px] py-[32px]">
        <EditSide></EditSide>
        <ResumeContainer></ResumeContainer>
      </div>
    </PropsContext.Provider>
  )
}

export default App
