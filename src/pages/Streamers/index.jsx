import React, { useEffect, useState } from 'react';
import StreamerCard from '../../components/StreamerCard/StreamerCard';
import axios from 'axios';
import StreamerSkeleton from '../../components/Skeletons/StreamerSkeleton';
import { useSelector } from 'react-redux';
import st from './streamers.module.scss';

const streamers = ['Itpedia', 'Exile', 'Buster', 'Mzlf', 'Gensyxa'];

const Streamers = ({ value, onChangeStreamer }) => {
    const [streamerMerch, setStreamerMerch] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const streamerId = useSelector((state) => state.filter.streamerId);

    useEffect(() => {
        setIsLoading(true);
        async function fetchStreamers() {
            await axios
                .get(
                    `https://643274f83e05ff8b3726929d.mockapi.io/Games?filter=${streamers[streamerId]}`,
                )
                .then(({ data }) => setStreamerMerch(data));
            setIsLoading(false);
        }

        fetchStreamers();
    }, [streamerId]);

    const streamer = streamerMerch.map((obj, i) => <StreamerCard key={i} {...obj} />);
    const skeleton = [...new Array(6)].map((_, i) => <StreamerSkeleton key={i} />);

    return (
        <div className="streamers">
            <div className="all-streamers">
                <ul>
                    {streamers.map((el, i) => (
                        <li
                            key={i}
                            onClick={() => onChangeStreamer(i)}
                            className={value === i ? 'active' : ''}>
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
            {isLoading ? (
                <div className="streamer_cards">{skeleton}</div>
            ) : (
                <div className={st.streamer_cards}>{streamer}</div>
            )}
        </div>
    );
};

export default Streamers;
