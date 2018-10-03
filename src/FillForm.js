import React, {Component} from 'react';
class FillForm extends Component {
  constructor(props) {
    super(props);
    this.showStuff3 = this.createTDs.bind(this);
    this.createTRs = this.createTRs.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    headers: ["Product Code", "Product Name", "Quantity", "Additional notes"],
    items: [
      ["0557 ", "Bread ", "", ""],
      ["7586 ", "Bread2 ", "", ""],
      ["5557 ", "Bread3 ", "", ""],
      ["4451 ", "Bread4 ", "", ""],
      ["4456 ", "Bread5 ", "", ""],
      ["0557 ", "Bread ", "", ""],
      ["7586 ", "Bread2 ", "", ""],
      ["5557 ", "Bread3 ", "", ""],
      ["4451 ", "Bread4 ", "", ""], 
      ["4456 ", "Bread5 ", "", ""],
      ["4458 ", "Bread6 ", "", ""]
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
  handleClick() {
    console.log(this.state.items[0]);
  }

  //creates all the Rows in given item as <tr> and children as <td>
  createTRs(items) {
    var rows = [];
    for (var i = 0; i < items.length; i++) {
      rows.push(<tr key={i}>{this.createTDs(items[i])}</tr>);
    }

    return rows;
  }

  //gives all the columns in a given param as array of tds
  createTDs(items) {
    let cols = [];
    for (var i = 0; i < items.length; i++) {
      cols.push(
        <td
          key={i}
          className="text-center "
          contentEditable={items[i] === "" ? true : false}
        >
          {items[i]}
        </td>
      );
    }
    return cols;
  }
  //gives all the columns in a given param as array of ths
  createTHs(items) {
    let cols = [];
    for (var i = 0; i < items.length; i++) {
      cols.push(
        <th key={i} className="text-center ">
          {items[i]}
        </th>
      );
    }
    return cols;
  }

  render() {
    return (
      <div>
        <div className="centered ">
          <table className="table table-editable table-bordered table-hover table-striped table-responsive-md">
            <thead>
              <tr>{this.createTHs(this.state.headers)}</tr>
            </thead>
            <tbody>{this.createTRs(this.state.items)}</tbody>
          </table>
        </div>
        <div className="centered ">
          <button
            type="submit"
            className="btn btn-default"
            onClick={this.handleClick}
          >
            Send Order
          </button>
        </div>
      </div>
    );
  }
}
export default FillForm;