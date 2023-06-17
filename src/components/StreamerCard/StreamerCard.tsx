import React, { useEffect, useState } from 'react';
import st from './StreamerCard.module.scss';

export type StreamerCardProps = {
    imageUrl: string;
    title: string;
    price: number;
};

const StreamerCard: React.FC<StreamerCardProps> = ({ imageUrl, title, price }) => {
    return (
        <div className={st.card}>
            <img src={imageUrl} alt="photo" />
            <h4 className={st.title}>{title}</h4>
            <button className={st.btn}>{price} руб.</button>
        </div>
    );
};

export default StreamerCard;
