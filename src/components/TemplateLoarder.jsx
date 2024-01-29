// eslint-disable-next-line react/prop-types
function TemplateLoarder({loadExampleCv, deleteBtn}) {
  return (
    <div className="flex gap-5 bg-white rounded-md p-[12px] justify-between ">
      <button className="flex text-[#ff3300] rounded-md w-[100%] justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 448 512"><path fill="#ff0033" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        <span className="" onClick={deleteBtn}>Clear Resume</span>
      </button>
      <button className="rounded-md bg-[#f3f4f6] w-[100%] text-center font-bold" onClick={loadExampleCv}>Load Example</button>
    </div>
  )
}

export default TemplateLoarder
