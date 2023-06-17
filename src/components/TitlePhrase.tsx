import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const TitlePhrase: React.FC = () => {
    const [phrase, setPhrase] = useState('Play has no limits');
    const searchValue = useSelector((state: RootState) => state.filter.searchValue);

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
