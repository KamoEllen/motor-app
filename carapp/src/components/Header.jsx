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
       <a href="#">Model K</a>
       <a href="#">Model A</a>
       <a href="#">Model M</a>
       <a href="#">Model O</a>
       <a href="#">Model K</a>
      </Menu>
      <RightMenu>
      <a href="#">Shop</a>
      <a href="#">Tesla Account</a>
      <CustomMenu/>
      </RightMenu>
    </Container>
  )
}
 
export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;

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

a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;

}

@media(max-width: 768px){
  display: none;

}
`;

 const RightMenu = styled.div`
 display: flex;
 align-items: center;

 a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;

}
 `;

 const CustomMenu = styled(CustomMenu)`
 cusor:  pointer;

 `;

