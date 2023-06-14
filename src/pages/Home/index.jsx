import React, { useContext, useEffect, useState } from 'react';

import TitlePhrase from '../../components/TitlePhrase';
import GameCard from '../../components/GameCard';
import Skeleton from '../../components/Skeletons/Skeleton';

import styles from './home.module.scss';
import Pagination from '../../components/Pagination';

import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../redux/slices/filterSlice';
import { fetchGames } from '../../redux/slices/gamesSlice';

import axios from 'axios';

const Home = () => {
    const dispatch = useDispatch();
    const { categoryId, searchValue, page } = useSelector((state) => state.filter);
    const { items, status } = useSelector((state) => state.games);

    const onChangePage = (page) => {
        dispatch(setPage(page));
    };

    const searchRequest = searchValue ? `&search=${searchValue}` : '';
    const category = categoryId === 10 ? '' : `&category=${categoryId}`;

    useEffect(() => {
        const getGames = async () => {
            dispatch(fetchGames({ category, searchRequest, page }));
        };
        getGames();
        window.scrollTo(0, 0);
    }, [searchRequest, categoryId, page]);

    const games = items.map((obj) => <GameCard key={obj.id} {...obj} />);
    const gamesArray =
        games.length > 0 ? (
            games
        ) : (
            <>
                <div className="empty"></div>
                <div className={styles.notFoundGame}>
                    <span>😭</span>
                    <p>Похоже ошибка на сервере, зайдите позже</p>
                </div>
            </>
        );

    const skeleton = [...new Array(9)].map((_, i) => <Skeleton key={i} />);

    return (
        <div className="main-block">
            <TitlePhrase games={games} />
            <div className="games">{status === 'loading' ? skeleton : gamesArray}</div>
            <Pagination onChangePage={onChangePage} />
        </div>
    );
};

export default Home;
