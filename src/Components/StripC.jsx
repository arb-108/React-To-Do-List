import React from 'react'
import { DeleteBtn, Editbtn, ListDiv, StripDiv, TaskText } from '../Styles/stripc'

const StripC = ({arr,deletetask,editTask,setedit}) => {
    const handleEdit=(value,index)=>{
        editTask(value);
        setedit(index);
    }
  return (
    <>
        <ListDiv>
            {arr.map((value,key)=>
            <StripDiv key={key}>
            <TaskText>{value}</TaskText>
            <Editbtn onClick={()=>handleEdit(value,key)}/>
            <DeleteBtn onClick={()=>deletetask(key)}/>
            </StripDiv>
            )}
            
        </ListDiv>
    </>
  )
}

export default StripC