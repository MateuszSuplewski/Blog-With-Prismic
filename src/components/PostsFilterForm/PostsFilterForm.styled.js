import styled from 'styled-components'

const DefaultStyledPostsFilterForm = styled.div`
  box-sizing: border-box;
  padding: 1.25rem;
  width: 100%;

  & input,
  select {
    padding: 0.5rem 0.75rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  & form {
    width: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 767px) {
    & form {
      margin: 0 auto;
      flex-direction: column;
    }

    & input,
    select {
      margin: 1.25rem 0;
      width: 260px;
      box-sizing: border-box;
    }
  }
  @media (min-width: 768px) {
    & form {
      justify-content: center;
    }

    & input,
    select {
      margin: 0.75rem;
    }
  }
`

const StyledPostsFilterForm = styled(DefaultStyledPostsFilterForm)(
  ({ style }) => style
)

export { StyledPostsFilterForm }
