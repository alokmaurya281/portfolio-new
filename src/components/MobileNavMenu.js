import React from 'react';
import { HashLink } from 'react-router-hash-link';

function MobileNavMenu(props) {
  return (
    <div className='mobile-nav' style={{ transform: 'translate(0px) !important'}}>
    <div className='close-btn'>
      <button className='button-btn ' onClick={props.click}><b>X</b></button>

    </div>
    <div className="mobile-menu">
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
      
    </div>
  )
}

export default MobileNavMenu
