import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployeesList } from '../actions/index';
import { Table, Button } from 'reactstrap';

class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.filterText = React.createRef();
    this.state = {
      visibleEmployees: [],
      employee: [],
      noRecord: false
    }
  }

  componentDidMount() {
    this.props.getEmployeesList((res) => {
      if (res && res.status === 200) {
        this.setState({
          visibleEmployees: res.data,
          employee: res.data
        })
      }else{
        this.setState({
          noRecord: true
        })
      }
    })
  }

  /**
    * @name renderList
    * @param {} 
    * @desc Render Search List in tabel
    */
  renderList = () => {
    return (
      <tbody>
        {
          this.state.visibleEmployees.map((emp, i) => {
            return (
              <tr key={emp.id} onClick={() => this.props.history.push(`/employee-details/${emp.id}`)}>
                <td>{i + 1}</td>
                <td className="listimage">
                  <img width="100px" className="custom-image1" height="100px" src={emp.profileImage} alt={emp.name} title={emp.name} />
                </td>
                <td>{emp.name}</td>
                <td>{emp.company.name}</td>
                <td>{emp.email}</td>
              </tr>
            )
          })
        }
      </tbody>
    )
  }

  /**
  * @name filterDetail
  * @param {} 
  * @desc Used to filtering List
  */
  filterDetail = () => {
    const visibleEmployees = this.state.employee.filter((emp) => {
      return emp.name.indexOf(`${this.filterText.current.value}`) !== -1;
    })
    this.setState({
      visibleEmployees
    })
  }

  render() {
    return (
      <div className="wrapper">
        <hr />
        <h3>Employee List</h3>
        { this.state.noRecord === false && 
        <div className="custom-table11">
          <div className="row">
            <input type="text"
              ref={this.filterText}
              onChange={this.filterDetail}
              placeholder={' search by name'} />
            <Button color="secondary" type="submit">Filter</Button>
          </div>
        </div>
        }
        <Table striped className="custom-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>{''}</th>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
            </tr>
          </thead>
          {this.renderList()}
        </Table>
        {this.state.noRecord && <h3> No Record Found !!</h3>}
      </div>
    );
  }
}

// Connect with redux through connect methode
export default connect(null, { getEmployeesList })(EmployeeList);

