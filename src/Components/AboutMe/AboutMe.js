import styled from "styled-components";

export const Container = styled.div`
    padding-top: 2rem;
    padding-bottom:1rem;
    color: #9d8189;
`;

export const Content = styled.div`
    margin: 5rem;
    border-radius: 1rem;
    background: #ffffff;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width:425px){
        flex-direction: column;
    }
`;

export const Name = styled.p`
    font-size: 7rem;
    font-weight: 700;
    width: 5rem;
    line-height: normal;
    @media only screen and (max-width:1200px){
        font-size: 7rem !important;
    }
    @media only screen and (max-width:1024px){
        font-size: 5rem !important;
    }
    @media only screen and (max-width:768px){
        font-size: 3rem !important;
    }
    @media only screen and (max-width:320px){
        font-size: 1.5rem !important;
    }
`;

export const PhotoGRL = styled.img`
    width: 22rem;
    height: auto;
    border-radius: 2%;
    @media only screen and (max-width:425px){
        width: 10rem;
    }
    @media only screen and (max-width:320px){
        width: 5rem;
    }
    @media only screen and (max-width:768px){
        width: 10rem;
    }
`;
export const Profesion = styled.p`
    font-size: 2rem;
    @media only screen and (max-width:320px){
        font-size: 1rem !important;
    }
`;

export const InfoChange = styled.div`
    width: 100%;
`;

export const Description = styled.h3`
    text-align: justify;
    padding: 2rem;
    line-height: 3.5rem;
    @media only screen and (max-width:320px){
        font-size: 1.5rem !important;
    }
    
`;
export const DescriptionText = styled.h5`
    text-align: justify;
    padding: 5rem 8rem 5rem 8rem;
    color: #ffffff;
`;
export const DescriptionTitle = styled.h4`
    text-align: center;
    padding: 5rem 8rem 0rem 8rem;
    color: #ffffff;
`;