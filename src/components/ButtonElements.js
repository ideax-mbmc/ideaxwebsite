import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const Button = styled(LinkR)`
    border-radius:50px;
    background:${({primary})=>(primary ? '#00060B' : '#013F6A')};
    white-space:nowrap;
    padding:${({big})=>(big ? '14px 48px' : '12px 30px')};
    color:white;
    font-size:${({fontBig})=>(fontBig ? '20px': '16px')};
    outline:none;
    border:none;
    text-decoration:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.2s ease-in-out;
    max-width: 200px;
    width: 100%;

    &:hover{
    transition:all 0.2s ease-in-out;
    background:${({primary})=>(primary ? '#013F6A' : '#4D85AC')};
    }
`;