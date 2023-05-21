import styled from "styled-components";

export const InputUI = styled.input`
    padding: 10px 30px;
    border-radius: 10px;
    font-size: 22px;
    

    &:hover{
        border: solid 3px;
        border-color:#468CF3;
    }


    @media (max-width: 768px){
        max-width: 680px;
        width: 100%;
    }

    @media (max-width: 480px){
        padding: 10px 20px;
        font-size: 20px;
    }
`

export const InputContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    padding: 20px 30px;
    

    @media (max-width: 768px){
        max-width: 680px;
        gap: 40px;
    }

    @media (max-width: 480px){
        max-width: 400px;
        padding: 10px 15px;
        gap: 30px;
    }
`