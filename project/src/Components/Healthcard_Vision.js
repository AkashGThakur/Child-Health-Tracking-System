import './App.css';
import React, {useState, useEffect} from 'react';
//import Header from './Header';
import TemporaryDrawer from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {TableBody, IconButton, InputBase,
    TableCell, TableContainer, TableHead, 
    TableRow, Paper, Table, TablePagination, tableCellClasses} from '@mui/material';
//import bootstrap from 'bootstrap';
import HealthcardList from './HealthcardList';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Healthcard from './Healthcard';
import HealthcardNav from './HealthcardNav';
import VisionService from '../Services/VisionService';


export default function Healthcard_Vision() {
    
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


  return (
    <div>
    <TemporaryDrawer/>
    <Healthcard child_id ={child_id}/>
    <div>
    <Row>
        <Col sm={3}>
        <HealthcardNav child_id ={child_id}/>
        </Col>
        <Col sm={9}>
        <div className='healthcard-report'>
        <h5 className='hcard-head'>Vision Screening</h5>
        <p></p>
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th>Exophthalmos</th>
            <td>{exophthalmos}</td>
            <th>Squint</th>
            <td>{squintNys}</td>
        </tr>
        <tr>
            <th>Nystagmus</th>
            <td>{tagmus}</td>
            <th>Color blindness</th>
            <td>{colorBlind}</td>
        </tr>
        <tr>
            <th>Vision With Glasses</th>
            <td>{visionWithGlasses}</td>
            <th>Vision Without Glasses</th>
            <td>{visionWithoutGlasses}</td>  
        </tr>
        <tr>
            <th>Eye Muscle Control</th>
            <td>{eyeMuscleControl}</td>
            <th>Reffered To Specialist</th>
            <td>{refferedToSpecialist}</td> 
        </tr>
        <tr>
            <th>Vision Screening Comment</th>
            <td>{other}</td>
            <th>Comment</th>
            <td>{ifOtherComment}</td> 
        </tr>
        </tbody>
        </table>
        <h6 className='hcard-subhead'>Present Fields</h6>
        <p>NAD</p> 
        <p>  </p>
        </div>
        </Col>
    </Row>
    </div>

    
    </div>
  );
}


