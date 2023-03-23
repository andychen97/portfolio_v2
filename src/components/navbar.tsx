import React from 'react';
import ResumeButton from './resume-button';
import MenuIcon from './icons/menu-icon';
import MenuModal from './menu-modal';
import ModalToggle from '../context/modal-function'

export default function Navbar() {
    const { isOpen, toggle } = ModalToggle();
    return (
        <div>
            <div className='row align-center space-between'>
                <h2 className='green-text align-center'>A</h2>
                <div className='show-sides align-center'>
                    <a href='#about-me' className='options white-text'> <span className='green-text'>01.</span> About Me</a>
                    <a href='#experience' className='options white-text'> <span className='green-text'>02.</span> Experience</a>
                    <a href='#projects' className='options white-text'> <span className='green-text'>03.</span> Projects</a>
                    <a href='#contact-me' className='options white-text'> <span className='green-text'>04.</span> Contact</a>
                    <ResumeButton />
                </div>
                <div className="menu-sub" onClick={toggle}>
                    <MenuIcon />
                </div>
            </div>
            <MenuModal isOpen={isOpen} toggle={toggle} />
        </div>
    );
}
