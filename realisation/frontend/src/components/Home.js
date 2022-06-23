import { Button, Container, Grid, Typography, Link } from "@mui/material"


const Home = () => {
    function Copyright() {
        return (
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
              Cv Builder
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    return (
        <Container component="main" >
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Typography sx={{ 
                    textAlign: "left",
                    fontWeight: 700,
                    fontSize: "4rem",
                    fontFamily: 'Roboto',
                    marginTop: "48px"
                    }} 
                variant="h1" color="primary.dark" 
                align="left" gutterBottom
                >
                Make Your Online Resume
            </Typography>
            <Typography sx={{ 
                    textAlign: "left",
                    fontFamily: 'Roboto',
                    marginTop: "24px"
                    }} 
                variant="subtitle1" color="primary.dark" 
                align="left" gutterBottom
                >
                A Quick and Easy Way to Create Your Professional Resume. 
                Fast and Easy to Use Our resume builder lets
                you easily and quickly create a resume using our resume wizard.
            </Typography>
            <Button 
                sx={{marginTop: "42px"}}
                size='large' 
                variant="contained" 
                >MAKE YOUR CV NOW</Button>

            </Grid>
            <Grid item xs={12} sm={6}>
             <img src={require("../assets/images/hero.png")}  style={{width: "100%"}}/>
            </Grid>
        </Grid>
        <Copyright />
        </Container>
    )
}


export default Home;