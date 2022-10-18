import styled from 'styled-components'

const DefaultStyledPostPreview = styled.article`
    box-sizing: border-box;
    padding: 20px 20px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1000px;
`

const StyledPostPreview = styled(DefaultStyledPostPreview)(
  ({ style }) => style
)

const Title = styled.h3`
  color: #454545;
  font-size: 1.8rem;
  width: 100%;
  font-family: 'Lato', sans-serif;
`

const Description = styled.p`
  width: 100%;
  font-size: 1.4rem;
  color: #785964;
  font-family: 'PT Serif', serif;
`

export { StyledPostPreview, Title, Description }
