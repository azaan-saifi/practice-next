'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

function Navbar() {
  const path = usePathname()
  
  return (
    <div className="flex items-center justify-between">
      {path == "/about" ? (
        <h1>Logo</h1>
      ) : (
        <div className="flex gap-5">
          <h1>SignUp</h1>
          <h1>LogIn</h1>
        </div>
      )}
    </div>
  );
}

export default Navbar