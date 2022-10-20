import styled from 'styled-components'

const DefaultStyledHeader = styled.header`
    display: grid;
    background: #F1FFFA; // primary bg color
    box-sizing: border-box;
    width: 100%;
    
  @media (max-width: 767px) {
    grid-template-areas:
    "avatar"
    "title"
    "description";
    padding: 1.2rem 1rem;
    justify-items: center;
    grid-template-columns: 1fr;
    gap: 0 40px;
  }

  @media (min-width: 768px){
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "avatar title"
    "avatar  description";
    padding: 20px 10vw;
  }

`

const StyledHeader = styled(DefaultStyledHeader)(
  ({ style }) => style
)

const Avatar = styled.div`
    grid-area: avatar;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-image: url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');

  @media (max-width: 767px) {

  }

  @media (min-width: 768px){
    margin-right: 30px;
    justify-self: end;
  }

`

const Title = styled.h1`
  color: #454545; // primary title color for posts and so on
  grid-area: title;  
  width: 100%;
  max-width: 500px;

  @media (max-width: 767px) {
    text-align: center;
  }

  @media (min-width: 768px){
    align-self: center;
  }
`

const Description = styled.p`
  grid-area: description;
  width: 100%;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 30px;
  max-width: 500px;
  color: #93B7BE; // color for links and so on, something that u want to click!


  @media (max-width: 767px) {
    border-bottom: 4px solid #785964; // decorative effects color not font color
    padding-bottom: 10px;
  }
  @media (min-width: 768px){
    border-bottom: 2px solid #785964; // decorative effects color not font color
    justify-self: start;
  }
`

export { StyledHeader, Avatar, Title, Description }
