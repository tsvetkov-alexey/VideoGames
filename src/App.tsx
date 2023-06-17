import React, { Suspense, useCallback } from 'react';

import Home from './pages/Home';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

import './scss/styles.scss';

import { useDispatch, useSelector } from 'react-redux';
import { filterSelector, setCategoryId, setStreamerId } from './redux/slices/filterSlice';

const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));
const Streamers = React.lazy(() => import(/* webpackChunkName: "Streamers" */ './pages/Streamers'));
const MoreInfo = React.lazy(() => import(/* webpackChunkName: "MoreInfo" */ './pages/MoreInfo'));
const Merch = React.lazy(() => import(/* webpackChunkName: "Merch" */ './pages/Merch/Merch'));
const PC = React.lazy(() => import(/* webpackChunkName: "PC" */ './pages/PC'));
const PlayStation = React.lazy(
    () => import(/* webpackChunkName: "PlayStation" */ './pages/Playstation'),
);
const Xbox = React.lazy(() => import(/* webpackChunkName: "Xbox" */ './pages/Xbox'));

function App() {
    const { categoryId, streamerId } = useSelector(filterSelector);

    const dispatch = useDispatch();

    const onChangeCategory = useCallback((id: number) => {
        dispatch(setCategoryId(id));
    }, []);

    const onChangeStreamer = (id: number) => {
        dispatch(setStreamerId(id));
    };

    return (
        <div className="App">
            <Header />
            <div className="main-block">
                <Navigation value={categoryId} onChangeCategory={onChangeCategory} />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route
                        path="games/:id"
                        element={
                            <Suspense fallback={<div>Идет загрузка...</div>}>
                                <MoreInfo />
                            </Suspense>
                        }
                    />
                    <Route
                        path="PC"
                        element={
                            <Suspense fallback={<div>Идет загрузка...</div>}>
                                <PC />
                            </Suspense>
                        }
                    />
                    <Route
                        path="PlayStation"
                        element={
                            <Suspense fallback={<div>Идет загрузка...</div>}>
                                <PlayStation />
                            </Suspense>
                        }
                    />
                    <Route
                        path="Xbox"
                        element={
                            <Suspense fallback={<div>Идет загрузка...</div>}>
                                <Xbox />
                            </Suspense>
                        }
                    />
                    <Route
                        path="merch"
                        element={
                            <Suspense fallback={<div>Идет загрузка...</div>}>
                                <Merch />
                            </Suspense>
                        }
                    />
                    <Route
                        path="streamers"
                        element={
                            <Suspense fallback={<div>Идет загрузка...</div>}>
                                <Streamers value={streamerId} onChangeStreamer={onChangeStreamer} />
                            </Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<div>Идет загрузка...</div>}>
                                <NotFound />
                            </Suspense>
                        }
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
