import React, { useEffect, useState } from 'react';

import TitlePhrase from '../components/TitlePhrase';
import GameCard, { GameCardProps } from '../components/GameCard';
import Skeleton from '../components/Skeletons/Skeleton';

import { useSelector } from 'react-redux';

import axios from 'axios';
import { filterSelector } from '../redux/slices/filterSlice';

const PC: React.FC = () => {
    const { searchValue, categoryId } = useSelector(filterSelector);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const searchRequest = searchValue ? `&search=${searchValue}` : '';
    const category = '&category=0';

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(
                `https://643274f83e05ff8b3726929d.mockapi.io/Games?&page=1&limit=6&${category}&search=${searchValue}`,
            )
            .then((res) => {
                setItems(res.data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [searchRequest, categoryId]);

    const games = items.map((obj: GameCardProps) => <GameCard key={obj.id} {...obj} />);
    const gamesArray =
        games.length > 0 ? (
            games
        ) : (
            <>
                <div className="empty"></div>
                <div className="notFoundGame">
                    <span>😭</span>
                    <p>По вашему запросу ничего не найдено</p>
                </div>
            </>
        );

    const skeleton = [...new Array(9)].map((_, i) => <Skeleton key={i} />);

    return (
        <div className="main-block">
            <TitlePhrase />
            <div className="games">{isLoading ? skeleton : gamesArray}</div>
        </div>
    );
};

export default PC;
