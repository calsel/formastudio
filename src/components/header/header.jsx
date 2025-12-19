import './header.scss';
import logo from '../../assets/img/logo.svg';
import phone from '../../assets/img/phone.svg';
import { useState } from 'react';


const navItems = [
    {id: 1, text: 'ABOUT STUDIO', href: '#'},
    {id: 2, text: 'PRICES', href: '#'},
    {id: 3, text: 'PROJECTS', href: '#'},
    {id: 4, text: 'CONTACTS', href: '#'}
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (

        <header className="header">
            <div className="container">
                <div className="header__top">
                    <nav className="menu">
                        <button
                            className="menu__btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span></span>
                        </button>

                        <ul className={`menu__list ${menuOpen ? 'active' : ''}`}>
                            {navItems.map(item => (
                                <li key={item.id} className="menu__item">
                                    <a href={item.href}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="header__logo">
                        <img src={logo} alt=""/>
                    </a>
                    <a href="tel:+380682554585" className="header__phone">
                        <img src={phone} alt=""/>
                        <span>+38 (068) 255 45 85</span>
                    </a>
                </div>
                <h1 className="header__title">
                    Architecture
                    that shapes space
                </h1>
                <p className="header__text">We create innovative and aesthetically refined spaces where comfort and
                    functionality merge with contemporary design.</p>
                <a href="#" className="header__btn">Submit a request</a>
            </div>
        </header>

    )
}

export default Header;
