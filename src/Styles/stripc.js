import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
export const ListDiv=styled.div`
    width:100%;
    /* border:1px solid #8758FF; */
    padding: 0;
    margin: 0;
    background: transparent;
    display: flex;
    flex-direction: column;
    gap:1rem;
    /* border-radius: 3px; */
`
export const StripDiv=styled.div`
    width:100%;
    display:flex;
    /* align-items: center; */
    justify-content: center;
    padding: 8px;
    gap:1rem;
    background: #8758ff;
    color:white;
    border-radius: 3px;
`
export const TaskText=styled.p`
    flex: 1;
    font-size:1.3rem;
    word-wrap: break-word;
    white-space: normal;
    text-align: justify;
    padding-right: 5px;
`
export const Editbtn=styled(FaRegEdit)`
    cursor: pointer;
    font-size:1.8rem;
    color:white;
    transition: all 0.3s ease-in-out;
    &:hover{
        color:#1A1A40;
        transition: all 0.3s ease-in-out;
    }
`
export const DeleteBtn=styled(FaRegTrashAlt)`
    cursor: pointer;
   color:white;
    font-size:1.8rem;
    transition: all 0.3s ease-in-out;
    &:hover{
        color:red;
        transition: all 0.3s ease-in-out;
    }
`