import styled from 'styled-components'

const DefaultStyledPostPreview = styled.article`
    box-sizing: border-box;
    padding: 20px 10px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin: 0 15%;
`

const StyledPostPreview = styled(DefaultStyledPostPreview)(
  ({ style }) => style
)

const Title = styled.h3`
  color: #454545;
  font-size: 1.8rem;
  width: 100%;
`

const Description = styled.p`
  font-family: 'Lato', sans-serif;
  width: 100%;
  font-size: 1.4rem;
  color: #785964;
`

export { StyledPostPreview, Title, Description }
