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

export const SearchContext = createContext();

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [categoryId, setCategoryId] = useState(10);
    return (
        <div className="App">
            <SearchContext.Provider
                value={{ searchValue, setSearchValue, categoryId, setCategoryId }}>
                <Header />
                <div className="main-block">
                    <Navigation value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="games/:id" element={<MoreInfo />} />
                        <Route path="streamers" element={<Streamers />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </SearchContext.Provider>
            <Footer />
        </div>
    );
}

export default App;
