import './App.css';
import React, { useState, useEffect } from 'react';
import TemporaryDrawer from './navbar';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ScreeningNav from './ScreeningNav';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate, useParams } from 'react-router-dom';
import AuditoryService from '../Services/AuditoryService';

const Auditory = () => {

  const {child_id} = useParams();    
  const [allergic_reaction,  setAllergicReaction] = useState('');
  const [cleft_ip,  setCleftIp] = useState('');
  const [cleft_palate,  setCleftPalate] = useState('');
  const [congenital_abnormality_of_ear,  setCongenitalAbnormalityOfEar] = useState('');
  const [hearing_loss,  setHearingLoss] = useState('');
  const [tongue_tie,  setTongueTie] = useState('');
  const [comments, setComments] = useState('');
  const [hearing_Right,  setHearingRight] = useState('');
  const [hearing_Left,  setHearingLeft] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    AuditoryService.getChildByID(child_id).then((response) => {
      setAllergicReaction(response.data.allergic_reaction)
      setCleftIp(response.data.cleft_ip)
      setCleftPalate(response.data.cleft_palate)
      setCongenitalAbnormalityOfEar(response.data.congenital_abnormality_of_ear)
      setHearingLoss(response.data.hearing_loss)
      setTongueTie(response.data.tongue_tie)
      setComments(response.data.comments)
      setHearingLeft(response.data.hearing_Left)
      setHearingRight(response.data.hearing_Right)
    })
},[])

const saveChildInfo = (e) => {
  e.preventDefault();

  const ChildInfo = {child_id, allergic_reaction, cleft_ip, cleft_palate, congenital_abnormality_of_ear, hearing_loss, tongue_tie, comments, hearing_Left, hearing_Right};

  AuditoryService.UpdateChild(child_id, ChildInfo).then((response) => {
    console.log(response.data);
    navigate(`/Auditory/${child_id}`);
     }).catch(error => {
    console.log(error);
  })   
}

  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav child_id ={child_id}/>

    <div>
        <h4 className='page-screeninghead'>Auditory Screening</h4>
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

         <h4 className='page-Subhead'>Check if Present</h4>
         <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Allergic Reaction</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value ={allergic_reaction} name = "allergic_reaction" onChange={(e) => setAllergicReaction(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />  
      </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Cleft Ip</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value ={cleft_ip} name = "cleft_ip" onChange={(e) => setCleftIp(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />  
      </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Cleft Palate</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value ={cleft_palate} name = "cleft_palate" onChange={(e) => setCleftPalate(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />  
      </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Congenital Abnormility of Ear</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value ={congenital_abnormality_of_ear} name = "congenital_abnormality_of_ear" onChange={(e) => setCongenitalAbnormalityOfEar(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />  
      </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Hearing Loss</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value ={hearing_loss} name = "hearing_loss" onChange={(e) => setHearingLoss(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />  
      </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Tongue Tie</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value ={tongue_tie} name = "tongue_tie" onChange={(e) => setTongueTie(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />  
      </RadioGroup>
      </FormControl> 
      <FormControl> 
      <FormLabel id="demo-row-radio-buttons-group-label">Hearing Test Right</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value ={hearing_Right} name = "hearing_Right" onChange={(e) => setHearingRight(e.target.value)}>
         <FormControlLabel value={'Good'} control={<Radio />} label="Good" />
        <FormControlLabel value={'Fair'} control={<Radio />} label="Fair" />
        <FormControlLabel value={'Poor'} control={<Radio />} label="Poor" /> 
      </RadioGroup>
      </FormControl>
      <FormControl> 
      <FormLabel id="demo-row-radio-buttons-group-label">Hearing Test Left</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value ={hearing_Left} name = "hearing_Left" onChange={(e) => setHearingLeft(e.target.value)}>
         <FormControlLabel value={'Good'} control={<Radio />} label="Good" />
        <FormControlLabel value={'Fair'} control={<Radio />} label="Fair" />
        <FormControlLabel value={'Poor'} control={<Radio />} label="Poor" /> 
      </RadioGroup>
      </FormControl>
      
         </Box>
         <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '138ch' },
         }}
           noValidate
          autoComplete="off">
            <TextField value ={comments} name = "comments" onChange={(e) => setComments(e.target.value)}   label="Comments" variant="outlined" />
          </Box>
         
         </Paper>
         
         <button type="submit" onClick ={(e) => saveChildInfo(e)} className="btn btn-primary save-button">Save</button>

         </div>
         </div>
    </div>
  );
}

export default Auditory;