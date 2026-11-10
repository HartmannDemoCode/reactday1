import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Welcome from './components/Welcome'
import ListView from './components/ListView'
import SpreadDemo from './components/SpreadDemo'
import './App.css'

function App() {
  const myList = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
    { id: 4, name: "David", email: "david@example.com" },
    { id: 5, name: "Eve", email: "eve@example.com" },
    { id: 6, name: "Frank", email: "frank@example.com" },
    { id: 7, name: "Grace", email: "grace@example.com" },
    { id: 8, name: "Henry", email: "henry@example.com" },
  ];  

  return (
    <>
    <Welcome name="Holger"/>
    <Welcome name="Ulla"/>
    <ListView list={myList} filterLength={5}/>
    <SpreadDemo/>
    </>
  )
}

export default App
