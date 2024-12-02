import styled from "styled-components";
export const FormMainDiv=styled.div`
    width:450px;
    /* height:600px; */
    background: #1A1A40;
    display: flex;
    height: fit-content;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    gap:2rem;
    /* max-height: 600px; */
    h6{
        font-size: 2.5rem;
        color:white;
        font-weight: 500;
    }
    @media (max-width: 500px) {
        width:90%;
    }

`
export const FormDiv=styled.form`
    width:100%;
    border:1px solid #8758FF;
    padding: 0;
    margin: 0;
    display: flex;
    border-radius: 3px;
`
export const FormInput=styled.input`
    width:100%;
    border:none;
    background: transparent;
    outline:none;
    padding-left: 5px;
    color: white;
    font-size: 1.4rem;
    height: 40px;
    /* border: 1px solid red; */
`
export const SubmitButton=styled.button`
    cursor: pointer;
    padding: 8px 10px;
    font-size: 1.3rem;
    font-weight: 500;
    background: #8758ff;
    color:white;
    border: none;
    outline: none;
    white-space:nowrap;
    transition: all 0.3s ease-in-out;
    &:hover{
        background: #8710ff;
        transition: all 0.3s ease-in-out;
    }
`
