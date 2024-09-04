'use client'
import React from 'react';
import Link from 'next/link';
import { useGlobalState } from '@/app/globalContext/globalContext';
import { useRouter } from 'next/navigation';
import { cookies } from 'next/headers';

const Navbar = () => {
  const {isUserLogin, setIsUserLogin}  = useGlobalState()
  const route =  useRouter()

  const handleLogout  = async() =>{
    const resutl =  await  fetch('/api/logout',{
      method: "POST",
      headers: {
       'Content-Type': 'Application/json'
      },
    })
    setIsUserLogin(false)
    route.push('/login')
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                Logo
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {isUserLogin ? (<button onClick={handleLogout} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                Logout
              </button>) : (
                <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </button>
              )
              }
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {/* You can add an icon here for mobile menu toggle */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;