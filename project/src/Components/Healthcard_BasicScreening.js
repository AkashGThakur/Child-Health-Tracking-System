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
import BasicScreeningService from '../Services/BasicScreeningService';


export default function Healthcard_BasicScreening() {

    const navLog = useNavigate();
    const {child_id} = useParams();   
    const [head,  setHead] = useState('');
    const [neck,  setNeck] = useState('');
    const [skinColor,  setSkinColor] = useState('');
    const [skinTexture,  setSkinTexture] = useState('');
    const [mouthGums,  setMouthGums] = useState('');
    const [mouthTongue,  setMouthTongue] = useState('');
    const [hairColor,  setHairColor] = useState('');
    const [hairDensity,  setHairDensity] = useState('');
    const [hairTexture,  setHairTexture] = useState('');
    const [chest,  setChest] = useState('');
    const [abdomen,  setAbdomen] = useState('');
    const [treatmentFor,  setTreatmentFor] = useState('');
    const [referal,  setReferal] = useState('');
    const [reasonForReferal,  setReasonForReferal] = useState('');
    const [placeReferal,  setPlaceReferal] = useState('');
    const [outcome, setOutcome] = useState('');

    useEffect(() => {
      BasicScreeningService.getChildByID(child_id).then((response) => {
        setHairColor(response.data.hairColor)
        setHairDensity(response.data.hairDensity)
        setHairTexture(response.data.hairTexture)
        setHead(response.data.head)
        setNeck(response.data.neck)
        setSkinColor(response.data.skinColor)
        setSkinTexture(response.data.skinTexture)
        setMouthGums(response.data.mouthGums)
        setMouthTongue(response.data.mouthTongue)
        setChest(response.data.chest)
        setAbdomen(response.data.abdomen)
        setTreatmentFor(response.data.treatmentFor)
        setReferal(response.data.referal)
        setReasonForReferal(response.data.reasonForReferal)
        setPlaceReferal(response.data.placeReferal)
        setOutcome(response.data.outcome)
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
        <h5 className='hcard-head'>Basic Screening</h5>
        <div>
        <p> </p>
        <h6 className='hcard-subhead'>General Examination</h6>
        <table className="table table-bordered table-ge">
            <tbody>
            <tr>
            <th>Head / Scalp</th>
            <td>{head}</td>
            <th>Neck</th>
            <td>{neck}</td>
            </tr>
            <tr>
            <th>Skin Colour</th>
            <td>{skinColor}</td>
            <th>Skin Texture</th>
            <td>{skinTexture}</td>
            </tr>
            <tr>
            <th>Mouth Gums</th>
            <td>{mouthGums}</td>
            <th>Mouth Tongue</th>
            <td>{mouthTongue}</td>
            </tr>
            <tr>
            <th>Abdomen</th>
            <td>{abdomen}</td>
            <th>Chest</th>
            <td>{chest}</td>
            </tr>
            <tr>
            <th>Hair Density</th>
            <td>{hairDensity}</td>
            <th>Hair Color</th>
            <td>{hairColor}</td>
            </tr>
            <tr>
            <th>Hair Texture</th>
            <td>{hairTexture}</td>
            <th></th>
            <td></td>
            </tr>
            </tbody>
            </table>

            <h5> </h5>
            <h6 className='hcard-subhead'>Treatment</h6>

            <table class="table table-bordered table-ge">
            <tbody>
            <tr>
            <th>Treatment For</th>
                <td>{treatmentFor}</td>
            <th>Referral</th>
                <td>{referal}</td>
            </tr>
            <tr>
            <th>Reason For Referral</th>
                <td>{reasonForReferal}</td>
            <th>Place Referral</th>
                <td>{placeReferal}</td>
            </tr>
            <tr>
            <th>Outcome</th>
                <td>{outcome}</td>
            </tr>
             </tbody>
             </table>

            <h5> </h5>
            <h6 className='hcard-subhead'>Birth Defects</h6>
            <p>NAD</p>   

            <h5> </h5>
            <h6 className='hcard-subhead'>Childhood Disease</h6>
            <p>NAD</p>    

            <h5 > </h5>
            <h6 className='hcard-subhead'>Deficiencies</h6>
            <p>NAD</p>   

            <h5> </h5>
            <h6 className='hcard-subhead'>Skin condition</h6>
            <p>NAD</p>   

            <h5> </h5>
            <h6 className='hcard-subhead'>Check Box If Normal</h6>
            <p>NAD</p>

            <h5> </h5>
            <h6 className='hcard-subhead'>Diagnosis</h6>
            <p>NAD</p>     

            <h5> </h5>                     
        </div>
        </div>
        </Col>
    </Row>
    </div>

    
    </div>
  );
}


