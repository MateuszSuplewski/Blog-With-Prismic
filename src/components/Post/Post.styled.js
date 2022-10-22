import styled from 'styled-components'
const DefaultStyledPost = styled.div`
  --primary-h: ${({ theme }) => theme.primaryHeadersColor};
  --secondary-h: ${({ theme }) => theme.secondaryHeadersColor};
  --primary-dec: ${({ theme }) => theme.primaryDecorativeColor};
  --secondary-dec: ${({ theme }) => theme.secondaryDecorativeColor};
  --secondary-bg: ${({ theme }) => theme.secondaryBackgroundColor};
  --font-read: ${({ theme }) => theme.fontToRead};

  box-sizing: border-box;
  background-color: var(--secondary-bg);
  max-width: 1000px;
  margin: 0 auto;

  & h2 {
    margin: 0;
    text-align: center;
    padding: 2.5rem 0;
    background-color: var(--secondary-dec);
    color: var(--secondary-h);
    font-family: var(--font-read);
    font-weight: 700;
  }

  & h4 {
    color: var(--primary-h);
    font-family: var(--font-read);
    padding: 0 1rem;
  }

  & p {
    font-family: var(--font-read);
    padding: 0 1rem;
    font-weight: 300;
  }

  & img {
    object-fit: cover;
    margin: 1.25rem auto;
    display: block;
    width: auto;
    max-width: 100%;
    height: 100%;
    max-height: 600px;
  }
`

const StyledPost = styled(DefaultStyledPost)(({ style }) => style)

export { StyledPost }
