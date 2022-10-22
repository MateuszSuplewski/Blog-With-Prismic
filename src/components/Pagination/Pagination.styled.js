import styled from 'styled-components'

const DefaultStyledPagination = styled.nav`
  box-sizing: border-box;
  width: 100%;
  padding: 1.25rem;
  margin: 0 auto;
  max-width: 1000px;
`

const StyledPagination = styled(DefaultStyledPagination)(({ style }) => style)

const PageNumberList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  box-sizing: border-box;
  padding-left: 0;
`

const PageNumber = styled.li`
  display: inline-block;
  font-size: 1.2rem;
`

export { StyledPagination, PageNumberList, PageNumber }
