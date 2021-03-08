import React, { Component } from 'react';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

const selectTime = [
  { value: '9', label: '9:00' },
  { value: '10', label: '10:00' },
  { value: '11', label: '11:00' },
  { value: '1', label: '1:00' },
  { value: '2', label: '2:00' },
  { value: '3', label: '3:00' },
  { value: '4', label: '4:00' },

];

let i = 0;

export default class Calling extends Component {

  state = {
    updateblog: false,
    request: [],
    selectedOption: '1',
  }
  timeObject = {
    finalTime:
      this.state.selectedOption
  }

  validateName = (event) => {
    let val = event.target.value;
    if (!(/^([a-zA-Z]{1,})$/.test(val))) {
      this.setState({ validFullname: true })
    }
    else {
      this.setState({ validFullname: false });
    }
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(selectedOption.value)

    if (selectedOption.value === "1") {
      i = "1:00"
    } else if (selectedOption.value === "2") {
      i = "2:00"
    } else if (selectedOption.value === "3") {
      i = "3:00"
    }
    else if (selectedOption.value === "9") {
      i = "9:00"
    }
    else if (selectedOption.value === "10") {
      i = "10:00"
    }
    else if (selectedOption.value === "11") {
      i = "11:00"
    } else {
      console.log("in else")
    }

  }
  closeHandler = () => {
    this.setState({ updateblog: false });
  }
  message = () => {
    this.setState({ updateblog: true });
  }

  _isMounted = false;
  componentDidMount() {
    this._isMounted = true;
    fetch("http://localhost:8080/t1td/getRequest?id="+localStorage.getItem("id"), {

      method: "GET",
      headers: {
        "Content-Type": 'application/json'
      },
    }).then(result => {
      return result.json();
    }).then(resultData => {

      if (this._isMounted) {

        this.setState({
          request: resultData.data.request,
        });
      }
    })

      .catch(err => {
        console.log(err);
      })
  }
  componentWillUnmount() {
    this._isMounted = false;
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ request: { time: i } })
    let name = document.getElementById('name').value;
    let email1 = document.getElementById('msg').value;
    let email = document.getElementById('email').value;
    axios.patch('http://localhost:8080/t1td/addRequest', {
      time: i,
      date: this.props.date,
      approve: 'true',
      name: name,
      email: email,
      messages: email1,
      tempId:localStorage.getItem("id")
    }).then(resultData => {
      if (resultData.status == 200) {
        window.location.reload();
      }
    })

  }


  render() {

    const { selectedOption } = this.state

    return (
      <div  >
        <div style={{ width: '40%', }}>
          <Select
            value={selectedOption}
            id='time'
            onChange={(selectedOption) => this.handleChange(selectedOption)}
            options={selectTime}
          />

          <TextField
            style={{ width: '100%', paddingTop: '20px' }}
            id="name"
            type="text" label="Name" required={true} />
          <TextField
            style={{ width: '100%', paddingTop: '20px' }}
            id="email"
            type="text" label="Email" required={true} />

          <TextField
            style={{ width: '100%', paddingTop: '20px' }}
            id="msg"
            type="text" label="Purpose" required={true} />

          <div style={{ color: 'white' }}>.</div>
          <div style={{ color: 'white' }}>.</div>
        </div>
        <button style={{ width: "20%" }} type="submit" onClick={this.handleSubmit} class="btn btn-outline-danger">ADD</button>

      </div>
    )
  }
}