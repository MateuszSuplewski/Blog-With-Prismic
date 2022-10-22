import styled from 'styled-components'

const DefaultStyledCategoryList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`

const StyledCategoryList = styled(DefaultStyledCategoryList)(
  ({ style }) => style
)

const Category = styled.li`
  --primary-dec: ${({ theme }) => theme.primaryDecorativeColor};

  padding: 0.25rem 1.25rem;
  font-weight: bold;
  background-color: var(--primary-dec);
`

export { StyledCategoryList, Category }
