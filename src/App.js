import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { Route , Routes } from 'react-router-dom';
import Details from './Components/Details';

function App() {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/item/:id' element={<Details />} />
            </Routes>
        </div>
    );
}

export default App;