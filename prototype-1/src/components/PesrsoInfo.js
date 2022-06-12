import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from '@mui/material/Input';
import { Avatar } from '@mui/material';

import { useSelector,useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addPersonalInfo } from '../features/resume/resumeSlice';


export default function PersoInfo() {
  const refs = React.createRef()
  const getPersonalInfo = useSelector(state => state.resume.personalInfo)
  const [personalInfo, setPersonalInfo] = useState({...getPersonalInfo});
  
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
      const { name, value } = e.target;
      setPersonalInfo({...personalInfo, [name]: value})
    };

  const handleImage = (e) => {
    console.log(e.target.files[0])
    var file = e.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
  
     reader.onloadend =  (e) => {
      setPersonalInfo({
          ...personalInfo,
          image: [reader.result]
        })
  }
  }
    useEffect(() =>{
      dispatch(addPersonalInfo(personalInfo))
  }, [personalInfo])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={e => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={e => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            id="postTitle"
            name="postTitle"
            label="Post Title"
            fullWidth
            autoComplete="contact job"
            variant="standard"
            onChange={e => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line "
            fullWidth
            autoComplete="contact address-line"
            variant="standard"
            onChange={e => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="contact address-level2"
            variant="standard"
            onChange={e => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={e => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="contact postal-code"
            variant="standard"
            onChange={e => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            type="phone"
            variant="standard"
            onChange={e => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            type="email"
            variant="standard"
            onChange={e => handleOnChange(e)}
          />
        </Grid>
        <Grid item xs={12} >
          <Avatar variant={"rounded"} alt="The image" src={personalInfo.image} style={{
              width: 150,
              height: 150,
          }} /> 
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            type='file'
            name='image'
            onChange={(e) => handleImage(e)}
            
          />     
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
