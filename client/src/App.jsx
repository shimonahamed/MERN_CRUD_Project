import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Readpage from "./pages/Readpage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Readpage/>}/>
                <Route path="/create" element={<CreatePage/>}/>
                <Route path="/update/:id" element={<UpdatePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;