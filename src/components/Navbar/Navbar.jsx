import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import './Navbar.css'

function Navbar() {
    return (
        <header className='navbar'>
            <nav className='nav-menu'>
                <a href="/usestate" className='menu-circle'><IoHomeSharp /> &nbsp;useState</a>
                <a href="/useeffect" className='menu-circle'><FaCodeBranch />&nbsp;useEffect</a>
                <a href="/skills" className='menu-circle'><FaTools />&nbsp;Skills</a>
                <a href="/projects" className='menu-circle'><FaProjectDiagram />&nbsp;Projects</a>
                <a href="/achievements" className='menu-circle'><FaTrophy />&nbsp;Achievements</a>
                <a href="/about" className='menu-circle'><FiInfo /> &nbsp;About</a>
                <a href="/contact" className='menu-circle'><BiSolidContact />&nbsp;Contact</a>
            </nav>
        </header>
    )
}

export default Navbar