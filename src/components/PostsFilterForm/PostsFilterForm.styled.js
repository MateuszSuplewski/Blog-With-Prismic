import styled from 'styled-components'

const DefaultStyledPostsFilterForm = styled.div`
  --secondary-dec: ${({ theme }) => theme.secondaryDecorativeColor};
  
    box-sizing: border-box;
    padding: 20px 20px;
    width: 100%;

    & input,select {
      padding: 8px 12px;
      border: 1px solid rgba(0,0,0,0.3);
    }

    & button {
      width: 200px;
      height: 35px;
      background-color: var(--secondary-dec);
      color: white;
      font-weight: bold;
      letter-spacing: 1px;
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

    & input,select {
      margin: 20px 0;
      width: 260px;
      box-sizing: border-box;
    }

  }
  @media (min-width: 768px){

    & form {
      justify-content: center;
    }

    & input,select {
      margin: 10px;
    }

  }
`

const StyledPostsFilterForm = styled(DefaultStyledPostsFilterForm)(
  ({ style }) => style
)

export { StyledPostsFilterForm }
