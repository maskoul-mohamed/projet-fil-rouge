import { useEffect, useState } from "react";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {DatePicker} from '@mui/x-date-pickers';

import TextField from '@mui/material/TextField';import { useSelector, useDispatch } from "react-redux";
import { addExperience } from "../features/resume/resumeSlice";


const ExperienceSection = ()=> {
    const getResumeExperience = useSelector(state => state.resume)
    const [experienceList, setExperienceList] = useState([...getResumeExperience.experience]);
    
    const dispatch = useDispatch();

    const handleOnChange = (e, index) => {
        const { name, value } = e.target;
        const old = [...experienceList][index];
        const updated = { ...old, [name]: value }
        let list = [...experienceList]
        list[index] = updated;
        setExperienceList(list);
      };

    const handleDateChange = (newValue, name, index)=>{
        const old = [...experienceList][index];
        const updated = { ...old, [name]: newValue }
        let list = [...experienceList]
        list[index] = updated;
        setExperienceList(list);
    }

   

    useEffect(() =>{
        dispatch(addExperience(experienceList))
    }, [experienceList])
  
    const onAddBtnClick = () => {
        setExperienceList([...experienceList, {
            jobTitle: "",
            state: "",
            employer:"",
            city:"",
            startDate: null,
            endDate:null,
            description:"",
            
        }])
    };

   
    return (     
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Experience Section
              </Typography>
              <Grid container spacing={3}>
              {experienceList.map((item, index) => {
                return (
                    <React.Fragment  key={index}>
                        <Grid  item xs={12} md={6}>
                        <TextField
                            sx={{ marginTop: "32px"}}
                            required
                            label="Job Title"
                            name="jobTitle"
                            value={item.jobTitle}
                            variant="standard"
                            onChange={(e) => handleOnChange(e, index)}
                            fullWidth
                            
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                            sx={{ marginTop: "32px"}}
                            required
                            label="Employer"
                            name="employer"
                            value={item.employer}
                            variant="standard"
                            onChange={(e) => handleOnChange(e, index)}
                            fullWidth
                            
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                            required
                            label="City"
                            name="city"
                            value={item.city}
                            variant="standard"
                            onChange={(e) => handleOnChange(e, index)}
                            fullWidth 
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                            required
                            label="State"
                            name="state"
                            value={item.state}
                            variant="standard"
                            onChange={(e) => handleOnChange(e, index)}
                            fullWidth
                            
                        />
                        </Grid>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Grid item xs={12} md={6}>
                            <DatePicker
                                    label="Start Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={item.startDate}
                                    onChange={(newValue) => handleDateChange(newValue, "startDate", index)}
                                    name="startDate"
                                    renderInput={(props) => (
                                        <TextField {...props} fullWidth />
                                    )}
                                    />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <DatePicker
                                    label="End Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={item.endDate}
                                    onChange={(newValue) => handleDateChange(newValue, "endDate", index)}
                                    name="endDate"
                                    renderInput={(props) => (
                                        <TextField {...props} fullWidth  />
                                    )}
                                    />
                                </Grid>
                            </LocalizationProvider>
                        <Grid item xs={12}>
                        <TextField
                            multiline
                            rows={6}
                            value={item.description}
                            name="description"
                            label="Description"
                            fullWidth
                            variant="standard"  
                            onChange={(e) => handleOnChange(e, index)}
                        />
                        </Grid>
                       <Grid sx={{ marginTop: "8px", marginBottom:"8px" }} item xs={12}>
                        <Divider dark={true} />
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

export default ExperienceSection;