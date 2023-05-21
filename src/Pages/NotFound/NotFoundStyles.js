import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundContainer = styled.div`
    width: 100%;
    height: calc(100vh - 220px);
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

`
export const NotFoundDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const NotFoundImg = styled.img`
    width: 80px;
    height: 80px;
`
export const NotFoundText = styled.h2`
    font-size: 30px;
    text-shadow: 4px 4px 10px rgba(13, 14, 15, 0.6);
    color:#E74D36 ;

`
export const LinkTo = styled(Link)`
    border-radius: 30px;
    padding: 10px 30px;
    border: 2px solid black;
    text-decoration: none;
    background-color:#46F376;
    color: black;
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
`