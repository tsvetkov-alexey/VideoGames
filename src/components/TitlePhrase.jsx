import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../App';

const TitlePhrase = () => {
    const [phrase, setPhrase] = useState('Play has no limits');
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        setPhrase(searchValue ? `Поиск по запросу: ${searchValue}` : 'Play has no limits');
    }, [searchValue]);
    return (
        <div>
            <div className="banner">
                <div className="phrase">
                    <p>{phrase}</p>
                </div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default TitlePhrase;
