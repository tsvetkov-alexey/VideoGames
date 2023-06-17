import React from 'react';
import st from './MerchItems.module.scss';

export type MerchItemsProps = {
    id: string;
    title: string;
    imageUrl: string;
    avgPrice: number;
};

const MerchItems: React.FC<MerchItemsProps> = ({ title, imageUrl, avgPrice }) => {
    return (
        <div className={st.card}>
            <img src={imageUrl} alt="card-item" />
            <h3>{title}</h3>
            <button>{avgPrice} руб.</button>
        </div>
    );
};

export default MerchItems;
