import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployee } from '../actions/index';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeDetail: {}
    }
  }

  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getEmployee(id, (res) => {

      if (res.status === 200) {
        this.setState({
          employeeDetail: res.data
        })
      }
    })
  }
  render() {
    var employeeDetail = this.state.employeeDetail;
    const defaultUrl = 'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg';
    return (
      <div >
        <div className="card-custom">
          <Card>
            <CardImg top width="10%" className="custom-image" height="100px" src={employeeDetail.profileImage !== '' ? employeeDetail.profileImage : defaultUrl} alt="profile-image" />
            <CardBody>
              <div className="main">
                <div className="name" >Name: </div>
                <CardTitle>
                  {employeeDetail.name}
                </CardTitle>
              </div>

              <div className="main">
                <div className="name" >email: </div>
                <CardTitle>
                  {employeeDetail.email ? employeeDetail.email : 'N/A'}
                </CardTitle>
              </div>

              <div className="main">
                <div className="name" >Phone: </div>
                <CardTitle>
                  {employeeDetail.phone ? employeeDetail.phone : 'N/A'}
                </CardTitle>
              </div>

              <Button onClick={() => this.props.history.push('/') }>Back</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

//  Connect with redux through connect methode
export default connect(null, { getEmployee })(EmployeeDetails);

