import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddData from "./AddData";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows : [
        
      ]
    };
  }

  componentDidMount(){
    fetch('/student/all', {method: 'GET',})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          rows : data
        })
      })
      .catch(error => {
        console.error('Lỗi:', error);
      });
  }

  addRow = (newRow) => {
    // eslint-disable-next-line
    this.setState({
      rows : [...this.state.rows, newRow]
    })
  }

  deleteData = async (mssv) => {
    let url = '/student/deleteMssv?mssv='+ mssv
    await fetch(url, {method: 'DELETE',})
      .catch(error => {
        console.error('Lỗi:', error);
      });
    fetch('/student/all', {method: 'GET',})
      .then(response => response.json())
      .then(data => {
        this.setState({
          rows : data
        })
      })
      .catch(error => {
        console.error('Lỗi:', error);
      });
  }

  updateData = () => {
    alert("Button sửa was clicked!");
  }

  render() {
    return (
      <>
        <AddData addDataToTable = {(newRow) => this.addRow(newRow)}/>
        <TableContainer style={{ width: '90vw'}} component={Paper}>
        <Table align="center" sx={{ minWidth: 650, width: '90vw' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", width: '25vw' }}>Họ tên sinh viên</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold", width: '15vw' }}>MSSV</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold", width: '15vw' }}>Ngày sinh</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold", width: '15vw' }}>Khoá</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold", width: '15vw' }}>CPA</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold", width: '5vw' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow
                key={row.mssv}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.hoTen}
                </TableCell>
                <TableCell align="center">{row.mssv}</TableCell>
                <TableCell align="center">{row.ngaySinh}</TableCell>
                <TableCell align="center">{row.khoa}</TableCell>
                <TableCell align="center">{row.cpa}</TableCell>
                <TableCell align="center"><Button variant="contained" onClick={() => this.deleteData(row.mssv)}>Xoá</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    );
  }
}

export default TableData;