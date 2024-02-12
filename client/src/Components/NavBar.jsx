import styled from 'styled-components';

const NavBar = styled.div /*style*/ `
display:flex;
width:100%;
justify-content:flex-end;
`
const NavBarContainer = styled.div /*style*/ `
display:flex;
width: 100%;
height:10%;
justify-content:center;

box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`

const NavBarButtonList = styled.ul  /*style*/`
list-style:none;
display:flex;
gap :1.75rem;
align-items:center;
width: 100%;
justify-content: flex-end;
margin-right:1.25rem;

li{
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width:10%;
  color: #242424;
  border-radius:1rem;
}

:hover{
transform:scale(1.25);
}
`

const NavBarTitle =styled.h2 /*style*/ `
letter-spacing:.15rem;
font-weight:normal;
color: #242424;
margin-left:1rem;

`

function BlogNavBar (){ 
return(
    <NavBarContainer>
    <NavBar>
    <NavBarTitle>Blogme</NavBarTitle>
      <NavBarButtonList>
        <li>Blogs</li>
        <li>Home</li>
        <li>Buscar</li>
        </NavBarButtonList>
      
        </NavBar> 
    </NavBarContainer>
)

}

export default BlogNavBar