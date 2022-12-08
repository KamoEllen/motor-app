import React from 'react'
import styled from 'styled-components'

const Section4 = ({title , description , leftBtnText , righBtnText ,  backgroundImg}) => {
  
  return (
    <Container bgImage={backgroundImg}>
    <Fade bottom>
    <ItemText>
      <h1>{title}</h1>
      <p>{description}</p>
    </ItemText>
    </Fade>
    <Buttons>
      <Fade bottom>
    <ButtonGroup>
      <LeftButton>
        {leftBtnText}
      </LeftButton>
      <RightButton>
        {righBtnText}
      </RightButton>
    </ButtonGroup>
    
      <DownArrow src="images/down-arrow.svg"/>
      </Fade>
      </Buttons>
</Container>
  )
}

export default Section4

const Container = styled.div`
width: cover;
height: 100vh;
background-size: cover;
background-repeat: not-repeat;
background-image: url('https://i.pinimg.com/564x/c1/56/1b/c1561b2ecc93c786270d2612f1c5613f.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: url('https://i.pinimg.com/564x/c1/56/1b/c1561b2ecc93c786270d2612f1c5613f.jpg')

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

const Fade = styled.div``;
