import React, { useState } from 'react';

import Search from './Search';
import { Link } from 'react-router-dom';

type NavigationProps = {
    value: number;
    onChangeCategory: (i: number) => void;
};

const Navigation: React.FC<NavigationProps> = React.memo(({ value, onChangeCategory }) => {
    return (
        <div>
            <nav>
                <ul>
                    <div className="platforms">
                        {/* {platforms.map((platformName, i) => (
                            <li
                                key={i}
                                onClick={() => onChangeCategory(i)}
                                className={value === i ? 'active' : ''}>
                                {platformName}
                            </li>
                        ))} */}
                        <Link
                            to="/PC"
                            onClick={() => onChangeCategory(0)}
                            className={value === 0 ? 'active' : ''}>
                            <li className="merch-header">PC</li>
                        </Link>
                        <Link
                            to="/Playstation"
                            onClick={() => onChangeCategory(1)}
                            className={value === 1 ? 'active' : ''}>
                            <li className="merch-header">PlayStation</li>
                        </Link>
                        <Link
                            to="/Xbox"
                            onClick={() => onChangeCategory(2)}
                            className={value === 2 ? 'active' : ''}>
                            <li className="merch-header">Xbox</li>
                        </Link>
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
});

export default Navigation;
