import styled from "styled-components";

export const ContainerProyect = styled.div`
    background: #ffe5d9;
    padding: 1rem;
`;

export const TitleProyect = styled.h4`
    text-align: center;
    color: #9d8189;
    font-size: 2rem; 
    margin: auto;
`;

export const ContentProyect = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
    padding: 0 5rem;
`;

export const CardProyect = styled.div`
    background: #ffffff;
    border-radius: 20px;
    padding: 1rem;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

export const TitleProyects = styled.p`
    font-size: 1.5rem;
    text-align: center;
`;

export const ImgProyects = styled.img`
    width: 15rem;
    heigt: auto;
    filter: brightness(50%);
`;