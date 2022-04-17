import React from "react"

export default function Header() {
    return (
    <header className="header">
        <nav className="nav">
            <img className="slika" src="logo192.png" />
            <ul className="nav-items">
                <li>Pricing</li>
                 <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}
