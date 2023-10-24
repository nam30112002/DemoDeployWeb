import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedRow : {
        hoTen: "",
        mssv: "",
        ngaySinh: "",
        khoa: "",
        cpa: ""
      }
    };
  }

  apiUrl = '/student/add';


  changeName(e){
    let changedName = e.target.value;
    // eslint-disable-next-line
    this.state.addedRow.hoTen = changedName;
    console.log(this.state)
  }

  changeMSSV(e){
    let changedMSSV = e.target.value;
    // eslint-disable-next-line
    this.state.addedRow.mssv = changedMSSV;
  }

  changeNgaySinh(e){
    let changed = e.target.value;
    // eslint-disable-next-line
    this.state.addedRow.ngaySinh = changed;
  }

  changeKhoa(e){
    let changed = e.target.value;
    // eslint-disable-next-line
    this.state.addedRow.khoa = changed;
  }

  changeCPA(e){
    let changed = e.target.value;
    // eslint-disable-next-line
    this.state.addedRow.cpa = changed;
  }
  
  addData = () =>{

    // Tạo một request options cho phương thức POST
  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Đặt header là JSON
    },
    body: JSON.stringify(this.state.addedRow), // Chuyển đối tượng JSON thành chuỗi JSON
  };

    fetch(this.apiUrl, requestOptions)
      .catch(error => {
        // Xử lý lỗi trong trường hợp gửi request thất bại
        console.error('Error:', error);
      });
      this.props.addDataToTable(this.state.addedRow)
  }

  render() {
    console.log(this.state);
    return (
      <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Họ tên" variant="outlined" onChange={(e) => this.changeName(e)} />
        <TextField id="outlined-basic" label="MSSV" variant="outlined" onChange={(e) => this.changeMSSV(e)} />
        <TextField id="outlined-basic" label="Ngày sinh" variant="outlined" onChange={(e) => this.changeNgaySinh(e)} />
        <TextField id="outlined-basic" label="Khoá" variant="outlined" onChange={(e) => this.changeKhoa(e)} />
        <TextField id="outlined-basic" label="CPA" variant="outlined" onChange={(e) => this.changeCPA(e)} />
        <Button style={{ width: '8vw', height : '55px'}} variant="contained" onClick={() => this.addData()}>Thêm</Button>
      </Box>
      </>
    )
  }
}
