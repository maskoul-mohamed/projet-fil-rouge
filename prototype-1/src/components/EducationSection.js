import { useEffect, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addEducation } from "../features/resume/resumeSlice";


const EducationSection = ({ nextStep, prevStep, education})=> {
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

    const onEducationChange = (education,id) =>{
            const list = [...educationList];
            list.forEach((item, i) => {
                console.log(item)
                if(item.id === id){
                    item = education
                    list[i] = item
                    setEducationList([...list])
                } 
            });
    }

    useEffect(() =>{
        dispatch(addEducation(educationList))
    }, [educationList])
  
    const onAddBtnClick = () => {
        setEducationList([...educationList, {
            id:1,
            title: "Lorem",
            description:"Lorem epsum dfjkdshfkjhdskjfhdkjfhhdkjshf"
        }])
    };

   
    return (
        <>
            {educationList.map((item, index) => {
                return (
                    <div key={index}>
                    <Box 
                    >
                        <TextField
                            sx={{m: 5}}
                            label="Title"
                            name="title"
                            value={item.title}
                            variant="standard"
                            onChange={(e) => handleOnChange(e, index)}
                        />
                        <TextField
                            sx={{m: 5}}
                            value={item.description}
                            name="description"
                            label="Description"
                            variant="standard"  
                            onChange={(e) => handleOnChange(e, index)}
            
                        />
                    </Box>
                    </div>
                )
            })}
            <button onClick={onAddBtnClick}>Add input</button>
            <Button 
              color="primary"
              variant="contained"
              onClick={() => nextStep()}
              sx={{ mt: 3, }}
            >Next</Button>
            <Button 
              color="secondary"
              sx={{ mt: 3, mb: 2,  }}
              variant="contained"
              onClick={() => prevStep()}
            >Back</Button>
        </>
    )
}

export default EducationSection;