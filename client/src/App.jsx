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
export const useBlogContext = () => useContext(BlogContext)


export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]); 
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const handleSelectedBlogId = (blogId) => {
    setSelectedBlogId(blogId);
    console.log(blogId);
  };

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, selectedBlogId, handleSelectedBlogId }}>
      {children}
    </BlogContext.Provider>
  );
}

const BlogAppContainer = styled.div /*style*/`
display:flex;
width: 100vw;
height:100%;

flex-direction:column;
justify-content:flex-start;
margin-bottom:15rem;

@media (min-width: 360px) and (max-width: 900px) {
        margin-left:none;
        margin-bottom:none;
   
   width:100%;
align-items:center;
   
   }

`

function App() {

  return (
    <>
      <BlogProvider>
        <BlogAppContainer>
          <BlogNavBar />
          <BlogPreview />
          <EntradasBusqueda />
        </BlogAppContainer>
      </BlogProvider>
    </>

  )
}

export default App

