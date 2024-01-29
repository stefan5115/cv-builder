/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'


function EducationForm({className,data,addEducation,removeEducation,handleEducation}) {

  return (
    <div className={`${className} flex flex-col gap-5`}>
        <div className='forms-container '>
            {data.educations.map((education,index) => (
                <div className='educationRow flex flex-col gap-1' key={education.id}>
                    {data.educations.length > 1 &&
                        <div className='flex justify-between mt-[20px] p-2 bg-[#f3f4f6] rounded-md'>
                            <h1 className='font-bold'>Education {index+1}</h1>
                            <button className='flex ' onClick={() => removeEducation(education.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 448 512"><path fill="grey" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                                <span>Delete</span>
                            </button>
                        </div> 
                    }
                    <div className='flex flex-col gap-2 pt-[10px]'>
                        <label htmlFor="">School</label>
                        <input type="text" 
                                name='school' 
                                placeholder='Enter school / university' 
                                className='bg-[#f3f4f6] rounded-md p-[5px]'
                                value ={education.school}
                                onChange={(e) => handleEducation(e,education.id)}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Degree</label>
                        <input type="text" 
                                name="degree" 
                                placeholder='Enter Degree / Field Of Study' 
                                className='bg-[#f3f4f6] rounded-md p-[5px]' 
                                value ={education.degree}
                                onChange={(e) => handleEducation(e,education.id)}
                        />
                    </div>
                    <div className='flex flex-row gap-3 '>
                        <div className='flex flex-col w-[100%] gap-2'>
                            <label htmlFor="">Start Date</label>
                            <input type="text" 
                                name='startDate' 
                                placeholder='Enter Start Date' 
                                className='bg-[#f3f4f6] rounded-md p-[5px]'
                                value ={education.startDate}
                                onChange={(e) => handleEducation(e,education.id)}
                            />
                        </div>
                        <div className='flex flex-col w-[100%] gap-2'>
                            <label htmlFor="">End Date</label>
                            <input type="text" 
                                name='endDate' 
                                placeholder='Enter End Date' 
                                className='bg-[#f3f4f6] rounded-md p-[5px]'
                                value ={education.endDate}    
                                onChange={(e) => handleEducation(e,education.id)}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Location <span className='p-1 text-xs text-[#9ca3af]'>optional</span></label>
                        <input type="text" 
                            name='location' 
                            placeholder='Enter Location' 
                            className='bg-[#f3f4f6] rounded-md p-[5px]'
                            value ={education.location}
                            onChange={(e) => handleEducation(e,education.id)}
                        />
                    </div>
                </div>
            ))
            }
        </div>
        <button onClick={addEducation} className='rounded-[100px] border-2 p-[5px] w-[30%] self-center'>+ Education</button>
</div>
  )
}

export default EducationForm
