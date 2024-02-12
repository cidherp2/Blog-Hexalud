import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useBlogContext } from '../App';



const BarraBusquedaContainer = styled.div /*style*/`
  width: fit-content;
  margin: 1.5rem;
  margin-top:2rem;
  @media (min-width: 360px) and (max-width: 900px) {
    margin: 0;
  margin-top:2rem;
  display:flex;
  flex-direction:column;
  align-items:center;
   }
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
  @media (min-width: 360px) and (max-width: 900px) {
   width:20rem;
   max-width:20rem;
   margin-top:1rem;  
   }
  
`;

const BotonBusqueda = styled.button  /*style*/`
  padding: 10px;
  font-size: 16px;
  background-color: green;
  color: #fff; 
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  @media (min-width: 360px) and (max-width: 900px) {
    width:22rem;
   max-width:22rem;
   margin-top:1rem;  
   
   }
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
@media (min-width: 360px) and (max-width: 900px) {
   
   width:100%;
  flex-direction:column;
    align-items:center;
   margin-top:1rem;  
   margin-right:5rem; 
   text-align:center;
 
   
   }

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
:hover{
   cursor: pointer;
    }
    @media (min-width: 360px) and (max-width: 900px) {
        margin-left:none;
   
   width:100%;
  flex-direction:column;
 

 @media (min-width: 360px) and (max-width: 900px) {
      
      align-items:center;
     } 
   
   }
`
const BlogData = styled.div /*style*/ `
width:75%;
display:flex;
flex-direction:column;
align-items:right;
@media (min-width: 360px) and (max-width: 900px) {
      
    align-items:center;
   }




`



const EntradasBusqueda = () => {
    const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);
    const { blogs, selectedBlogId, handleSelectedBlogId } = useBlogContext();
    const [blogCorto, setBlogCorto] = useState([]);
    const [contenido, setContenido] = useState('');
    const [autor, setAutor] = useState('');
    const [titulo, setTitulo] = useState('');
    const [imagenes, SetImagenes] = useState([])
    const [imagenIndex, setImagenIndex] = useState(0)

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
            SetImagenes(data.photos)
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

    console.log(imagenes)

    const handleSubmit = async () => {
        const params = new URLSearchParams({
            autor, titulo, contenido
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
        setAutor("");
        setContenido("");
        setTitulo("")
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
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const formatoFecha = (dateString) => {
        const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const fecha = new Date(dateString);
        return fecha.toLocaleDateString('en-US', opciones);
      };

    useEffect(() => {
        // fetchBlogData();
        FetchImagenes()
    }, [])

    return (
        <BarraBusquedaContainer>
            <BarraBusqueda
                type="text"
                placeholder="Busca por Contenido"
                value={contenido}
                onChange={cambioContenido}
            />
            <BarraBusqueda
                type="text"
                value={autor}
                onChange={cambioAutor}
                placeholder="Busca por Autor" />

            <BarraBusqueda
                type="text"
                value={titulo}
                onChange={cambioTitulo}
                placeholder="Busca por Título" />
            <BotonBusqueda
                onClick={() => { handleSubmit() }}
            >Buscar</BotonBusqueda>
            <EntradasContainer>

                {blogCorto.map((blog, index) => {
                    const image = imagenes[index]?.src?.original;
                    return (
                        <PostEntradas id="postEntradas" key={index} onClick={() => {
                            handleSelectedBlogId(blog.id);
                            scrollToTop(); // Corrected here
                        }}>
                            {image && <IMG src={image} />}
                            <BlogData>
                                <h2>{blog.titulo}</h2>
                                <h3>{blog.autor}</h3>
                                <p>{blog.acortado}...</p>
                                <h3 style={{fontWeight:"lighter"}}>Fecha de publicación - {formatoFecha(blog?.fecha_publicado)}</h3>
                            </BlogData>
                        </PostEntradas>
                    );
                })}
            </EntradasContainer>
        </BarraBusquedaContainer>
    );
};

export default EntradasBusqueda;
