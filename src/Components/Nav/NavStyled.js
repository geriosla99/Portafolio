import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: space-around;
    margin-top: 0.5rem;
    backgroud: #FFFFFF5; 
`;

export const Navigator = styled.nav`
    margin-right: 6rem;
`;

export const Ul = styled.ul`
    list-style: none;
`;

export const Li = styled.li`
    background: #ffffff;
    float: left;    
    font-size: 20px; 
    border-radius: 1rem;
    margin: 0 2rem;
`;

export const Link = styled.a`
    display: block; 
    padding: 10px;
    color: #9d8189;
    text-decoration: none;
`;

export const Logo = styled.img`
    width: 5rem;
    border-radius: 1rem;
`;