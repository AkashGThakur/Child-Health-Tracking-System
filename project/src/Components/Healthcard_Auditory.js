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
import AuditoryService from '../Services/AuditoryService';


export default function Healthcard_Auditory() {

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

  useEffect(() => {
    AuditoryService.getChildByID(child_id).then((response) => {
      setAllergicReaction(response.data.allergic_reaction)
      setCleftIp(response.data.cleft_ip)
      setCleftPalate(response.data.cleft_palate)
      setCongenitalAbnormalityOfEar(response.data.congenital_abnormality_of_ear)
      setHearingLoss(response.data.hearing_loss)
      setTongueTie(response.data.tongue_tie)
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
        <h5 className='hcard-head'>Auditory Screening</h5>
        <p></p>
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th>Allergic Reaction</th>
            <td>{allergic_reaction}</td>
            <th>Cleft Ip</th>
            <td>{cleft_ip}</td>
        </tr>
        <tr>
            <th>Cleft Palate</th>
            <td>{cleft_palate}</td>
            <th>Congenital Abnormility of Ear</th>
            <td>{congenital_abnormality_of_ear}</td>
        </tr>
        <tr>
            <th>Hearing Loss</th>
            <td>{hearing_loss}</td>
            <th>Tongue Tie</th>
            <td>{tongue_tie}</td>
        </tr>
        <tr>
            <th>Hearing Test Right</th>
            <td>{hearing_Left}</td>
            <th>Hearing Test Left</th>
            <td>{hearing_Right}</td>
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


