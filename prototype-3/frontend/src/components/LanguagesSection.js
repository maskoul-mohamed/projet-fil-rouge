import { useEffect, useState } from "react";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';

import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import {  addLanguages } from "../features/resume/resumeSlice";


const LanguagesSection = ()=> {
    const getResumeLanguages = useSelector(state => state.resume)
    const [languagesList, setLanguagesList] = useState([...getResumeLanguages.languages]);
    
    const dispatch = useDispatch();

    const handleOnChange = (e, index) => {
        const { name, value } = e.target;
        const old = [...languagesList][index];
        const updated = { ...old, [name]: value }
        let list = [...languagesList]
        list[index] = updated;
        setLanguagesList(list);
      };

    const handleDateChange = (newValue, name, index)=>{
        const old = [...languagesList];
        const updated = { ...old, [name]: newValue }
        let list = [...languagesList]
        list[index] = updated;
        setLanguagesList(list);
    }

  

    useEffect(() =>{
        dispatch(addLanguages(languagesList))
    }, [languagesList])
  
    const onAddBtnClick = () => {
        setLanguagesList([...languagesList, ""])
    };

   
    return (     
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Education Section
              </Typography>
              <Grid container spacing={3}>
              {languagesList.map((item, index) => {
                return (
                    <React.Fragment  key={index}>
                        <Grid  item xs={6} >
                            <TextField
                                sx={{ marginTop: "32px"}}
                                required
                                label="Language"
                                name="language"
                                value={item.language}
                                variant="standard"
                                onChange={(e) => handleOnChange(e, index)}
                                fullWidth
                                
                            />
                        </Grid>
                        <Grid  item xs={6} >
                            <TextField
                                sx={{ marginTop: "32px"}}
                                required
                                label="Levle"
                                name="level"
                                value={item.level}
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

export default LanguagesSection;