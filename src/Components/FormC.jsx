import React, { useState } from 'react'
import { FormDiv, FormInput, FormMainDiv,  SubmitButton } from '../Styles/formc'
import StripC from './StripC'

const FormC = () => {
    const [arr,setarr]=useState([]);
    const [task,settask]=useState("");
    const [edit,setedit]=useState(null);
    const handleAddtask=(e)=>{
        e.preventDefault();
        if(task.trim() !==""){
            if(edit!=null){
            console.log(edit);
            const updatearr=[...arr];
            updatearr[edit]=task;
            setarr(updatearr);
            setedit(null);
            }else{
                setarr([...arr,task]);
            }
            settask("");
        }
    }
    const deletetask=(key)=>{
        const newarr=arr.filter((value,index)=>index!=key);
        setarr(newarr);
    }
    const editTask=(task)=>{
        settask(task);
        //setcontrol("Update");
    }
    // let arr=["haye","kar lo","jo kar na"];
  return (
    <>
    <FormMainDiv>
        <h6>Get Things Done!</h6>
        <FormDiv>
            <FormInput 
            placeholder='What is the task today?'
            value={task}
            onChange={(e)=>settask(e.target.value)}
            />
            <SubmitButton onClick={handleAddtask}>{edit !=null?"Update":"Add Task"}</SubmitButton>
        </FormDiv>
        
            {/* <h2>hello</h2> */}
            <StripC arr={arr} deletetask={deletetask} editTask={editTask} setedit={setedit}/>

    </FormMainDiv>
    </>
  )
}

export default FormC