import styled from "styled-components";

export const CardContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 20px;
    border: 2px solid rgba(40, 10, 200, 1);
    border-radius: 40px;
    background-color:slateblue;
    backdrop-filter: blur(5px);
    width: 420px;
    border-radius: 200px;
`
export const CardTitle = styled.h2`
    font-size: 34px;
    font-weight: 600;
    text-align: center;
    color:white;
    width: 80%;
`

export const CardImg = styled.img`
    width: 210px;
    height: 240px;
    padding: 20px;
`
export const CardTexts = styled.p`
    color:black;
    font-weight: 400;

`