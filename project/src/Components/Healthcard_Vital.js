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
import VitalService from '../Services/VitalService';



export default function Healthcard_Vital() {
    const {child_id} = useParams();    

  const [pulse, setPulse] = useState('');
  const [rr,  setRr] = useState('');
  const [hb,  setHb] = useState('');
  const [bp_sys,  setBp_Sys] = useState('');
  const [bp_dys,  setBp_Dys] = useState('');
  const [o2sats,  setO2sats] = useState('');
  const [temp,  setTemp] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    VitalService.getChildByID(child_id).then((response) => {
      setPulse(response.data.pulse)
      setBp_Dys(response.data.bp_dys)
      setBp_Sys(response.data.bp_sys)
      setRr(response.data.rr)
      setO2sats(response.data.o2sats)
      setHb(response.data.hb)
      setTemp(response.data.temp)
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
        <h5 className='hcard-head'>Vital Screening</h5>
        <p></p>
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th>Pulse- beats/min</th>
            <td>{pulse}</td>
            <th>BP-mm Hg</th>
            <td>{bp_sys}/{bp_dys}</td>
        </tr>
        <tr>
            <th>RR- per min</th>
            <td>{rr}</td>
            <th>O2 Sats- %</th>
            <td>{o2sats}</td>
        </tr>
        <tr>
            <th>HB</th>
            <td>{hb}</td>
            <th>Temperature- °F</th>
            <td>{temp}</td>
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


