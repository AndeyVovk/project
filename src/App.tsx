import React from 'react';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider, Navigate, Routes, Route} from "react-router-dom";
import FirstPage from './components/components/main-page/main-page';
import HeaderComponent from './components/components/general-header/header.component';
import {SecondComponent} from "./components/components/review-module";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "second",
                element: <SecondComponent/>
            },
            {
                path: "main",
                element: <FirstPage/>,
            },
        ]
    },

]);

function App() {

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

function Root() {
    // @ts-ignore
    return (
        <div className="App">
            <HeaderComponent/>
            <Routes>
                <Route
                    path="/"
                    element={[
                        <FirstPage/> ]}
                />
            </Routes>
            <Outlet/>
        </div>
    );
}

export default App;
