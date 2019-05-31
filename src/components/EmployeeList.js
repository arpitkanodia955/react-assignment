import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployeesList } from '../actions/index';
import { Table } from 'reactstrap';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleEmployees: [],
      employee: []
    }
  }

  componentDidMount() {
    this.props.getEmployeesList((res) => {
      if (res.status === 200) {
        this.setState({
          visibleEmployees: res.data,
          employee: res.data
        })
      }
    })
  }

  renderList = () => {
    return (
      <tbody>
        {
          this.state.visibleEmployees.map((emp, i) => {
            return (
              <tr key={emp.id} onClick={() => this.props.history.push(`/employee-details/${emp.id}`)}>
                <td>{emp.name}</td>
              </tr>
            )
          })
        }
      </tbody>
    )
  }

  render() {
    return (
      <Table dark>      
        {this.renderList()}
      </Table>
    );
  }
}

//  Connect with redux through connect methode
export default connect(null, { getEmployeesList })(EmployeeList);

