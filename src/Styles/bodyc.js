import styled from "styled-components";
export const BodyDiv=styled.div`
    width:100%;
    min-height:100vh;
    background: #8758FF;
    display: flex;
    padding-top: 10vh;
    padding-bottom: 20px;
    justify-content: center;
    overflow: auto; 
    scrollbar-width: none; 
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none; 
    }

`