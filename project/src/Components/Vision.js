import './App.css';
import React, {useState, useEffect} from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ScreeningNav from './ScreeningNav';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useNavigate, useParams } from 'react-router-dom';
import VisionService from '../Services/VisionService';
import Stack from '@mui/material/Stack';


const Vision = () => {

  const {child_id} = useParams();    
  const [exophthalmos,  setExophthalmos] = useState('');
  const [squintNys,  setSquintNys] = useState('');
  const [tagmus,  setTagmus] = useState('');
  const [other,  setOther] = useState('');
  const [ifOtherComment,  setIfOtherComment] = useState('');
  const [refferedToSpecialist,  setRefferedToSpecialist] = useState('');
  const [colorBlind,  setColorBlind] = useState('');
  const [visionWithGlasses,  setVisionWithGlasses] = useState('');
  const [visionWithoutGlasses,  setVisionWithoutGlasses] = useState('');
  const [eyeMuscleControl,  setEyeMuscleControl] = useState('');
 
  const navigate = useNavigate();

  useEffect(() => {

    VisionService.getChildByID(child_id).then((response) => {
      setExophthalmos(response.data.exophthalmos)
      setSquintNys(response.data.squintNys)
      setTagmus(response.data.tagmus)
      setOther(response.data.other)
      setIfOtherComment(response.data.ifOtherComment)
      setRefferedToSpecialist(response.data.refferedToSpecialist)
      setColorBlind(response.data.colorBlind)
      setVisionWithGlasses(response.data.visionWithGlasses)
      setVisionWithoutGlasses(response.data.visionWithoutGlasses)
      setEyeMuscleControl(response.data.eyeMuscleControl)
    })  
},[])

const saveChildInfo = (e) => {
  e.preventDefault();

  const ChildInfo = {child_id, exophthalmos, squintNys, tagmus, other, ifOtherComment, refferedToSpecialist, colorBlind, visionWithGlasses, visionWithoutGlasses, eyeMuscleControl};

  VisionService.UpdateChild(child_id, ChildInfo).then((response) => {
    console.log(response.data);
    navigate(`/Vision/${child_id}`);
     }).catch(error => {
    console.log(error);
  })   
}
 

  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav child_id ={child_id}/>
    
    <div>
    <h4 className='page-screeninghead'>Vision Screening</h4>
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
      <FormLabel id="demo-row-radio-buttons-group-label">Exophthalmos</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name = "Exophthalmos" value={exophthalmos} onChange={(e) => setExophthalmos(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value= {'No'} control={<Radio />} label="No" />
        <Stack  component="form" sx={{ width: '25ch', }} spacing={2} noValidate autoComplete="off">
        </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Squint</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value= {squintNys}  name = "squintNys" onChange={(e) => setSquintNys(e.target.value)} >
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value= {'No'} control={<Radio />} label="No" />
        <Stack  component="form" sx={{ width: '25ch', }} spacing={2} noValidate autoComplete="off">
        </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Nystagmus</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value={tagmus}  name = "Tagmus" onChange={(e) => setTagmus(e.target.value)} >
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value= {'No'} control={<Radio />} label="No" />
        <Stack  component="form" sx={{ width: '25ch', }} spacing={2} noValidate autoComplete="off">
        </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Color blindness</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value={colorBlind}  name = "colorBlind" onChange={(e) => setColorBlind(e.target.value)} >
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value= {'No'} control={<Radio />} label="No" />
        <Stack  component="form" sx={{ width: '25ch', }} spacing={2} noValidate autoComplete="off">
        </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel >Vision With Glasses</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="visionWithGlasses" value={visionWithGlasses} onChange={(e) => setVisionWithGlasses(e.target.value)} >
        <FormControlLabel value={'Good'} control={<Radio />} label="Good" />
        <FormControlLabel value={'Fair'} control={<Radio />} label="Fair" />
        <FormControlLabel value={'Poor'} control={<Radio />} label="Poor" />

      </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel >Vision Without Glasses</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="visionWithoutGlasses" value={visionWithoutGlasses} onChange={(e) => setVisionWithoutGlasses(e.target.value)} >
        <FormControlLabel value={'Good'} control={<Radio />} label="Good" />
        <FormControlLabel value={'Fair'} control={<Radio />} label="Fair" />
        <FormControlLabel value={'Poor'} control={<Radio />} label="Poor" />

      </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel >Eye Muscle Control</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="eyeMuscleControl" value={eyeMuscleControl} onChange={(e) => setEyeMuscleControl(e.target.value)} >
        <FormControlLabel value={'Good'} control={<Radio />} label="Good" />
        <FormControlLabel value={'Fair'} control={<Radio />} label="Fair" />
        <FormControlLabel value={'Poor'} control={<Radio />} label="Poor" />

      </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Reffered To Specialist</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="refferedToSpecialist" value={refferedToSpecialist} onChange={(e) => setRefferedToSpecialist(e.target.value)}>
        <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
        <FormControlLabel value={'No'} control={<Radio />} label="No" />  
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
        <TextField value ={other} name = "other" onChange={(e) => setOther(e.target.value)} label="Vision Screening Comment" variant="outlined" />
      <TextField value ={ifOtherComment} name = "ifOtherComment" onChange={(e) => setIfOtherComment(e.target.value)} label="Comments if any" variant="outlined" />
      </Box>
        </Paper>
    
      <button type="submit" onClick ={(e) => saveChildInfo(e)} className="btn btn-primary save-button">Save</button>
    </div>

    </div>
  );
}

export default Vision;