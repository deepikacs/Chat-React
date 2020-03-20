import React ,{Component} from 'react';

const Address=({handleChange,state1,city,index})=>{
        return(
            <div>
             <form>
               <label>State {index}</label>
               <input type="text" name="state1" value={state1} onChange={(e)=>{handleChange(e)}}/>
               <label>City {index}</label>
               <input type="text" name="city" value={city} onChange={(e)=>{handleChange(e)}} />
               </form>   
            </div>
        )

}
export default Address;

// const mapStateToProps =(state)=>{
// const{state1,city}=state.InsertFormFieldReducer;
// return{state1,city}
// }
// export default withRouter(connect(mapStateToProps,{}),( Address));