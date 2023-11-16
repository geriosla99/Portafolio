import styled from "styled-components";

export const ContainerContact = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top:1rem;
`;

export const ContentContact = styled.div`
    padding: 3rem 5rem;
`;
export const ContainerRRSS = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
export const RRSS = styled.div`
    display: flex;
    justify-content: center;
`;

export const TitleContact = styled.h4`
text-align: center;
color: #9d8189;
font-size: 2rem; 
margin: auto;
`;
export const ButtonForm = styled.input`
    width:100%;
    border-radius: 50px;
    border: none;
    background: #9d8189;
    margin-top: 1rem;
    padding: .5rem;
    color: #ffffff;
`;