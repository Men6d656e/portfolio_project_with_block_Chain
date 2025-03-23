import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Handle() {
  return (
    <div className='flex gap-20 justify-center items-center my-5 bg-blue-950 py-5'>
        <Link href="#" ><CiLinkedin size={40} /></Link>
        <Link href="#" ><FaTwitter size={40} /></Link>
        <Link href="#" ><FaGithub  size={40}/></Link>
    </div>
  )
}

export default Handle