import React, { useEffect, useState } from 'react';
import StreamerCard, { StreamerCardProps } from '../../components/StreamerCard/StreamerCard';
import axios from 'axios';
import StreamerSkeleton from '../../components/Skeletons/StreamerSkeleton';
import { useSelector } from 'react-redux';
import st from './streamers.module.scss';
import { RootState } from '../../redux/store';

const streamers = ['Itpedia', 'Exile', 'Buster', 'Mzlf', 'Gensyxa'];

interface StreamersProps {
    value: number;
    onChangeStreamer: (i: number) => void;
}

const Streamers: React.FC<StreamersProps> = (props) => {
    const { value, onChangeStreamer } = props;
    const [streamerMerch, setStreamerMerch] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const streamerId = useSelector((state: RootState) => state.filter.streamerId);

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

    const streamer = streamerMerch.map((obj: StreamerCardProps, i) => (
        <StreamerCard key={i} {...obj} />
    ));
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
