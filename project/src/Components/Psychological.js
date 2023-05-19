import './App.css';
import './New.css';
import React, {useState, useEffect} from 'react';
import TemporaryDrawer from './navbar';
import ScreeningNav from './ScreeningNav';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import PsychologicalService from '../Services/PsychologicalService';


const Psychological = () => {

  const {child_id} = useParams();    
  const [difficultyInReading,  setDifficultyInReading] = useState('');
  const [difficultyInWriting,  setDifficultyInWriting] = useState('');
  const [hyperReactiveBehaviour,  setHyperReactiveBehaviour] = useState('');
  const [aggresiveBehaviour,   setAggresiveBehaviour] = useState('');
  const [poorMixingWithPeers,  setPoorMixingWithPeers] = useState('');
  const [poorEyeContact, setPoorEyeContact] = useState('');
  const [scholosticBackwardness,  setScholosticBackwardness] = useState('');
  const [anyOther,  setAnyOther] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    PsychologicalService.getChildByID(child_id).then((response) => {
      setDifficultyInReading(response.data.difficultyInReading)
      setDifficultyInWriting(response.data.difficultyInWriting)
      setHyperReactiveBehaviour(response.data.hyperReactiveBehaviour)
      setAggresiveBehaviour(response.data.aggresiveBehaviour)
      setPoorMixingWithPeers(response.data.poorMixingWithPeers)
      setPoorEyeContact(response.data.poorEyeContact)
      setScholosticBackwardness(response.data.scholosticBackwardness)
      setAnyOther(response.data.anyOther)
    })  
},[])

const saveChildInfo = (e) => {
  e.preventDefault();

  const ChildInfo = {child_id, difficultyInReading, difficultyInWriting, hyperReactiveBehaviour, aggresiveBehaviour, poorEyeContact, poorMixingWithPeers, scholosticBackwardness, anyOther};

  PsychologicalService.UpdateChild(child_id, ChildInfo).then((response) => {
    console.log(response.data);
    navigate(`/Psychological/${child_id}`);
     }).catch(error => {
    console.log(error);
  })   
}

  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav child_id ={child_id}/>
    
    <div>
    <h4 className='page-screeninghead'>Psychological Screening</h4>
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
      <FormLabel id="demo-row-radio-buttons-group-label">Difficulty In Reading</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="difficultyInReading" value={difficultyInReading} onChange={(e) => setDifficultyInReading(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value= {'No'} control={<Radio />} label="No" />
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
      <FormLabel id="demo-row-radio-buttons-group-label">Difficulty In Writing</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="difficultyInWriting" value={difficultyInWriting} onChange={(e) => setDifficultyInWriting(e.target.value)}>
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
      <FormLabel id="demo-row-radio-buttons-group-label">Hyper Reactive Behaviour</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="hyperReactiveBehaviour" value={hyperReactiveBehaviour} onChange={(e) => setHyperReactiveBehaviour(e.target.value)}>
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
      <FormLabel id="demo-row-radio-buttons-group-label">Aggresive Behaviour</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="aggresiveBehaviour" value={aggresiveBehaviour} onChange={(e) => setAggresiveBehaviour(e.target.value)}>
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
      <FormLabel id="demo-row-radio-buttons-group-label">Poor Mixing With Peers</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="poorMixingWithPeers" value={poorMixingWithPeers} onChange={(e) => setPoorMixingWithPeers(e.target.value)}>
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
      <FormLabel id="demo-row-radio-buttons-group-label">Poor Eye Contact</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="poorEyeContact" value={poorEyeContact} onChange={(e) => setPoorEyeContact(e.target.value)}>
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
      <FormLabel id="demo-row-radio-buttons-group-label">Scholostic Backwardness</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="scholosticBackwardness" value={scholosticBackwardness} onChange={(e) => setScholosticBackwardness(e.target.value)}>
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
          </Box>
          </Paper>

          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '130ch' },
         }}
           noValidate
          autoComplete="off">

      <TextField value ={anyOther} name = "anyOther" onChange={(e) => setAnyOther(e.target.value)} label="Any Other" variant="outlined" />
      </Box>
      </Paper>
      <button type="submit" onClick ={(e) => saveChildInfo(e)} className="btn btn-primary save-button">Save</button>   
    </div>
    </div>
  );
}

export default Psychological;