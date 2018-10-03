
import React, {Component} from 'react';
class CustInfo extends Component {
  render() {
    return (
      <div id="wrapper topHalf">

        <div className="container inputFields">
            <form action="/action_page.php">

            <div className="form-group">
              <label form="Name">Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
              />
            </div>

            <div className="form-group">
              <label form="email">Email address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="email"
              />
            </div>
            
            <span className="form-group">
              <label form="Delivery Date">Delivery Date:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter date for delivery"
                name="delivery"
              />
            </span>

            <div className="checkbox">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
            </div>
          </form>
        </div>
        
      </div>
    );
  }
}
export default CustInfo;