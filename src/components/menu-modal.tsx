import React, { ReactNode } from 'react';
import ResumeButton from './resume-button';
import ExitIcon from './icons/exit-button';

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function MenuModal(props: ModalType) {
    const menuShow = props.isOpen ? 'hide-menu' : 'drop-menu';
    return (
        <div className={`row align-center modal ${menuShow}`}>
            <div className="modal-content">
                <div className={`row flex-end`} onClick={props.toggle}>
                    <ExitIcon />
                </div>
                <ul className='modal-menu-ul' onClick={props.toggle}>
                    <li>
                        <a href='#about-me' className='options grey-text'> <span className='green-text'>01.<br /></span> About Me</a>
                    </li>
                    <li>
                        <a href='#experience' className='options grey-text'> <span className='green-text'>02.<br /></span> Experience</a>
                    </li>
                    <li>
                        <a href='#projects' className='options grey-text'> <span className='green-text'>03.<br /></span> Projects</a>
                    </li>
                    <li>
                        <a href='#contact-me' className='options grey-text'> <span className='green-text'>04.<br /></span> Contact</a>
                    </li>
                    <li>
                        <ResumeButton />
                    </li>
                </ul>
            </div>
        </div>
    );
}
