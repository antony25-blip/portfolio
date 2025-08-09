import React from 'react'

function Navbar() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav>
            <h1>My Portfolio</h1>
            <ul>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('skills')}>Skills</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar