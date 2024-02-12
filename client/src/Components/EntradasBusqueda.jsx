import { useEffect, useState } from 'react';
import styled from 'styled-components';



const BarraBusquedaContainer = styled.div /*style*/`
  width: fit-content;
  margin: 1.5rem;
  margin-top:2rem;
`;

const BarraBusqueda = styled.input  /*style*/`
  width: 300px;
  padding: .6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  background-color:white;
  color: #242424;
`;

const BotonBusqueda = styled.button  /*style*/`
  padding: 10px;
  font-size: 16px;
  background-color: green;
  color: #fff; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const EntradasContainer = styled.div /*style*/ `
width:86%;
margin-top:2rem;
text-align:right;
display:flex;
flex-wrap:wrap;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
gap:1rem;
margin-left:5rem;

`
const IMG = styled.img /*style*/ `
width:200px;
object-fit:cover;


`
const PostEntradas = styled.div /*style*/ `
display:flex;
flex-wrap:nowrap;
width:100%;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
const BlogData = styled.div /*style*/ `
width:75%;
display:flex;
flex-direction:column;
align-items:right;


`



const EntradasBusqueda = () => {
    const [blogCorto, setBlogCorto] = useState([]);
    const [contenido, setContenido] = useState('');
    const [autor, setAutor] = useState('');
    const [titulo, setTitulo] = useState('');
    const fetchBlogData = async () => {
        try {
            const res = await fetch(`http://localhost:5173/blog/api/blogRoutes/filtrar?autor=ale&titulo=espalda&contenido=dramatica%20duele`)
            if (!res.ok) {
                throw new Error(`Error status ${res.status}`);
            }
            const data = await res.json();
            console.log(data);
            setBlogCorto(data);

        }
        catch (err) {
            console.log("Error al filtrar los posts: ", err);

        }

    }

    const  handleSubmit = async () => {
        const params = new URLSearchParams({
            autor,titulo,contenido
        })
        const url = `http://localhost:5173/blog/api/blogRoutes/filtrar?${params}`
        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error(`Error status ${res.status}`);
            }
            const data = await res.json();
            console.log(data);
            setBlogCorto(data);

        }
        catch (err) {
            console.log("Error al filtrar los posts: ", err);

        }
    }

    const cambioTitulo = (e) => {
        const cambio = e.target.value
        setTitulo(cambio)
        console.log(cambio);
    }
    const cambioContenido = (e) => {
        const cambio = e.target.value
        setContenido(cambio)
        console.log(cambio);
    }

    const cambioAutor = (e) => {
        const cambio = e.target.value
        setAutor(cambio)
        console.log(cambio);
    }

    useEffect(() => {
        // fetchBlogData();

    }, [])

    return (
        <BarraBusquedaContainer>
            <BarraBusqueda
                type="text"
                placeholder="Busca por Contenido"
                value={ contenido }
                onChange={cambioContenido}
            />
            <BarraBusqueda
                type="text"
                value={ autor }
                onChange={cambioAutor}
                placeholder="Busca por Autor" />
        
            <BarraBusqueda
                type="text"
                value={ titulo }
                onChange={cambioTitulo}
                placeholder="Busca por Título" />
            <BotonBusqueda
            onClick={handleSubmit}
            >Buscar</BotonBusqueda>
            <EntradasContainer>

                {blogCorto.map(blog => {
                    return (
                        <PostEntradas>
                            <IMG
                                src="https://images.pexels.com/photos/460295/pexels-photo-460295.jpeg"
                            />
                            <BlogData>
                                <h2>{blog.titulo}</h2>
                                <h3>{blog.autor}</h3>
                                <p>{blog.acortado}...</p>
                            </BlogData>
                        </PostEntradas>
                    )
                })}
            </EntradasContainer>
        </BarraBusquedaContainer>
    );
};

export default EntradasBusqueda;
