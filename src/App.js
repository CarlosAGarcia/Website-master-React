import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import FillForm from "./FillForm.js";
import CustInfo from "./CustInfo.js";
import Table from './Table';
import Form from "./Form";



class App extends Component {

  state = {
    characters : [
    ]
  };
  removeCharacter = index => {
    const { characters } = this.state;
  
      this.setState({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
      });
  }
  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
}
  render() {

    return (
      <div className="container" >
          <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
          <Form handleSubmit={this.handleSubmit}></Form>

      </div>
  );
  }
}

export default App;
/*
class Table extends Component {
  render() {
    const {tableInfo}= this.props;
      return (
          <table>
              <TableHeader />
              <TableBody tableInfo = {tableInfo}/>
          </table>
      );
  }
}
const TableHeader = () => { 
  return (
      <thead>
          <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Additional Notes</th>
          </tr>
      </thead>
  );
}

const TableBody = props => { 
  const rows = props.tableInfo.map((row, index) => {
      return (
          <tr key={index}>
        <td>{row.ProductCode}</td>
        <td>{row.ProductName}</td>
        <td>{row.Quantity}</td>
        <td>{row.AdditionalNotes}</td>
          </tr>
      );
  });

  return <tbody>{rows}</tbody>;
}
// <FillForm />
class App extends Component {

  state = {
    tableInformation : [
      {
        "ProductCode" : "0557",
        "ProductName" : "Bread",
        "Quantity" : "",
        "AdditionalNotes" : ""
      },
      {
        "ProductCode" : "453",
        "ProductName" : "Bread2",
        "Quantity" : "",
        "AdditionalNotes" : ""
      },
      {
        "ProductCode" : "56468",
        "ProductName" : "Bread3",
        "Quantity" : "",
        "AdditionalNotes" : ""
      },
      {
        "ProductCode" : "7895",
        "ProductName" : "Bread4",
        "Quantity" : "",
        "AdditionalNotes" : ""
      },
      {
        "ProductCode" : "7890",
        "ProductName" : "Bread5",
        "Quantity" : "",
        "AdditionalNotes" : ""
      },      
      {
        "ProductCode" : "1230",
        "ProductName" : "Bread6",
        "Quantity" : "",
        "AdditionalNotes" : ""
      }
    ]
  };

  removeInfo = index => {
    const {information} = this.state;

    this.setState({
      information : information.filter((prod, i) => {
        return i !== index;
      })
    });
  }

  render() {
    return (

      <div id="homePage">

        <div className="centered Title">
          <h1>Order Form</h1>
        </div>
        <CustInfo />
        <Table tableInfo = {this.state.tableInformation} className="table table-editable table-bordered table-hover table-striped table-responsive-md"></Table>
      
      
      </div>  
    );
  }
}

export default App;
*/