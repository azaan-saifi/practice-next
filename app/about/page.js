import React from 'react'
import About from './about'

export const generateMetadata = () => {
  return {
    title:"About",
    description: "This is about page"
  }
}

function page() {
  return (
    <About/>
  )
}

export default page