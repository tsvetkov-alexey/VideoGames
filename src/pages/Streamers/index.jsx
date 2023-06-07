import React from 'react';

const Streamers = () => {
    return (
        <div className="streamers">
            <div className="all-streamers">
                <ul>
                    <li>Itpedia</li>
                    <li>Zubareff</li>
                    <li className="active">Buster</li>
                    <li>Хозяева</li>
                    <li>Gensyxa</li>
                </ul>
            </div>
            <div className="chosen">
                <h3>Name</h3>
                <div className="cards">
                    <div className="card">
                        <img />
                        <p>Text</p>
                        <button> руб.</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Streamers;
