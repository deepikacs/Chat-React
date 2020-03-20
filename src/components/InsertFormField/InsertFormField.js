import React, { Component } from 'react';
import { DynamicOnchange } from '../../Actions/InsertFormFieldAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Address from '../Address/Address';

class InsertFormField extends Component {
  state = {
    array: [],
    address: []
  }

  handleChange = (e) => {
    // e.preventDefault();
    this.props.DynamicOnchange({
      prop: [e.target.name],
      value: e.target.value
    });
  }
  InsertInput = () => {
    this.setState((prevState) => ({
      address: [
        ...prevState.address,
        {
          state1: '',
          city: ''
        }
      ]
    }))
  }

  handleAddressChange=(e,i)=>{
    // this.setState({
    //   address:[
    //     {
    //       state1:this.state.state1,
    //       city:this.state.city
    //     }
    //   ]
      
    // })
  }
  handleSubmit = () => {
    debugger;
    let obj = {
      name1: this.props.name,
      email1: this.props.email,
      hobbies1: this.props.hobbies,
    }
    var x = this.state.array.push(obj);
    this.setState({ x });
  }
  render() {
    return (
      <div>
        <form >
          <div>
            <label>Name</label>
            <input type="text" name="name" value={this.props.name} onChange={this.handleChange} />
          </div>

          <div>
            <label>Email</label>
            <input type="text" name="email" value={this.props.email} onChange={this.handleChange} />
          </div>

          <div>
            <label>Hobbies</label>
            <input type="text" name="hobbies" value={this.props.hobbies} onChange={this.handleChange} />


            {/* { 
                this.state.attributeForm.map(input => {
                    return input
                })
              } */}
            <button type="button" onClick={this.InsertInput}>Insert</button>
            {
              this.state.address.map((element, i) => {
                return(
                  <Address index={i} handleChange={e => this.handleAddressChange(e,i)}
                  state1={this.state.state1} city={this.state.city}
                />
                )
                
              })
            }
            

          </div>

          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
        {this.state.array.map((item, i) => (
          <div>
            <h3>Name:{item.name1}</h3>
            <h3>Email:{item.email1}</h3>
            <h3>Hobbies:{item.hobbies1}</h3>
          </div>
        ))}

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  debugger;
  const { name, email, hobbies, hob, state1, city } = state.InsertFormFieldReducer;
  return { name, email, hobbies, hob, state1, city };
};

export default withRouter(connect(mapStateToProps, { DynamicOnchange })(InsertFormField));



// import React, { Component } from 'react';
// import {DynamicOnchange} from '../../Actions/InsertFormFieldAction';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

// class InsertFormField extends Component {
//   state={
//       array:[],
//       // InputShow:false
//       attributeForm:[],
//       values:[]
//   }

//   handleChange =(e)=>{
//     debugger;
//     // e.preventDefault();
//     this.props.DynamicOnchange({
//       prop: [e.target.name],
//       value: e.target.value
//     }); 
//   }
//   InsertInput =()=>{
//     debugger;
//     let newArray=this.state.attributeForm;
//     newArray.push(<div>
//       <label>Attribute name :</label>
//                              <input name="inputArrrayName[]"  onChange={this.handleChange}/>
//     </div>)
//     this.setState({InputShow:true,attributeForm: newArray})
//   }
//   handleSubmit = ()=>{
//     debugger;
//     let obj={
//       name1:this.props.name,
//       email1:this.props.email,
//       hobbies1:this.props.hobbies,
//       hob1:this.props.hob
//     }
//    var x= this.state.array.push(obj);
//     this.setState({x});
//   }
//   render() {
//     return (
//       <div>
//         <form >
//           <div>
//             <label>Name</label>
//             <input type="text" name="name" value={this.props.name} onChange={this.handleChange} />
//           </div>

//           <div>
//             <label>Email</label>
//             <input type="text" name="email" value={this.props.email} onChange={this.handleChange} />
//           </div>

//           <div>
//             <label>Hobbies</label>
//             <input type="text" name="hobbies" value={this.props.hobbies} onChange={this.handleChange} />


//             { 
//                 this.state.attributeForm.map(input => {
//                     return input
//                 })
//               }
//             <button type="button" onClick={this.InsertInput}>Insert</button>
//             {/* {this.state.InputShow ?
//             <input type="text" name="hob" value={this.props.hob} onChange={this.handleChange}></input>:''} */}
//           </div>

//           <button type="button" onClick={this.handleSubmit}>Submit</button>
//         </form>
//         {this.state.array.map((item,i)=>(
//           <div>
//           <h3>Name:{item.name1}</h3>
//           <h3>Email:{item.email1}</h3>
//           <h3>Hobbies:{item.hobbies1}</h3>
//           <h3>Hob:{item.hob1}</h3>
//           </div>
//         ))}

//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   debugger;
//   const {name, email, hobbies,hob,inputArrrayName} =state.InsertFormFieldReducer;
//   return {name, email,hobbies,hob ,inputArrrayName};
// };

// export default withRouter(connect(mapStateToProps, { DynamicOnchange })(InsertFormField));

