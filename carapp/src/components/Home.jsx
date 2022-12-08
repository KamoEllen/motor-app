import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section 
        title="Model K" 
        description=" Order Online For Touchless Delivery"
        backgroundImg="https://i.pinimg.com/564x/78/42/67/78426767e2cc56cf006e978cec113659.jpg"
        leftBtnText="Custom Order"
        righBtnText="Existing Inventory"
        />
       <Section
       title="Model K" 
       description=" Order Online For Touchless Delivery"
       backgroundImg="https://i.pinimg.com/564x/d2/8b/88/d28b88df0fe3f44c02d7db154358027c.jpg"
       leftBtnText="Custom Order"
       righBtnText="Existing Inventory"
       
        />
        <Section
        title="Model A" 
        description=" Order Online For Touchless Delivery"
        backgroundImg="https://i.pinimg.com/564x/33/37/66/333766e60b051d483977d18234df2fd8.jpg"
        leftBtnText="Custom Order"
        righBtnText="Existing Inventory"
        
        />
        <Section
        title="Model M" 
        description=" Order Online For Touchless Delivery"
        backgroundImg="https://i.pinimg.com/564x/0a/ed/d6/0aedd6fa2d6a6472b4971df3871d2c53.jpg"
        leftBtnText="Custom Order"
        righBtnText="Existing Inventory"
        
        />
        <Section
        title="Model K" 
        description=" Order Online For Touchless Delivery"
        backgroundImg="https://i.pinimg.com/564x/c1/56/1b/c1561b2ecc93c786270d2612f1c5613f.jpg"
        leftBtnText="Custom Order"
        righBtnText="Existing Inventory"
        
        />
  

        backgroundImg="link to image"

        leftBtnText="Custom Order"
        righBtnText="Existing Inventory"
        />
       {/* <Section
       https://i.pinimg.com/564x/d2/8b/88/d28b88df0fe3f44c02d7db154358027c.jpg
        />
        <Section
        https://i.pinimg.com/564x/33/37/66/333766e60b051d483977d18234df2fd8.jpg
        />
        <Section
        https://i.pinimg.com/564x/0a/ed/d6/0aedd6fa2d6a6472b4971df3871d2c53.jpg
        />
        <Section
        https://i.pinimg.com/564x/c1/56/1b/c1561b2ecc93c786270d2612f1c5613f.jpg

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