import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

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
       <Section1
       title="Model A" 
       description=" Order Online For Touchless Delivery"
       backgroundImg="https://i.pinimg.com/564x/d2/8b/88/d28b88df0fe3f44c02d7db154358027c.jpg"
       leftBtnText="Custom Order"
       righBtnText="Existing Inventory"
       />
       <Section2
       title="Model M" 
       description=" Order Online For Touchless Delivery"
       backgroundImg="https://i.pinimg.com/564x/78/42/67/78426767e2cc56cf006e978cec113659.jpg"
       leftBtnText="Custom Order"
       righBtnText="Existing Inventory"
       />
       <Section3
       title="Model O" 
       description=" Order Online For Touchless Delivery"
       backgroundImg="https://i.pinimg.com/564x/78/42/67/78426767e2cc56cf006e978cec113659.jpg"
       leftBtnText="Custom Order"
       righBtnText="Existing Inventory"
       />
       <Section4
       title="Model K" 
       description=" Order Online For Touchless Delivery"
       backgroundImg="https://i.pinimg.com/564x/78/42/67/78426767e2cc56cf006e978cec113659.jpg"
       leftBtnText="Custom Order"
       righBtnText="Existing Inventory"
       />
        
      
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`;