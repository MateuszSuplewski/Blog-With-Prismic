import styled from 'styled-components'

const DefaultStyledFooter = styled.footer`
    box-sizing: border-box;
    width: 100%;
    padding: 20px 10vw;
    background: #F1FFFA; // primary bg color
`

const StyledFooter = styled(DefaultStyledFooter)(
  ({ style }) => style
)

const Copyright = styled.p`
 text-align: center;
`

export { StyledFooter, Copyright }
