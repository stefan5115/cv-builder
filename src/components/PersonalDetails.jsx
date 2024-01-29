/* eslint-disable react/prop-types */


function PersonalDetails({data,handleData}) {

  return (
    <form className="bg-white rounded-md p-[18px] gap-2 flex flex-col"> 
      <h1 className="text-2xl font-bold">Personal Details</h1>
      <div className="flex flex-col gap-2">
        <label className="">Full Name</label>
        <input type="text" 
               className="bg-[#f3f4f6] rounded-md p-[5px]" 
               placeholder="First And Last Name"
               value={data.info[0].text}
               onChange={handleData}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">
          <span>Email</span>
          <span className="p-2 text-xs text-[#9ca3af] ">recommended</span> 
        </label>
        <input type="email" 
               className="bg-[#f3f4f6] rounded-md p-[5px]"
               placeholder="Enter Email"
               value={data.info[1].text}
               onChange={handleData}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">
          <span>Phone Number</span>
          <span className="p-2 text-xs text-[#9ca3af]">recommended</span> 
        </label>
        <input type="tel"
               className="bg-[#f3f4f6] rounded-md p-[5px]" 
               placeholder="Enter Phone Number"
               value={data.info[2].text}
               onChange={handleData}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">
          <span>Address</span>
          <span className="p-2 text-xs text-[#9ca3af]">recommended</span> 
        </label>
        <input type="text"
               className="bg-[#f3f4f6] rounded-md p-[5px]" 
               placeholder="City, Country"
               value={data.info[3].text}
               onChange={handleData}
        />
      </div>
    </form>
  )
}

export default PersonalDetails
