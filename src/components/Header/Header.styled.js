import styled from 'styled-components'

const DefaultStyledHeader = styled.header`
  --primary-h: ${({ theme }) => theme.primaryHeadersColor};
  --primary-dec: ${({ theme }) => theme.primaryDecorativeColor};
  --secondary-dec: ${({ theme }) => theme.secondaryDecorativeColor};
  --primary-bg: ${({ theme }) => theme.primaryBackgroundColor};

  display: grid;
  background: var(--primary-bg); // primary bg color: ;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 767px) {
    grid-template-areas:
      'avatar'
      'title'
      'description';
    padding: 1.2rem 1rem;
    justify-items: center;
    grid-template-columns: 1fr;
    gap: 0 2.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'avatar title'
      'avatar  description';
    padding: 1.25rem 10vw;
  }
`

const StyledHeader = styled(DefaultStyledHeader)(({ style }) => style)

const Avatar = styled.div`
  grid-area: avatar;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: ${props => `url(${props.url})`};
  background-position: center;
  background-size: cover;
  @media (max-width: 767px) {
  }

  @media (min-width: 768px) {
    margin-right: 2rem;
    justify-self: end;
  }
`

const Title = styled.h1`
  color: var(--primary-h);
  grid-area: title;
  width: 100%;
  max-width: 500px;

  @media (max-width: 767px) {
    text-align: center;
  }

  @media (min-width: 768px) {
    align-self: center;
  }
`

const Description = styled.p`
  grid-area: description;
  width: 100%;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 2rem;
  max-width: 500px;
  color: var(--primary-dec);

  @media (max-width: 767px) {
    border-bottom: 0.25rem solid var(--secondary-dec); // decorative effects color not font color
    padding-bottom: 10px;
  }
  @media (min-width: 768px) {
    border-bottom: 0.125rem solid var(--secondary-dec); // decorative effects color not font color
    justify-self: start;
  }
`

export { StyledHeader, Avatar, Title, Description }
