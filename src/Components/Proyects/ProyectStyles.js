import styled from "styled-components";

export const ContainerProyect = styled.div`
    padding: 1rem;
`;

export const TitleProyect = styled.h4`
    text-align: center;
    color: #ffffff;
    font-size: 2rem; 
    margin: auto;
`;

export const ContentProyect = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
    padding: 0 5rem;
    margin-top: 2rem;
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
    @media only screen and (max-width:320px){
        font-size: 1rem  !important;
    }
`;

export const DescriptionProyect = styled.p`
    @media only screen and (max-width:320px){
        font-size: .7rem  !important;
    }
`;

export const ImgProyects = styled.img`
    width: 15rem;
    heigt: auto;
    filter: brightness(50%);
    @media only screen and (max-width:320px){
        width: 10rem !important;
    }
`;