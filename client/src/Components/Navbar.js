import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar({ getName }) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link className='navbar-logo' onClick={closeMobileMenu}>
                        TRVL<i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='dropdown1' >
                            <Dropdown as={ButtonGroup}>
                                <Button >Stock exchange</Button>

                                <Dropdown.Toggle split id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/nse">NSE</Dropdown.Item>
                                    <Dropdown.Item href="/bse">BSE</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className='dropdown1 dropdown2' >
                            <Dropdown as={ButtonGroup}>
                                <Button >Companies</Button>

                                <Dropdown.Toggle split id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/stock">Reliance</Dropdown.Item>
                                    <Dropdown.Item href="/stock">Ashok Leyland</Dropdown.Item>
                                    <Dropdown.Item href="/stock">Cipla</Dropdown.Item>
                                    <Dropdown.Item href="/stock">Tata Steel</Dropdown.Item>
                                    <Dropdown.Item href="/stock">Eicher Motors</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                BSE
                            </Link>
                        </li> */}
                        {/* <li className='nav-item'>
                            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li> */}
                    </ul>
                    {button && <Button></Button>}
                </div>
            </div>
        </>
    )
}
