import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 60px 40px 40px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1300px;
    width: 100%;
    gap: 30px;
`

export const HomeMainText = styled.span`
    font-size: 40px;
    text-align: center;
    color: black;
    width: 80%;
    font-weight: 600;
    text-shadow: 4px 4px 10px rgba(13, 14, 15, 0.6);
    

`

export const HomeImgs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

export const HomeImg = styled.img `
    width: 340px;
    height: 340px;
    padding: 40px;
    border-radius: 190px;

    &:hover{
        transform: scale(1.05);
        border: 4px solid #468CF3 ;
        cursor: pointer;
        opacity: 100%;
        filter: drop-shadow(0px 0px 10px #468CF3 );
        transition: all ease-out 0.2s;
        
    }
`
