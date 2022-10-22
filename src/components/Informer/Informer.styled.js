import styled from 'styled-components'

const DefaultStyledInformer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 2.5rem auto;
  padding: 20vh 0.75rem 40vh 0.75rem;
  box-sizing: border-box;
  & p {
    font-size: 1.5rem;
    text-align: center;
  }
`

const StyledInformer = styled(DefaultStyledInformer)(({ style }) => style)

export { StyledInformer }
