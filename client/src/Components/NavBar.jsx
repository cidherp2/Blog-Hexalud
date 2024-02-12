import React, { useState } from 'react';
import styled from 'styled-components';

const NavBar = styled.div /*style*/`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const NavBarContainer = styled.div/*style*/`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavBarButtonList = styled.ul/*style*/`
  list-style: none;
  display: flex;
  gap: 1.75rem;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  margin-right: 1.25rem;

  li {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 10%;
    color: #242424;
    border-radius: 1rem;
    cursor: pointer;

    @media (min-width: 360px) and (max-width: 900px) {
      width: 70%;
    }

    :hover {
      transform: scale(1.25);
      cursor: pointer;
    }
  }
`;

const NavBarTitle = styled.h2/*style*/`
  letter-spacing: 0.15rem;
  font-weight: normal;
  color: #242424;
  margin-left: 1rem;
`;

const ModalOverlay = styled.div/*style*/`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div/*style*/`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  width: 70%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const ModalTitle = styled.h1/*style*/`
  justify-self:flex-start;
  position: relative;
  bottom:4rem;
  @media (min-width: 360px) and (max-width: 900px) {
      font-size:2rem;
      position: relative;
  bottom:unset;
    }

`;

const ModalInput = styled.input/*style*/`
  width: 85%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color:white;
  color: #242424;
`;

const ModalButton = styled.button/*style*/`
  padding: 1rem;
  font-size: 1rem;
  background-color: rgb(50,205,50,.7);
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 88%;
`;

const Cerrar = styled.button /*style*/ `
 padding: 1rem;
  font-size: 1rem;
  background-color: 	rgb(220,20,60,.5);
  color:#242424 ;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  align-self: flex-end;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 5%;
  @media (min-width: 360px) and (max-width: 900px) {
    width: 20%;
    }
`
const Cerrar2 = styled.button /*style*/ `
 padding: 1rem;
  font-size: 1rem;
  background-color: 	rgb(220,20,60,.5);
  color:#242424 ;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  align-self: flex-end;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 5%;
  @media (min-width: 360px) and (max-width: 900px) {
    width: 20%;
    }
`

const SuccessMessageModal = styled.div /*style*/`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BlogNavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [autor, setAutor] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [contenido, setContenido] = useState(null);
  const [error, setError] = useState('');
  const isSendDisabled = !autor || !titulo || !contenido;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(false);
  };

  const handleNewEntrySubmit = async () => {
    const url = 'http://localhost:5173/blog/api/blogRoutes/entrada';
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo: titulo,
          autor: autor,
          contenido: contenido,
        }),
      });
      if (!res.ok) {
        throw new Error("Error de status:" + res.status);
      }
      const resData = await res.json();
      console.log(resData);
      setIsSuccessModalOpen(true);
    } catch (err) {
      console.log("Hubo un error al crear la entrada" + err);
    }
    if (!autor || !titulo || !contenido) {
      setError('Todos los campos son obligatorios');
    } else {
      setError('');
      setIsModalOpen(false);
     
    
    }
  };

  const cambiaContenido = (e) => {
    const nuevoContenido = e.target.value;
    setContenido(nuevoContenido);
  };
  const cambiaTitulo = (e) => {
    const nuevoTitulo = e.target.value;
    setTitulo(nuevoTitulo);
  };
  const cambiaAutor = (e) => {
    const nuevoAutor = e.target.value;
    setAutor(nuevoAutor);
  };
  const recargarPagina = () => {
  window.location.reload();
  }

  return (
    <>
      <NavBarContainer>
        <NavBar>
          <NavBarTitle>Blogme</NavBarTitle>
          <NavBarButtonList>
            <li onClick={openModal}>Nueva Entrada</li>
          </NavBarButtonList>
        </NavBar>
      </NavBarContainer>

      {isModalOpen && !isSuccessModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <Cerrar onClick={closeModal}>X</Cerrar>
            <ModalTitle>¡Postea Tus Ideas!</ModalTitle>
            <ModalInput
              placeholder="Autor"
              onChange={cambiaAutor}
              value={autor}
            />
            <ModalInput
              placeholder="Titulo"
              onChange={cambiaTitulo}
              value={titulo}
            />
            <ModalInput
              placeholder="Contenido"
              onChange={cambiaContenido}
              value={contenido}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ModalButton
              disabled={isSendDisabled}
              type="submit"
              onClick={handleNewEntrySubmit}
            >
              Guardar
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {isSuccessModalOpen && (
        <ModalOverlay>
          <SuccessMessageModal>
            <Cerrar2  onClick={() => { closeModal(),recargarPagina() }}>X</Cerrar2>
            <ModalTitle>¡Se Guardó Su Nueva Entrada!</ModalTitle>
          </SuccessMessageModal>
        </ModalOverlay>
      )}
    </>
  );
}

export default BlogNavBar;
