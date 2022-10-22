import styled from 'styled-components'

const DefaultStyledPostPreview = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;

  @media (max-width: 767px) {
    padding: 1.2rem 1rem;
  }
  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 1.25rem;
  }
`

const StyledPostPreview = styled(DefaultStyledPostPreview)(
  ({ style }) => style
)

const Title = styled.h3`
  --primary-h: ${({ theme }) => theme.primaryHeadersColor};
  --font-primary: ${({ theme }) => theme.fprimaryPostFont};
  color: var(--primary-h);
  font-size: 1.8rem;
  width: 100%;
  font-family: var(--font-primary);
  margin-bottom: 0;

  @media (max-width: 767px) {
    text-align: center;
  }
  @media (min-width: 768px) {
  }
`

const Description = styled.p`
  --primary-dec: ${({ theme }) => theme.primaryDecorativeColor};
  --font-secondary: ${({ theme }) => theme.secondaryPostFont};
  width: 100%;
  color: var(--primary-dec);
  font-family: var(--font-secondary);
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    margin: 10px auto;
    font-size: 1.4rem;
  }
`

export { StyledPostPreview, Title, Description }
