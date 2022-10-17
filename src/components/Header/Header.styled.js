import styled from 'styled-components'

const DefaultStyledHeader = styled.header`
    display: grid;
    box-sizing: border-box;
    width: 100%;
    grid-template-areas:
    "avatar title"
    "avatar  description";
    grid-template-columns: 1fr 1fr;
    padding: 20px 10vw;
    background: #F1FFFA; // primary bg color
    gap: 0 40px;
`

const StyledHeader = styled(DefaultStyledHeader)(
  ({ style }) => style
)

const Avatar = styled.div`
    justify-self: end;
    grid-area: avatar;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-image: url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
`

const Title = styled.h1`
  color: #454545; // primary title color for posts and so on
  grid-area: title;  
  width: 100%;
  align-self: center;
  max-width: 500px;
  justify-self: start;
`

const Description = styled.p`
  grid-area: description;
  width: 100%;
  font-family: 'Lato', sans-serif;
  border-bottom: 2px solid #785964; // decorative effects color not font color
  font-size: 1.2rem;
  line-height: 30px;
  max-width: 500px;
  justify-self: start;
  color: #93B7BE; // color for links and so on, something that u want to click!
  font-weight: bold;
`

export { StyledHeader, Avatar, Title, Description }
