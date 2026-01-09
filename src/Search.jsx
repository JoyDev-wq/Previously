import React from 'react'
import close from "./assets/close.svg";
import search_1 from "./assets/black-btn.svg";


const Search = ({searchOpen, setSearchOpen}) => {
  return (
    <div>
      <div className={`${searchOpen ? "block":"hidden"} bg-white absolute top-0 w-full left-0 py-4 px-20 flex justify-between `}>
        <input
          type="text"
          placeholder="Search for"
          className="px-3 text-[#d0d0d0] font-light placeholder:text-[#d0d0d0] placeholder:text-[3.5rem] outline-none leading-none w-[70%] h-20"
          style={{fontSize:"3.5rem"}}
        />
        <div className="flex gap-3 items-center">
          <img
            src={search_1}
            className="border border-black rounded-full w-6 h-6"
            alt=""
          />
          <img src={close} onClick={()=>setSearchOpen(!searchOpen)} className="w-6" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Search
