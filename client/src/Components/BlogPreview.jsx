import styled from 'styled-components';
import { useEffect,useState } from 'react'

const BlogPreviewContainer = styled.div /*style*/ `
width:100vw;

display:flex;

flex-direction:row;
flex-wrap:wrap;
height: 75%;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
justify-content:center;

`

const BlogTitle = styled.h1 /*style*/ `
width:100%;
`
const BlogContenidoCorto = styled.p /*style*/ `
width:100%;

`
const BlogAutor = styled.h3 /*style*/ `
width:100%;

`
const Imagen = styled.div /*style*/ `
width:45%;
background-color:red;
height:55%;

`


function BlogPreview() {
    const [blogData, setBlogData] = useState([]);
    const [blogIndex, setBlogIndex] = useState('');

    const fetchBlogData = async () => {
        try {
            const res = await fetch("http://localhost:5173/blog/api/blogRoutes/acortadas");
            if (!res.ok) {
                throw new Error(`Error status ${res.status}`);
            }
            const data = await res.json();

            setBlogData(data); 

            console.log("hola3", data);
            console.log("length", data.length);

            const index = Math.floor(Math.random() * data.length);
            setBlogIndex(index);
            console.log("hola2", data[index].titulo);
            console.log("index:", index);
        } catch (err) {
            console.log("Error consiguiendo los datos del back end ", err);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

   
  
    // const componentesblog = blogData.map((item) => (
    //     <div key={item.id}>
         
    //       <BlogTitle>{item.titulo}</BlogTitle>
    //       <BlogContenidoCorto>{item.contenido}</BlogContenidoCorto>
    //       <BlogAutor>{item.autor}</BlogAutor>
         
    //     </div>
    //   ));

    return(
        
        <>
           {blogData.length > 0 && (
            <BlogPreviewContainer key={blogData[blogIndex].id}>
                    <BlogTitle>{blogData[blogIndex].titulo}</BlogTitle>
                    <Imagen>.</Imagen>
                    <BlogContenidoCorto>{blogData[blogIndex].acortado}...</BlogContenidoCorto>
                    <BlogAutor>Autor - {blogData[blogIndex].autor}</BlogAutor>
                    </BlogPreviewContainer>
            )}

</>
      
        
    )
}

export default BlogPreview