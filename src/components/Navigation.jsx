import React, { useState } from 'react';

import Search from './Search';
import { Link } from 'react-router-dom';

const platforms = ['PC', 'PlayStation', 'Xbox'];

const Navigation = ({ value, onChangeCategory }) => {
    const [activeCategory, setActiveCategory] = useState(null);

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
                    <Link
                        to="/merch"
                        onClick={() => onChangeCategory(3)}
                        className={value === 3 ? 'active' : ''}>
                        <li className="merch-header">Мерч</li>
                    </Link>

                    <Link
                        to="/streamers"
                        onClick={() => onChangeCategory(4)}
                        className={value === 4 ? 'active' : ''}>
                        <li className="streamers-header">Стримеры</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
