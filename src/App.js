import React, { createContext, useState } from 'react';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Streamers from './pages/Streamers';
import MoreInfo from './pages/MoreInfo';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

import styles from './scss/styles.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from './redux/slices/filterSlice';
import Merch from './pages/Merch/Merch';
import NotWorking from './components/NotWorking';

function App() {
    const searchValue = useSelector((state) => state.filter.searchValue);

    const categoryId = useSelector((state) => state.filter.categoryId);
    const dispatch = useDispatch();

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    return (
        <div className="App">
            <Header />
            <div className="main-block">
                <Navigation value={categoryId} onChangeCategory={onChangeCategory} />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="games/:id" element={<MoreInfo />} />
                    <Route path="merch" element={<Merch />} />
                    <Route path="streamers" element={<NotWorking />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
