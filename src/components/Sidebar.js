import React from 'react'

const Sidebar = () => {
  return (
      <div className="space-y-6 md:space-y-10 mt-10">
        <h1 className="font-bold text-4xl text-center md:hidden">
          School <span className="text-teal-600">CMS</span>
        </h1>
        <h1 className="hidden md:block font-bold text-sm md:text-xl text-center cursor-pointer">
          School<span className="text-teal-600"> Management</span>
        </h1>
        <div className="space-y-3">
          <img className="w-10 md:w-16 rounded-full mx-auto" src="https://pbs.twimg.com/profile_images/1467997254929854470/mDYbXoVl_400x400.jpg" alt="Avatar user"/>
          <div>
            <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">Eduard Pantazi</h2>
            <p className="text-xs text-gray-500 text-center">Administrator</p>
          </div>
        </div>
        <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
          <input type="text" className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none" placeholder="Search"/>
          <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
            <svg className="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/home" className="sidebar-item">
            <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span className="align-middle"> Dashboard</span>
          </a>
          <a href="/reports" className="sidebar-item">
            <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path clipRule="evenodd" fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
            </svg>
            <span className="align-middle"> Reports</span>
          </a>

          <a href="/students" className="sidebar-item">
            <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
            <span className="align-middle"> Students</span>
          </a>
        </div>
      </div>
  )
}

export default Sidebar
