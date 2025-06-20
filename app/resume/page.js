import Resume from '@/components/Resume/Resume'
import React from 'react'

export const metadata = {
  title: "Resume",
  description:
    "I’m Amar, a MERN Stack Developer passionate about building clean, scalable web apps and solving real-world coding challenges.",
};
const page = () => {
  return (
    <>
      <Resume/>
    </>
  )
}

export default page
