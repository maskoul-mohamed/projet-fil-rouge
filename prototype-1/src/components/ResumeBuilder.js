import { useState, useEffect } from 'react';
import EducationSection from './EducationSection';
import PersonalInfoForm from './PersonalInfoForm';
import Resume from './templates/template-1/Resume';
import GenericPdfDownloader from './GenericPdfDownloader'
import { useSelector, useDispatch } from 'react-redux';

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
    switch(step){
        case 1:
            return (
                <div style={{display: "flex"}}>
                    <Resume resume={resume} />
                    <PersonalInfoForm 
                        nextStep={nextStep} 
                        prevStep={prevStep}
                    />
                    <GenericPdfDownloader rootElementId={"divToDownload"}  />
                </div>

            )
        case 2:
            return (
                <>
                    <Resume resume={resume} />
                    <EducationSection 
                        nextStep={nextStep} 
                        prevStep={prevStep} 
                        education={resume.education}

                    />
                </>
            )

    }
}

export default ResumeBuilder;