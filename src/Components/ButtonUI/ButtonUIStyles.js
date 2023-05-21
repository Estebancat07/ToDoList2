import styled from "styled-components";

export const ButtonUI = styled.button`
    background-color: black;
    outline: none;
    color: #fafafa;
    cursor: pointer;
    text-align: center;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;

    &:hover{
        background-color: #66ED3F;
        color: #fafafa;
    }

    &:disabled{
        cursor: not-allowed;
        background-color: ${({ color }) => (color ? '#212529' : 'rgba(210, 80, 0, 1)')};
        color: #495057;
    }

    @media (max-width: 480px){
        padding: 10px 10px;
    }
`

export const ButtonTransparent = styled.button`
    background-color: black;
    outline: none;
    border: none;
    color: #fafafa;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px 20px;
    text-align: center;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;

    &:disabled{
        cursor: not-allowed;
        background-color: ${({ color }) => (color ? '#212529' : 'rgba(210, 80, 0, 1)')};
        color: #495057;
    }
    &:hover{
        opacity: 60%;
        background-color: #EE3432 
    }
    

`

export const ButtonDelete = styled.button`

    background-color: black;
    outline: none;
    border: none;
    color: #fafafa;
    cursor: pointer;
    border-radius: 200px;
    padding: 10px 20px;
    text-align: center;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;

    &:hover{
        opacity: 60%;
        background-color: #EE3432 
    }
`

