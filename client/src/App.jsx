import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';
import BlogNavBar from './Components/NavBar';
import BlogPreview from './Components/BlogPreview';

const  BlogAppContainer =styled.div /*style*/`
display:flex;
width: 100vw;
height:100vh;

flex-direction:column;
`

function App() {

  return (
    <>
    <BlogAppContainer>
    <BlogNavBar/>
    <BlogPreview/>
    </BlogAppContainer>
    </>

  )
}

export default App

