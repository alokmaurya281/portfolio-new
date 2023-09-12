import React from "react";
import MenuBarIcon from "./MenuBarIcon";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import MobileNavMenu from  "./MobileNavMenu"
export default function Header() {
  const [isMobileNav, setIsMobilenav] = useState(false)

  const ShowMenu=()=>{
   setIsMobilenav(true);
  }
  const HideMenu=()=>{
   setIsMobilenav(false);
  }

  return (
    <header>
    {isMobileNav?<MobileNavMenu click={HideMenu}/>:""}
      <nav className="navbar container">
        <div className="navbar-brand">
          <h3>
            <span className="white-color">{`</`}</span>
            <span>{`>`}</span>
          </h3>
        </div>
        <MenuBarIcon  click={ShowMenu}/>
        
        <div className="nav-menu">
          <ul>
            <li>
              <HashLink smooth to="/"
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#skills" >Skills</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#education">Education</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#experience">Experience</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#certificates">Certificates</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects">Projects</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">Contact</HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
