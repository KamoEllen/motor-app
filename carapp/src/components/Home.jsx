import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section 
        title="Model K" 
        description=" Order Online For Touchless Delivery"
        backgroundImg="link to image"
        leftBtnText="Custom Order"
        righBtnText="Existing Inventory"
        />
       {/* <Section
        />
        <Section
        />
        <Section
        />
        <Section
        />
  */}
      
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`;