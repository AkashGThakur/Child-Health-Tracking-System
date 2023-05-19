import './App.css';
import React,{useState, useEffect} from 'react';
import TemporaryDrawer from './navbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreeningNav from './ScreeningNav';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import DentalService from '../Services/DentalService';


const Dental = () => {

  const {child_id} = useParams();     
  const [oral_hygiene, setOral_hygiene] = useState('');
  const [gum_condition, setGum_condition] = useState('');
  const [oral_ulcers,  setOral_ulcers] = useState('');
  const [gum_bleeding, setGum_bleeding] = useState('');
  const [discoloration_of_teeth,  setDiscoloration_of_teeth] = useState('');
  const [food_impaction,  setFood_impaction] = useState('');
  const [carious_teeth,  setCarious_teeth] = useState('');
  const [extraction_done,  setExtraction_done] = useState('');
  const [fluorosis,  setFluorosis] = useState('');
  const [tooth_brushing_frequency,  setTooth_brushing_frequency] = useState('');
  const [referred_to_speacialist,  setReffered_to_specialist] = useState('');
  const [comments, setComments] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    DentalService.getChildByID(child_id).then((response) => {
      setOral_hygiene(response.data.oral_hygiene)
      setGum_condition(response.data.gum_condition)
      setOral_ulcers(response.data.oral_ulcers)
      setGum_bleeding(response.data.gum_bleeding)
      setDiscoloration_of_teeth(response.data.discoloration_of_teeth)
      setFood_impaction(response.data.food_impaction)
      setCarious_teeth(response.data.carious_teeth)
      setExtraction_done(response.data.extraction_done)
      setFluorosis(response.data.fluorosis)
      setTooth_brushing_frequency(response.data.tooth_brushing_frequency)
      setReffered_to_specialist(response.data.referred_to_speacialist)
      setComments(response.data.comments)
    })  
},[])

const saveChildInfo = (e) => {
  e.preventDefault();
  const ChildInfo = {oral_hygiene, gum_condition, oral_ulcers, gum_bleeding, discoloration_of_teeth, food_impaction, carious_teeth, extraction_done, fluorosis, tooth_brushing_frequency, referred_to_speacialist, comments };
  DentalService.UpdateChild(child_id, ChildInfo).then((response) => {
    console.log(response.data);
    navigate(`/Dental/${child_id}`);
     }).catch(error => {
    console.log(error);
  })   
}

  return (
    <div>
    <TemporaryDrawer/>
    <ScreeningNav child_id ={child_id}/>
    <div>
    <h4 className='page-screeninghead'>Dental Checkup</h4>
        <div>

        <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
         }}
           noValidate
          autoComplete="off"
          >
      <FormControl>
      <FormLabel >Oral Hygiene</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="oral_hygiene" value={oral_hygiene} onChange={(e) => setOral_hygiene(e.target.value)} >
        <FormControlLabel value={'Good'} control={<Radio />} label="Good" />
        <FormControlLabel value={'Fair'} control={<Radio />} label="Fair" />
        <FormControlLabel value={'Poor'} control={<Radio />} label="Poor" />

      </RadioGroup>
      </FormControl>
      

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gum Condition</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gum_condition" value={gum_condition} onChange={(e) => setGum_condition(e.target.value)} >
        <FormControlLabel value={'Good'} control={<Radio />} label="Good" />
        <FormControlLabel value={'Fair'} control={<Radio />} label="Fair" />
        <FormControlLabel value={'Poor'} control={<Radio />} label="Poor" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
    
      </Stack>

      </RadioGroup>
      </FormControl>
     

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Oral Ulcers</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="oral_ulcers" value={oral_ulcers} onChange={(e) => setOral_ulcers(e.target.value)} >
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
     
      </Stack>
    </RadioGroup>
      </FormControl>
      

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gum Bleeding</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gum_bleeding" value={gum_bleeding} onChange={(e) => setGum_bleeding(e.target.value)} > 
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      
      </Stack>

      </RadioGroup>
      </FormControl>
      

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Discoloration Of Teeth</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="discoloration_of_teeth" value={discoloration_of_teeth} onChange={(e) => setDiscoloration_of_teeth(e.target.value)} >
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      
      </Stack>

      </RadioGroup>
      </FormControl>
      

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Food Impaction</FormLabel>
      <RadioGroup
        row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="food_impaction" value={food_impaction} onChange={(e) => setFood_impaction(e.target.value)} >
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      
      </Stack>

      </RadioGroup>
      </FormControl>
      

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Carious Teeth</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="carious_teeth" value={carious_teeth} onChange={(e) => setCarious_teeth(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      
      </Stack>

      </RadioGroup>
      </FormControl>
      

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Extraction Done</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="extraction_done" value={extraction_done} onChange={(e) => setExtraction_done(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      
      </Stack>

      </RadioGroup>
      </FormControl>
      

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Fluorosis</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="fluorosis" value={fluorosis} onChange={(e) => setFluorosis(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />
      
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
     
      </Stack>

      </RadioGroup>
      </FormControl>
      

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Tooth Brushing Frequency</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="tooth_brushing_frequency" value={tooth_brushing_frequency} onChange={(e) => setTooth_brushing_frequency(e.target.value)}>
        <FormControlLabel value= {'1/day'}  control={<Radio />} label="1/day" />
        <FormControlLabel value= {'2/day'}  control={<Radio />} label="2/day" />
        <FormControlLabel value= {'1<day'}  control={<Radio />} label="1<day" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      
      </Stack>

      </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Reffered To Specialist</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="referred_to_speacialist" value={referred_to_speacialist} onChange={(e) => setReffered_to_specialist(e.target.value)}>
       <FormControlLabel value= {'Yes'}  control={<Radio />} label="Yes" />
        <FormControlLabel value= {'No'}  control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '138ch' },
         }}
           noValidate
          autoComplete="off">

      <TextField value ={comments} name = "comments" onChange={(e) => setComments(e.target.value)} label="Comments" variant="outlined" />
      </Box>
      </Paper>
         <button type="submit" onClick ={(e) => saveChildInfo(e)} className="btn btn-primary save-button">Save</button>
        </div>
        </div>
    </div>
    
  );
}

export default Dental;