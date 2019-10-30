import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Display from './components/Display'
import styled from 'styled-components'
import images from './images/baseballDiamond.jpg'

function App() {

  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  const Container = styled.div `
    background-color: lightsteelblue
    padding: 5%
   
   
  `
  const strike = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const ball = () => {
    if (balls === 3) {
      setBalls(0)
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }
  const foul = () => {
    if (strikes === 2) {
      setStrikes(2)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const hit = () => {
    setStrikes(0)
    setBalls(0)
  }

  return (
    <Container className = "container">
    <Dashboard ball = {ball} strike = {strike} foul = {foul} hit = {hit}/>
    <Display strikes = {strikes} balls = {balls} />
    </Container>
  );
  }

  export default App;