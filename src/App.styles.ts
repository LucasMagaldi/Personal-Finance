import styled from "styled-components";

export const Container = styled.div`
    margin:0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Header = styled.div`
    background-color: darkblue;
    min-height: 10%;
    min-width:100%;
    text-align: center;
`;


export const HeaderText = styled.h1`
    color: #fff;
`;


export const Body = styled.div`
    max-width: 60%;
    margin:auto;
    margin-bottom:50px;
`;