import styled from 'styled-components'

const DefaultStyledInformingContainer = styled.div`
 max-width: 1000px;
 width: 100%;
 margin: 40px auto;
 padding-top: 20vh;
 padding-bottom: 40vh;

 & p {
  font-size: 1.5rem;
  text-align: center;
 }
`

const StyledInformingContainer = styled(DefaultStyledInformingContainer)(
  ({ style }) => style
)

export { StyledInformingContainer }
