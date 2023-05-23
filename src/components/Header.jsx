import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../App';

const Header = () => {
    const { setCategoryId } = useContext(SearchContext);
    return (
        <div>
            <header>
                <div className="header-content">
                    <Link to="/">
                        <div className="logo" onClick={() => setCategoryId(10)}>
                            <div className="logo-img">
                                <img src="assets/logo.png" alt="logo" />
                            </div>
                            <div className="logo-txt">
                                <p>REACT GAMES</p>
                                <p>Видеоигры по лучшим ценам</p>
                            </div>
                        </div>
                    </Link>
                    <div className="profile">
                        <img src="assets/like.png" alt="liked" className="profile-liked" />
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M26 27C26 21.477 21.523 17 16 17C10.477 17 6 21.477 6 27"
                                stroke="white"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 17C19.3137 17 22 14.3137 22 11C22 7.68629 19.3137 5 16 5C12.6863 5 10 7.68629 10 11C10 14.3137 12.6863 17 16 17Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
