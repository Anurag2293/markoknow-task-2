import { useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Home from './components/Home';
import Result from './components/Result';

import ResultState from './context/ResultState';

function App() {

  return (
    <ResultState>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-result" element={<Result />} />
      </Routes>
    </BrowserRouter>
    </ResultState>
  )
}

export default App
