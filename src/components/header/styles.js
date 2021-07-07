import styled from 'styled-components'

export const HeaderBar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 65px;
  background-color: rgb(196, 196, 196, 0.2);
  align-items: center;

  button{
    width: 162px;
    height: 32px;
    left: 1581px;
    top: 25px;

    background: #FFFFFF;
    border-radius: 13px;
  }

  input {
    width: 800px;
    mix-blend-mode: normal;
    border-radius: 13px;
    height: 26px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-left: -20px;
  margin-top: 62px;
  width: 228px;
  height: 118px;
  background-color: rgb(160, 160, 160);
  justify-content: center;
  align-items: center;
  border-radius: 13px;
`