import styled from 'styled-components'

const DefaultStyledPostsFilterForm = styled.div`
    box-sizing: border-box;
    padding: 20px 20px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1000px;

    & input,select {
      padding: 8px 12px;
      margin: 10px;
      border: 1px solid rgba(0,0,0,0.3);
    }

    & button {
      width: 200px;
      height: 35px;
      background-color: #785964;
      color: white;
      font-weight: bold;
      letter-spacing: 1px;
    }

    @media (max-width: 767px) {
    & form {
      width: 100%;
      margin: 0 auto;

    }
  }
  @media (min-width: 768px){
    border-bottom: 2px solid #785964; // decorative effects color not font color
    justify-self: start;
  }
`

const StyledPostsFilterForm = styled(DefaultStyledPostsFilterForm)(
  ({ style }) => style
)

export { StyledPostsFilterForm }
