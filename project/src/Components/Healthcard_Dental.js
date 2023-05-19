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
import DentalService from '../Services/DentalService';



export default function Healthcard_Dental() {
    
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
        <h5 className='hcard-head'>Dental Check-Up</h5>
        <p></p>
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th>Oral Hygiene</th>
            <td>{oral_hygiene}</td>
            <th>Gum Condition</th>
            <td>{gum_condition}</td>
        </tr>
        <tr>
            <th>Oral Ulcers</th>
            <td>{oral_ulcers}</td>
            <th>Gum Bleeding</th>
            <td>{gum_bleeding}</td>
        </tr>
        <tr>
            <th>Tooth Brushing Frequency</th>
            <td>{tooth_brushing_frequency}</td>  
            <th>Discoloration Of Teeth</th>
            <td>{discoloration_of_teeth}</td>
        </tr>
        <tr>
            <th>Food Impaction</th>
            <td>{food_impaction}</td>
            <th>Carious Teeth</th>
            <td>{carious_teeth}</td>
        </tr>
        <tr>
            <th>Extraction Done</th>
            <td>{extraction_done}</td>
            <th>Fluorosis</th>
            <td>{fluorosis}</td>
        </tr>
        <tr>
            <th>Reffered To Specialist</th>
            <td>{referred_to_speacialist}</td>
            <th>Comment</th>
            <td>{comments}</td>     
        </tr>
        
        </tbody>
        </table>
        <p>  </p>
        </div>
        </Col>
    </Row>
    </div>

    
    </div>
  );
}


