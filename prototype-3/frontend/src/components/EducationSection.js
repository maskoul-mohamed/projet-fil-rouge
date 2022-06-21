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
import { addEducation } from "../features/resume/resumeSlice";


const EducationSection = ()=> {
    const getResumeEducation = useSelector(state => state.resume)
    const [educationList, setEducationList] = useState([...getResumeEducation.education]);
    
    const dispatch = useDispatch();

    const handleOnChange = (e, index) => {
        const { name, value } = e.target;
        const old = [...educationList][index];
        const updated = { ...old, [name]: value }
        let list = [...educationList]
        list[index] = updated;
        setEducationList(list);
      };

    const handleDateChange = (newValue, name, index)=>{
        const old = [...educationList][index];
        const updated = { ...old, [name]: newValue }
        let list = [...educationList]
        list[index] = updated;
        setEducationList(list);
    }

  

    useEffect(() =>{
        dispatch(addEducation(educationList))
    }, [educationList])
  
    const onAddBtnClick = () => {
        setEducationList([...educationList, {
            schoolName: "",
            location: "",
            degree:"",
            fieldOfStudy:"",
            startDate: null,
            endDate:null,
            description:"",
            
        }])
    };

   
    return (     
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Education Section
              </Typography>
              <Grid container spacing={3}>
              {educationList.map((item, index) => {
                return (
                    <React.Fragment  key={index}>
                        <Grid  item xs={12} md={6}>
                        <TextField
                            sx={{ marginTop: "32px"}}
                            required
                            label="School Name"
                            name="schoolName"
                            value={item.schoolName}
                            variant="standard"
                            onChange={(e) => handleOnChange(e, index)}
                            fullWidth
                            
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                            sx={{ marginTop: "32px"}}
                            required
                            label="School Location"
                            name="location"
                            value={item.location}
                            variant="standard"
                            onChange={(e) => handleOnChange(e, index)}
                            fullWidth
                            
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                            required
                            label="Degree"
                            name="degree"
                            value={item.title}
                            variant="standard"
                            onChange={(e) => handleOnChange(e, index)}
                            fullWidth
                            
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                            required
                            label="Field of Study"
                            name="fieldOfStudy"
                            value={item.title}
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

export default EducationSection;