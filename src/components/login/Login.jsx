import styled from "styled-components";

export const ContainerTextField = styled.div`
  && {
    &:hover .MuiInput-underline:before {
      border-bottom: 2px solid yellow;
    }
    &:hover .MuiInput-underline:after {
      border-bottom: 2px solid yellow;
    }
    & .MuiInput-underline {
      width: 100%;
      width: 312px;
    }
  }
`;

export const Formulario = styled.form`
margin-left: 34px;
  margin-top: 165px;
  position: absolute;
`;

export const ButtonLogin = styled.button`
  background-color: yellow;
  margin-top: 241px;
  width: 100%;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 10px;
`;

export const H1 = styled.h1`
  font-family: "Roboto", sans-serif;
  margin-top: 39px;
  position: absolute;
  margin-left: 12px;
`;

export const SpanLogin = styled.h1`
  color: gray;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 300;
  width: 232px;
  display: flex;
  margin-top: 115px;
  position: absolute;
  margin-left: 52px;
  text-align: center;
`;

export const Image = styled.img`
margin-left: 134px;
  margin-top: 41px;
  position: absolute;
`;

export const ContainerIconPassword = styled.div`
  margin-top: 39px;
  margin-top: -41px;
  margin-left: 268px;
`;

export const ButtonLoginGoogle = styled.button`
background-color: yellow;
margin-top: 12px;
width: 100%;
height: 36px;
border: none;
outline: none;
border-radius: 10px;
position: absolute;
`;

export const ImageGoogle = styled.img`
width: 24px;
    cursor: pointer;
    
    position: absolute;
    margin-left: -201px;
`;