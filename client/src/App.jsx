import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';
import BlogNavBar from './Components/NavBar';
import BlogPreview from './Components/BlogPreview';
import EntradasBusqueda from './Components/EntradasBusqueda';
import { createContext } from 'react';

export const BlogContext = createContext(); 
export const useBlogContext =() => useContext(BlogContext)

export const BlogProvider = ({children}) => {
  const [blogs, SetBlogs] = useState([])

  return(

    <BlogContext.Provider value={[blogs,SetBlogs]}>
      {children}
    </BlogContext.Provider>
  )

}

const  BlogAppContainer =styled.div /*style*/`
display:flex;
width: 100vw;
height:100vh;

flex-direction:column;

`

function App() {

  return (
    <>
    <BlogProvider>
    <BlogAppContainer>
    <BlogNavBar/>
    <BlogPreview/>
    <EntradasBusqueda/>
    </BlogAppContainer>
    </BlogProvider>
    </>

  )
}

export default App

