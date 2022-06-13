import { useEffect, useState } from "react";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';

import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import {  addProfile } from "../features/resume/resumeSlice";


const ProfileSection = ()=> {
    const getResumeProfile = useSelector(state => state.resume)
    const [profile, setProfile] = useState(getResumeProfile.profile);
    
    const dispatch = useDispatch();

    const handleOnChange = (e, index) => {
        const  value  = e.target.value;
        setProfile(value);
      };

    const handleDateChange = (newValue, name, index)=>{
        const old = [...profile];
        const updated = { ...old, [name]: newValue }
        let list = [...profile]
        list[index] = updated;
        setProfile(list);
    }

  

    useEffect(() =>{
        dispatch(addProfile(profile))
    }, [profile])

   
    return (     
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Profile Section
              </Typography>
              <Grid container spacing={3}>
                    <React.Fragment>
                        <Grid  item xs={12}>
                        <TextField
                            sx={{ marginTop: "32px"}}
                            multiline
                            rows={6}
                            label="Profile"
                            name="profile"
                            value={profile}
                            variant="standard"
                            onChange={(e) => handleOnChange(e)}
                            fullWidth
                            
                        />
                        </Grid>
                        
                       <Grid sx={{ marginTop: "8px", marginBottom:"8px" }} item xs={12}>
                        <Divider />
                       </Grid>
                    </React.Fragment>
              

              </Grid>
            </React.Fragment>
          );
  
    
}

export default ProfileSection;