import React, { Component } from "react";
import Navlinks from "../landingPage/navLink.jsx";
import Footer from "../landingPage/footer.jsx";
import { connect } from "react-redux";
// import { browserHistory } from 'react-router';
import { pricing ,DefaultPricing} from "../../actions/";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/media.css";

function renderComp(plancost){
  return (
    <div className="main-about">
      <Navlinks />
      <div className="container mt-120 mb-150 ">
        <div className="row pt-115 pt-75">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
            <span className="fsize-22">
              <strong>
                RecX makes it easy to stand out from other agents, meet more
                potential buyers, and sell properties faster.
              </strong>
            </span>
          </div>
        </div>
        <br />
        <div className="row sectionplan-border ">
          <div className="col-sm-8 col-md-8 col-lg-8 col-xs-8 pl-130">
            <h4 className="p-font">Get Started for just ${plancost}</h4>

            <h4 className="p-font">Includes:</h4>
            <ul className="pl-25 mb-10 font-size-18 custom-list1">
              <li>3-Months of RecX</li>
              <li>Ability To Add Up To 3 Devices</li>
              <li>First 100 Subscribers Get a Free Alexa Device</li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 col-xs-4">
            <a href="/signup">
              {" "}
              <div className="image-w-175 top-28">
                <img
                  className="icon-width-home sectionPlan-icon pricing-img "
                  src="https://recx-images.s3.amazonaws.com/icon_getstarted_200px.png"
                  alt="error"
                />
              </div>
            </a>
          </div>

        </div>
      </div>
      <div className="fixed-footer">
        {" "}
        <Footer />
      </div>
    </div>
  )
}

class Pricing extends Component {
  // componentWillMount(){
  //   debugger;
  //   this.props.DefaultPricing();
  // }

  constructor(props) {
    super(props)
    props.DefaultPricing();
    this.compTest = this.compTest.bind(this);
  }


  compTest(params) {
    return '<div> Test data </div>'
  }



  render() {
    const {plancost}=this.props;
    return (
      
       this.props && plancost ? <div>{ renderComp(plancost) }</div> : <div><h1>hi</h1></div>
      
    
      // this.props && this.props.plancost ? renderComp( this.props.plancost ) : {};
    // return (
    //   <div className="main-about">
    //     <Navlinks />
    //     <div className="container mt-120 mb-150 ">
    //       <div className="row pt-115 pt-75">
    //         <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
    //           <span className="fsize-22">
    //             <strong>
    //               RecX makes it easy to stand out from other agents, meet more
    //               potential buyers, and sell properties faster.
    //             </strong>
    //           </span>
    //         </div>
    //       </div>
    //       <br />
    //       <div className="row sectionplan-border ">
    //         <div className="col-sm-8 col-md-8 col-lg-8 col-xs-8 pl-130">
    //           <h4 className="p-font">Get Started for just ${this.props.plancost}</h4>

    //           <h4 className="p-font">Includes:</h4>
    //           <ul className="pl-25 mb-10 font-size-18 custom-list1">
    //             <li>3-Months of RecX</li>
    //             <li>Ability To Add Up To 3 Devices</li>
    //             <li>First 100 Subscribers Get a Free Alexa Device</li>
    //           </ul>
    //         </div>
    //         <div className="col-sm-4 col-md-4 col-lg-4 col-xs-4">
    //           <a href="/signup">
    //             {" "}
    //             <div className="image-w-175 top-28">
    //               <img
    //                 className="icon-width-home sectionPlan-icon pricing-img "
    //                 src="https://recx-images.s3.amazonaws.com/icon_getstarted_200px.png"
    //                 alt="error"
    //               />
    //             </div>
    //           </a>
    //         </div>

    //       </div>
    //     </div>
    //     <div className="fixed-footer">
    //       {" "}
    //       <Footer />
    //     </div>
    //   </div>
    );
  }
}

const mapStateToProps = state => {
  const { items,plancost } = state.plan;
  return { items,plancost };
};

export default connect(
  mapStateToProps,
  { pricing,DefaultPricing }
)(Pricing);
