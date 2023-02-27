import styled from "styled-components";

export const Header = styled.header`
    background: #ffffff;
    width: 100%;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: end;
`;

export const Navigator = styled.nav`
    margin-right: 6rem;
`;

export const Ul = styled.ul`
    list-style: none;
`;

export const Li = styled.li`
    float: left;    
    font-size: 20px; 
`;

export const Link = styled.a`
    display: block; 
    padding: 20px;
    color: #9d8189;
    text-decoration: none;
`;
