import React from 'react';

import Search from './Search';
import { Link } from 'react-router-dom';

const platforms = ['PC', 'PlayStation', 'Xbox'];

const Navigation = ({ value, onChangeCategory }) => {
    return (
        <div>
            <nav>
                <ul>
                    <div className="platforms">
                        {platforms.map((platformName, i) => (
                            <li
                                key={i}
                                onClick={() => onChangeCategory(i)}
                                className={value === i ? 'active' : ''}>
                                {platformName}
                            </li>
                        ))}
                    </div>
                </ul>
                <Search />
                <ul>
                    <Link to="/NotFound">
                        <li className="merch-header">Мерч</li>
                    </Link>

                    <Link to="/NotFound">
                        <li className="streamers-header">Стримеры</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
