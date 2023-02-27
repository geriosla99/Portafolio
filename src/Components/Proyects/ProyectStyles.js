import styled from "styled-components";

export const ContainerProyect = styled.div`
    background: #ffe5d9;
    padding: 1rem;
`;

export const TitleProyect = styled.h4`
    text-align: center;
    color: #9d8189;
    font-size: 2rem; 
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