import './App.css';
import './table.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './Header';
import TemporaryDrawer from './navbar';
import { useNavigate } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import {TableBody, IconButton, InputBase,
        TableCell, TableContainer, TableHead, 
        TableRow, Paper, Table, TablePagination, tableCellClasses} from '@mui/material';
  //import bootstrap from 'bootstrap';
 //import UserService from '../Services/UserService';
 //import AddSchool from './AddSchool';
  import SchoolService from '../Services/SchoolService';
  
export default function SchoolList() {

        const [School, setSchool] = useState([]);
        
        const navLog = useNavigate();
      
        useEffect(() => {
          getAllSchool();
         },[])

         const getAllSchool = ( ) =>{
          SchoolService.getSchool().then((response) => {
            setSchool(response.data)
            console.log(response.data);
          }).catch(error =>{
            console.log(error);
          })
        }
      
         const deleteSchool = (registrationNo) => {
          console.log(registrationNo);
          SchoolService.deleteSchoolByID(registrationNo).then((response) => {
            getAllSchool();
         }).catch(error => {
           console.log(error);
          })  
     }
      
        const [page, setPage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(5);
      
        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };
      
        const [value, setValue] = useState('');
        const [tableFilter, setTableFilter] = useState([]);
      
          const filterData = (e) => {
            if(e.target.value != ""){
              setValue(e.target.value);
              const filterTable = School.filter(o => Object.keys(o).some(k=>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTableFilter([...filterTable])
            } else {
              setValue(e.target.value);
              setSchool([...School])
            }  
          }  
           return (
                <div>
                <TemporaryDrawer/>
                <h4 className='page-head'>School List</h4>
                <div>
                    <button type="submit" onClick ={() => {navLog("/AddSchool");}} className="btn btn-primary add-button">
                        Add New School
                     </button>
                </div>
                <div className="">
                
                <Paper className="Table-Paper">
                <div  component="form">
                <Row>
                <Col xs={6} md={4}>
                </Col>
                <Col xs={6} md={4}>
                </Col>
                <Col xs={6} md={4}>
                  <div className='Search-div' sm>
                    <div className='Search' sm>
                      <Row>
                      <Col sm={8} className="search-col">
                      <InputBase
                      placeholder="Search School"
                      value={value}
                      onChange={filterData}
                      inputProps={{ 'aria-label': 'search school' }}
                      />
                       </Col>
                       <Col sm={4}>
                      </Col>
                      </Row>
                      </div>
                      </div>
                </Col>
              </Row>
                 </div>
                 <Table stickyHeader aria-label="school list table" className="Table">
          <TableHead className='head-table'>
            <TableRow>
              <TableCell >Registration No</TableCell>
              <TableCell>School Name</TableCell>
              <TableCell>Contact No</TableCell>
              <TableCell>Block</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {value.length > 0 ? tableFilter.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (<TableRow key={data.user_Id}>
            <TableCell className='col-table'>{data.registrationNo}</TableCell>
            <TableCell className='col-table'>{data.schoolName}</TableCell>
            <TableCell className='col-table'>{data.contactNo}</TableCell>
            <TableCell className='col-table'>{data.block}</TableCell>
            <TableCell className='col-table'>
            <EditIcon className="icon-edit" onClick ={() => {navLog(`/AddSchool/${data.registrationNo}`);}}/>
            <DeleteIcon className="icon-delete" onClick ={() => {deleteSchool(data.registrationNo)}}/>
            </TableCell>
          </TableRow>))
          :
          School.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (<TableRow key={data.user_Id}>
            <TableCell className='col-table'>{data.registrationNo}</TableCell>
            <TableCell className='col-table'>{data.schoolName}</TableCell>
            <TableCell className='col-table'>{data.contactNo}</TableCell>
            <TableCell className='col-table'>{data.block}</TableCell>
            <TableCell className='col-table'>
            <EditIcon className="icon-edit" onClick ={() => {navLog(`/AddSchool/${data.registrationNo}`);}}/>
            <DeleteIcon className="icon-delete" onClick ={() => {deleteSchool(data.registrationNo)}}/>
            </TableCell>
          </TableRow>)) 
        }
        </TableBody>
        </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100, 500]}
        component="div"
        count={School.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
        </div>
        </div>
    );
    }
