import styled from 'styled-components';
import { useEffect, useState } from 'react'
import { useBlogContext } from '../App';

const BlogPreviewContainer = styled.div /*style*/ `
width:100vw;

display:flex;

flex-direction:row;
flex-wrap:wrap;
height: fit-content;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
justify-content:center;
padding-right:1rem;
padding-left:1rem;

.imagenTop{
width:350px;
height:200px;
object-fit:cover;
}

`

const BlogTitle = styled.h1 /*style*/ `
width:100%;
`
const BlogContenidoCorto = styled.p /*style*/ `
width:85%;
font-size:1.25rem;

`
const BlogAutor = styled.h3 /*style*/ `
width:100%;

`
const Imagenes = styled.img /*style*/ `
width:350px;
height:200px;
object-fit:cover;

`


function BlogPreview() {
    const [blogs,SetBlogs] = useBlogContext();
    const [blogData, setBlogData] = useState([]);
    const [blogIndex, setBlogIndex] = useState('');
    const [imagenes, SetImagenes] = useState([])
    const [imagenIndex, setImagenIndex] = useState(0)

    const fetchBlogData = async () => {
        try {
            const res = await fetch("http://localhost:5173/blog/api/blogRoutes/entrada");
            if (!res.ok) {
                throw new Error(`Error status ${res.status}`);
            }
            const data = await res.json();

            setBlogData(data);



            const index = Math.floor(Math.random() * data.length);
            setBlogIndex(index);

        } catch (err) {
            console.log("Error consiguiendo los datos del back end ", err);
        }
    };

    const FetchImagenes = async () => {
        const url = "https://api.pexels.com/v1/search?query=people&per_page=80"
        const apiKey = "D3Wy0WQLhlQDAMp4jNQQ3269qAiSKcqt9gVuLF4JXbxdO0GWpUOwNjTo"

        try {

            const res = await fetch(url,
                {
                    headers: {
                        Authorization: apiKey
                    }
                })

            if (!res.ok) {
                throw new Error('Error, status:', res.status)
            }

            const data = await res.json();
            SetImagenes(data)
            const index = Math.floor(Math.random() * data?.photos?.length ?? 0);
            if (data?.photos?.[index]?.src?.original) {
                setImagenIndex(index);
            }
            else {
              
                setImagenIndex(0);

            }

        }

        catch (err) {
            console.log("Error consiguiendo los datos de las imagenes ", err);

        }
    }

    useEffect(() => {
        fetchBlogData();
        FetchImagenes();
    }, []);

    SetBlogs(blogData);

    return (
        <>
            {blogData.length > 0 && (
                <BlogPreviewContainer key={blogData[blogIndex].id}>
                    <BlogTitle>{blogData[blogIndex].titulo}</BlogTitle>
                    { imagenes?.photos?.[imagenIndex]?.src?.original && (
                    <img className='imagenTop'
                        src={imagenes.photos[imagenIndex].src.original}
                        about='No se puede cargar la imagen'
                    />
                    )}
                    <BlogContenidoCorto>{blogData[blogIndex].contenido}</BlogContenidoCorto>
                    <BlogAutor>Autor - {blogData[blogIndex].autor}</BlogAutor>
                </BlogPreviewContainer>
            )}
        </>
    );

}

export default BlogPreview