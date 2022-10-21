import styled from 'styled-components'
const DefaultStyledPost = styled.div`

    --primary-h: ${({ theme }) => theme.primaryHeadersColor};
    --secondary-h: ${({ theme }) => theme.secondaryHeadersColor};
    --primary-dec: ${({ theme }) => theme.primaryDecorativeColor};
    --secondary-dec: ${({ theme }) => theme.secondaryDecorativeColor};
    --secondary-bg: ${({ theme }) => theme.secondaryBackgroundColor};


    box-sizing: border-box;
    background-color: var(--secondary-bg);
    max-width: 1000px;
    margin: 0 auto;

    & h2{
      margin: 0;
      text-align: center;
      padding: 40px 0;
      background-color: var(--secondary-dec);
      color: var(--secondary-h);
      font-family: 'Merriweather', serif;
      font-weight: 700;
    }

  & h4{
    color: var(--primary-h);
    font-family: 'Merriweather', serif;
    padding: 0 1rem;
  }

  & p {
    font-family: 'Merriweather', serif;
    padding: 0 1rem;
    font-weight: 300;
  }

  & img {
    object-fit: cover;
    margin: 20px auto;
    display: block;
    width: auto;
    max-width: 100%;
    height: 100%;
    max-height: 600px;
  }
  
`

const StyledPost = styled(DefaultStyledPost)(
  ({ style }) => style
)

const CategoryList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`

const Category = styled.li`
  padding: 5px 20px;
  font-weight: bold;
  background-color: var(--primary-dec);
`

export { StyledPost, CategoryList, Category }
