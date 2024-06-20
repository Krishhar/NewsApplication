import React from 'react'
import search from '../assets/search.png'

const Nav = ({filter, setFilter}) => {

    const handleFilter = (e)=> {
        setFilter(e.target.value)
    }

    const handleClick = (e) => {
        setFilter('All')
    }
  return (
      <div className="flex flex-col sm:flex-row items-center justify-between p-4">
          <h1 className='sm:text-3xl text-xl font-bold text-red-500'> News Application   </h1>
          <div className="flex space-x-4 mt-2 sm:mt-0">
              <h2 className="cursor-pointer hover:text-blue-500" onClick={handleClick}>Home</h2>
              <h2 className="cursor-pointer hover:text-blue-500">Channels</h2>
              <h2 className="cursor-pointer hover:text-blue-500">Subscribe</h2>
          </div>

          <div className="relative mt-2 sm:mt-0">
              <select className=" border border-black rounded-md focus:outline-none focus:border-blue-500 text-black"
                value= {filter} onChange={handleFilter}
              >
                  <option value='All'>All</option>
                  <option value='Business'>Business</option>
                  <option value='Entertainment'>Entertainment</option>
                  <option value='Politics'>Politics</option>
                  <option value='Religion'>Religion</option>
                  <option value='Sports'>Sports</option>
                  <option value='Technology'>Technology</option>
              </select>
              <input
                  type="text"
                  placeholder="Search"
                    className="flex-grow p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black ml-2"              />
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2">
                  <img src={search} alt="Search" height="20" width="20" />
              </button>
          </div>

      </div>
  )
}

export default Nav