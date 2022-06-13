import { useState, useEffect } from 'react';
import EducationSection from '../EducationSection';
import PersonalInfoForm from '../PersonalInfoForm';
import Resume from '../templates/template-1/Resume';
import GenericPdfDownloader from '../GenericPdfDownloader'
import { useSelector, useDispatch } from 'react-redux';
import './resumeBuilder.css';
import PersoInfo from '../PesrsoInfo';

import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExperienceSection from '../ExperienceSection';
import SkillsSection from '../SkillsSection';
import ProfileSection from '../ProfileSection';
import LanguagesSection from '../LanguagesSection';
import InterestsSection from '../InterestsSection';

const ResumeBuilder = () => {
    const [step, setStep] = useState(1)
    
    const dispatch = useDispatch();

    const resume = useSelector(state => state.resume)
    const nextStep =() => {
        setStep(step + 1)

        console.log(step)
    }
    const prevStep =() => {
        setStep(step - 1)

        console.log(step)
    }
  
    function Copyright() {
        return (
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
      
      const steps = ['Contact Information', 
                    'Education ', 
                    'Work Experience',
                    'Skills',
                    'Profile',
                    'Languages',
                    'Interests',
                    'Review Your Resume'
                ];
      
      function getStepContent(step) {
        switch (step) {
          case 0:
            return <PersoInfo />;
          case 1:
             return <EducationSection />;
          case 2:
            return <ExperienceSection />;
          case 3:
            return <SkillsSection />;
          case 4:
            return <ProfileSection />;
          case 5:
            return <LanguagesSection />
          case 6:
            return <InterestsSection />
          case 7:
            return <Resume resume={resume}/>
          default:
            throw new Error('Unknown step');
        }
      }
      
      
        const [activeStep, setActiveStep] = useState(0);
      
        const handleNext = () => {
          setActiveStep(activeStep + 1);
        };
      
        const handleBack = () => {
          setActiveStep(activeStep - 1);
        };
      
  return (
      <>
      <CssBaseline />
     
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Build Your Resume
          </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, display : {xs: 'none', md: 'flex'}}}>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
             
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom  >
                  Your resume is ready now.
                  <Grid
                    container
                    marginTop={'26px'}
                    marginBottom={'26px'}
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                   
                  >

                    <Grid item xs={3}>
                    <GenericPdfDownloader    rootElementId={"divToDownload"}/>
                    </Grid>   
   
                  </Grid> 
                </Typography>
                
                <Resume resume={resume} />
                
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Go To Download' : 'Next'}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
        <Copyright />
      </Container>
      </>
  );
}

export default ResumeBuilder;