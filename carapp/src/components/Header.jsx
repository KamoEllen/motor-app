import React from 'react'
import styled from 'styled-components'


const Header = () => {
  return (
    <Container>

      header section
      <a>
        <img src="/images/logo.svg" alt=""/>
      </a>
      <Menu>
       <p><a href="#">Model K</a></p>
       <p><a href="#">Model A</a></p>
       <p><a href="#">Model M</a></p>
       <p><a href="#">Model O</a></p>
       <p><a href="#">Model K</a></p>
      </Menu>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
top: 0;
left: 0;
right: 0;

`;

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

p{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;

}
`;

const Container = styled.div``;

const Menu = styled.div``;
