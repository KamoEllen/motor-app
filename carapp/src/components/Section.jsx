import React from 'react'
import styled from 'styled-components'

const Section = ({title , description , leftBtnText , righBtnText ,  backgroundImg}) => {
  
  return (
     <Container bgImage={backgroundImg}>

const Section = ({title , description , leftBtnText , righBtnText}) => {
  
  return (
     <Container>
       Section


        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          <RightButton>
            {righBtnText}
          </RightButton>
        </ButtonGroup>
        
          <DownArrow src="images/down-arrow.svg"/>
          </Buttons>

          <DownArrow src="images/down-arrow.svg"/>
          </Buttons>


    </Container>
  )
}

export default Section

const Container = styled.div`
width: 100vh;
height: 100vh;
background-size: cover;
background-repeat: not-repeat;
background-image: url('https://i.pinimg.com/564x/78/42/67/78426767e2cc56cf006e978cec113659.jpg');

background-image: url('/images/model-s.jpg');


background-size: cover;
background-repeat: not-repeat;
background-image: url("https://i.pinimg.com/564x/1a/fc/d9/1afcd9016d3fbc12c45115348b15c75d.jpg");


display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: url('https://i.pinimg.com/564x/78/42/67/78426767e2cc56cf006e978cec113659.jpg');


background-image: ${props => `url("/images/${props.bgImage}")`}


`;

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;

`;


const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: silver;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cusor: pointer;
margin: 8px;


`;

const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;

`;

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media(max-width: 768px){
  flex-direction: column;

}

`;

const DownArrow = styled.img`
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;


`;

const Buttons = styled.div`

`;



`;

`;

background-image: url("https://i.pinimg.com/564x/1a/fc/d9/1afcd9016d3fbc12c45115348b15c75d.jpg");
`;


