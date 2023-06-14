import React from 'react';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Streamers from './pages/Streamers';
import MoreInfo from './pages/MoreInfo';
import Merch from './pages/Merch/Merch';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

import styles from './scss/styles.scss';

import { useDispatch, useSelector } from 'react-redux';
import { filterSelector, setCategoryId, setStreamerId } from './redux/slices/filterSlice';
import PC from './pages/PC';
import PlayStation from './pages/Playstation';
import Xbox from './pages/Xbox';

function App() {
    const { searchValue, categoryId, streamerId } = useSelector(filterSelector);

    const dispatch = useDispatch();

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    const onChangeStreamer = (id) => {
        dispatch(setStreamerId(id));
    };

    return (
        <div className="App">
            <Header />
            <div className="main-block">
                <Navigation value={categoryId} onChangeCategory={onChangeCategory} />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="games/:id" element={<MoreInfo />} />
                    <Route path="PC" element={<PC />} />
                    <Route path="PlayStation" element={<PlayStation />} />
                    <Route path="Xbox" element={<Xbox />} />
                    <Route path="merch" element={<Merch />} />
                    <Route
                        path="streamers"
                        element={
                            <Streamers value={streamerId} onChangeStreamer={onChangeStreamer} />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
