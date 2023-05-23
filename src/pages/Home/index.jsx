import React, { useContext, useEffect, useState } from 'react';

import Navigation from '../../components/Navigation';
import TitlePhrase from '../../components/TitlePhrase';
import GameCard from '../../components/GameCard';
import Skeleton from '../../components/Skeleton';
import { SearchContext } from '../../App';

import styles from './home.module.scss';
import Pagination from '../../components/Pagination';
import MerchCard from '../../components/MerchCard';

const Home = () => {
    const { categoryId, setCategoryId } = useContext(SearchContext);
    const { searchValue } = useContext(SearchContext);

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const searchRequest = searchValue ? `&search=${searchValue}` : '';
    const category = categoryId === 10 ? '' : `&category=${categoryId}`;

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://643274f83e05ff8b3726929d.mockapi.io/Games?page=${page}&limit=6&search=${searchValue}&${category}`,
        )
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
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
                    <p>По вашему запросу ничего не найдено</p>
                </div>
            </>
        );

    const skeleton = [...new Array(9)].map((_, i) => <Skeleton key={i} />);

    // if (categoryId === 3) {
    //     const merch = items.map((obj) => <MerchCard key={obj.id} {...obj} />);
    //     return (
    //         <div className="main-block">
    //             <TitlePhrase games={games} />
    //             <div className="games">{isLoading ? skeleton : merch}</div>
    //             <Pagination onChangePage={(pageNumber) => setPage(pageNumber)} />
    //         </div>
    //     );
    // }

    return (
        <div className="main-block">
            <TitlePhrase games={games} />
            <div className="games">{isLoading ? skeleton : gamesArray}</div>
            <Pagination onChangePage={(pageNumber) => setPage(pageNumber)} />
        </div>
    );
};

export default Home;
