import styled from 'styled-components'

const DefaultStyledButton = styled.button`
  --secondary-dec: ${({ theme }) => theme.secondaryDecorativeColor};

  width: 200px;
  height: 35px;
  background-color: var(--secondary-dec);
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
`

const StyledButton = styled(DefaultStyledButton)(({ style }) => style)

export default StyledButton
