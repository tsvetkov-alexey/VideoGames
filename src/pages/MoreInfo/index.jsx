import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import st from './moreInfo.module.scss';

const MoreInfo = () => {
    const [game, setGame] = useState();
    const { id } = useParams();
    useEffect(() => {
        async function fetchGames() {
            try {
                const { data } = await axios.get(
                    'https://643274f83e05ff8b3726929d.mockapi.io/Games/' + id,
                );
                setGame(data);
            } catch (error) {
                console.log('ОШИБКА ПРИ ПОЛУЧЕНИИ ИГР', error);
            }
        }

        fetchGames();
    }, []);

    if (!game) {
        return (
            <div class={st.loaderContainer}>
                <div class={st.loader}></div>
            </div>
        );
    }

    return (
        <div className={st.common}>
            <div className={st.headerAndLike}>
                <h2 className={st.header}>
                    {game.title}{' '}
                    <button className={st.like}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <style></style>
                            </defs>
                            <title />
                            <g data-name="Layer 54" id="Layer_54">
                                <path
                                    className="cls-1"
                                    d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
                                />
                            </g>
                        </svg>
                    </button>
                </h2>
            </div>

            <div className={st.infoBlock}>
                <div className="image">
                    <img src={game.imageUrl} />
                </div>
                <div className={st.shops}>
                    <div className={st.shopA}>
                        <img src={game.shop1} />
                        <div className={st.dashed}></div>
                        <button>{game.minPrice} руб.</button>
                    </div>
                    <div className={st.shopB}>
                        <img src={game.shop2} />
                        <div className={st.dashed}></div>
                        <button>{game.avgPrice} руб.</button>
                    </div>
                    <div className={st.shopC}>
                        <img src={game.shop3} />
                        <div className={st.dashed}></div>
                        <button>{game.maxPrice} руб.</button>
                    </div>
                    <p>Потенциальная экономия: {game.maxPrice - game.minPrice} руб.</p>
                </div>
            </div>
            <h3>Описание</h3>
            <p>{game.desc}</p>
        </div>
    );
};

export default MoreInfo;
