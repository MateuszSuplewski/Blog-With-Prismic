import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DefaultStyledMoreAboutLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 5px;
  border: 3px solid #93B7BE;
`

const StyledMoreAboutLink = styled(DefaultStyledMoreAboutLink)(
  ({ style }) => style
)

export { StyledMoreAboutLink }
