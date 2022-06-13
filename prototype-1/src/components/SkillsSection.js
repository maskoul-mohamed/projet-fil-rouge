import { useEffect, useState } from "react";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';

import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import {  addSkills } from "../features/resume/resumeSlice";


const SkillsSection = ()=> {
    const getResumeSkills = useSelector(state => state.resume)
    const [skillsList, setSkillsList] = useState([...getResumeSkills.skills]);
    
    const dispatch = useDispatch();

    const handleOnChange = (e, index) => {
        const  value  = e.target.value;
        const updated =  value 
        let list = [...skillsList]
        list[index] = updated;
        setSkillsList(list);
      };

    const handleDateChange = (newValue, name, index)=>{
        const old = [...skillsList];
        const updated = { ...old, [name]: newValue }
        let list = [...skillsList]
        list[index] = updated;
        setSkillsList(list);
    }

  

    useEffect(() =>{
        dispatch(addSkills(skillsList))
    }, [skillsList])
  
    const onAddBtnClick = () => {
        setSkillsList([...skillsList, ""])
    };

   
    return (     
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Education Section
              </Typography>
              <Grid container spacing={3}>
              {skillsList.map((item, index) => {
                return (
                    <React.Fragment  key={index}>
                        <Grid  item xs={12} md={6}>
                        <TextField
                            sx={{ marginTop: "32px"}}
                            required
                            label="Slills"
                            name="skills"
                            value={item}
                            variant="standard"
                            onChange={(e) => handleOnChange(e, index)}
                            fullWidth
                            
                        />
                        </Grid>
                        
                       <Grid sx={{ marginTop: "8px", marginBottom:"8px" }} item xs={12}>
                        <Divider />
                       </Grid>
                    </React.Fragment>
                )
                
              })}
              <Button 
                    sx={{ m: "8px"}} 
                    onClick={onAddBtnClick} 
                    variant="outlined" 
                    size="large"
                ><AddIcon />Add input</Button>
              

              </Grid>
            </React.Fragment>
          );
  
    
}

export default SkillsSection;