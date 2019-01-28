import React from 'react';
import { Link } from 'react-router-dom';

export class HeadControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header--fixed w-100 navbar">
                <div className="container h-100 d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <a href="">
                            <svg fill="none" viewBox="0 0 60 57" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#a)">
                                    <path d="m19.554 26.131l-12.857-7.4081c-6.4286-3.9062-8.5714-12.257-4.8214-18.722l24.509 14.278c3.2142 1.8857 4.4196 6.0612 2.5446 9.2938-2.0089 3.2327-6.1607 4.4449-9.375 2.5592z" fill="#C00F4F"/>
                                    <path d="m14.866 53.878c-9.375-5.3878-12.589-17.51-7.2322-26.939l10.179-17.645 33.08 19.261c0.4018 0.2694 0.6696 0.8082 0.4018 1.347l-9.6429 16.837c-5.3571 9.2939-17.411 12.526-26.786 7.1388z" fill="#DC2064"/>
                                    <path d="m49.822 33.943l-12.857-7.4081c-6.4286-3.7715-8.7054-12.122-4.9554-18.588l24.509 14.278c3.2143 1.8857 4.4196 6.0612 2.5446 9.2938-1.875 3.098-6.0268 4.3102-9.241 2.4245z" fill="#C00F4F"/>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <rect width="60" height="56.571" fill="#fff"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div className="h-100 nav-wrap desktop">
                        <ul id="menu" className="topbar">
                            <li className="nav__item">
                                <a href="" className="nav__link">
                                    <span className="nav__link-text">About</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link">
                                    <span className="nav__link-text">Services</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link">
                                    <span className="nav__link-text">Contact</span>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link nav__btn">
                                    <span className="nav__link-text">Login</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-controls">
                        <button className="nav-toggle small-only ninja-btn">
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}