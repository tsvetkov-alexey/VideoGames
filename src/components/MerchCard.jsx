import React from 'react';

const MerchCard = ({ imageUrl, title, price }) => {
    return (
        <div className="merch">
            <img src={imageUrl} />
            <h4>{title}</h4>
            <button>
                <span> {price} руб.</span>
            </button>
        </div>
    );
};

export default MerchCard;
