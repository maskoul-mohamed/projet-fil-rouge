import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system"
import {template1} from './../assets/images/template1.png';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {  useEffect } from 'react';
import { Link } from 'react-router-dom';


const PickTemplatePage = () => {
    let navigate = useNavigate();
    useEffect(() => {
      if (!currentUser) {
        return navigate("/login");
      }
    }, [])
  
    const { user: currentUser } = useSelector((state) => state.auth);

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
                        
                        <img src={require('./../assets/images/template1.png')} 
                        style={{width:"100%"}} />
                    </Paper>

                
                    </Grid>  
                    </Link> 
                  </Grid> 
            </Container>

        </>
    )
}


export default PickTemplatePage;