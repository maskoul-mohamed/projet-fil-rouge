import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system"
import {template1} from './../assets/images/template1.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Resume from "./templates/template-1/Resume";
import { getResumes } from "../features/resume/resumeSlice";

const Resumes = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => {
      if (!currentUser) {
        return navigate("/login");
      }
      dispatch(getResumes())
    }, [])
  
    const { user: currentUser } = useSelector((state) => state.auth);
    const resume = useSelector(state => state.resume)

    return(
        <>
            <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                <Typography component="h1" variant="h4" align="center">
                        Chose your template
                </Typography>
                <Grid
                    container
                    marginTop={'26px'}
                    marginBottom={'26px'}
                    spacing={0}
                   
                  >
                    <Link to="/create">
                    <Grid item xs={3}>
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        
                        <Resume className="resumes"resume={resume} />
                    </Paper>

                
                    </Grid>  
                    </Link> 
                  </Grid> 
            </Container>

        </>
    )
}


export default Resumes;