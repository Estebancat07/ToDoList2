import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNav = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    height: 80px;
    width: 100%;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
`

export const LogoImg = styled.img`
    width: 100px;
    padding: 8px;
    cursor: pointer;

`

export const Nav = styled.nav`
    padding: 5px;
`

export const UlList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
`

export const LiItem = styled.li`
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    opacity: 75%;
    cursor: pointer;

    &:hover{
        opacity: 100%;
    }
`

export const LinkItem = styled(Link)`
    font-size: 22px;
    text-decoration: none;
    font-weight: 600;
    color: ${({ item }) => (item ? '#20FB2F ' : 'rgb(240, 240, 240)')};
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 20px;
`