import React, { Component } from 'react';
import UpdateForm from '../UpdateForm';
import { getByUserId} from '../../Actions/SimpleFormAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UpdateFormMain extends Component {
    state={
        Userid:''
    }
    componentDidMount(){
        let {userid} = this.props.match.params;
        this.setState({Userid:userid});
        this.props.getByUserId(userid);
    }
    render() {
        const {Userid}=this.state;
        return (
            <div>
                {this.props.getUserById ?  <UpdateForm data={this.props.getUserById} Userid={Userid}/> :''}
               
            </div>
        );
    }
}

// export default UpdateFormMain;
const mapStateToProps = (state) => {
    const {  getUserById } = state.SimpleFormReducers;
    return { getUserById };
  };
  
  export default withRouter(connect(mapStateToProps, { getByUserId })(UpdateFormMain));