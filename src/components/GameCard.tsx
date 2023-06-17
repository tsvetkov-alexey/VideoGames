import React from 'react';
import { Link } from 'react-router-dom';

export type GameCardProps = {
    id: string;
    title: string;
    imageUrl: string;
    minPrice: number;
    maxPrice: number;
};

const GameCard: React.FC<GameCardProps> = ({ id, title, imageUrl, minPrice, maxPrice }) => {
    return (
        <div className="game">
            <Link key={title} to={`/games/${id}`}>
                <img src={imageUrl} alt="game" />
            </Link>
            <h4>{title}</h4>
            <p>ЦЕНА:</p>
            <div className="price">
                <span>{minPrice}</span>
                <div className="dashed"></div>
                <span>{maxPrice}</span>
            </div>
            <Link key={id} to={`/games/${id}`}>
                <button>Подробнее</button>
            </Link>
        </div>
    );
};

export default GameCard;
