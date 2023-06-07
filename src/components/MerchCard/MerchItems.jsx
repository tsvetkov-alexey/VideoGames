import React from 'react';
import st from './MerchItems.module.scss';

const MerchItems = ({ title, imageUrl, avgPrice }) => {
    return (
        <div className={st.card}>
            <img src={imageUrl} alt="card-item" />
            <image src="../assets" />
            <h3>{title}</h3>
            <button>{avgPrice} руб.</button>
        </div>
    );
};

export default MerchItems;
