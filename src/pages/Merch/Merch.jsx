import React from 'react';
import st from './merch.module.scss';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import MerchItems from '../../components/MerchCard/MerchItems';
import MerchSkeleton from '../../components/MerchSkeleton';

const Merch = () => {
    const [merchItems, setMerchItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        axios
            .get('https://643274f83e05ff8b3726929d.mockapi.io/Games?filter=merch')
            .then(({ data }) => setMerchItems(data));
        setLoading(false);
    }, []);

    const merchSkeleton = [...new Array(8)].map((_, i) => <MerchSkeleton key={i} />);
    const merch = merchItems.map((obj) => <MerchItems key={obj.id} {...obj} />);

    return (
        <div>
            <h1 className={st.header}>Игровой мерч</h1>
            <div className={st.cards}>{merch}</div>
        </div>
    );
};

export default Merch;
