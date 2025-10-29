import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx'
import Container from './components/container.jsx'


function App() {
  return (
      <Container className="">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
  )
}

export default App
