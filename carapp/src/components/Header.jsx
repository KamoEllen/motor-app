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

const Container = styled.div``;

const Menu = styled.div``;