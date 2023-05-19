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
import PsychologicalService from '../Services/PsychologicalService';



export default function Healthcard_Psychological() {
    
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
        <h5 className='hcard-head'>Psychological Screening</h5>
        <p></p>
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th>Difficulty In Reading</th>
            <td>{difficultyInReading}</td>
            <th>Difficulty In Writing</th>
            <td>{difficultyInWriting}</td>
        </tr>
        <tr>
            <th>Hyper Reactive Behaviour</th>
            <td>{hyperReactiveBehaviour}</td>
            <th>Aggresive Behaviour</th>
            <td>{aggresiveBehaviour}</td>
        </tr>
        <tr>
            <th>Poor Eye Contact</th>
            <td>{poorEyeContact}</td>
            <th>Scholostic Backwardness</th>
            <td>{scholosticBackwardness}</td>
        </tr>
        <tr>
            <th>Poor Mixing With Peers</th>
            <td>{poorMixingWithPeers}</td>
            <th>Any Other</th>
            <td>{anyOther}</td>
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


