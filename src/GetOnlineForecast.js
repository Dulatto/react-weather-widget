import React, { Component } from 'react';
import './Widgetstyle.css';



class GetOnlineForecast extends Component {
     constructor(props){
         super(props);
             this.state = {
                success: false,
                error: null,
                response: [],
                iconValue:'na.png'
             };
         }

 componentDidMount(){
    
     fetch("https://api.aerisapi.com/observations/:auto?client_id=EXgUpgEG3hshz599T1lpf&client_secret=yfzeHSLmDtzEx7rXUJ2gzBs3DIRBCQXsJ2ZfQ2ar")
     .then( response =>  response.json() )
     .then(
         (result) => {
           
             this.setState({
                success:true,
                 response: result.response,
                 iconValue:result.response.ob.icon
             });
             
         },
         (error) => {
             this.setState({
                success:true,
                 error:error
             });
         }
     );
 }

 
 
 render() {
    
    let path="/images/" +this.state.iconValue;
    /*let imageGrab =  (name,imageName) => {
        
        if (name === imageName){
            return true;
        }
    }*/

     const {error, success} = this.state;

     if (error){
         return <div>Error in loading</div>
     }else if(!success){
         return <div>Loading...</div>
     }else{
         return(
             <div className="row bg-blue mt-2 py-2">
                 <div className="col-lg-1 col-md-0"></div>
                 <div className="col-lg-6 col-md-6 col-sm-6">
                     <div className="row">
                         <div className="col-md-7 col-sm-8 pt-2">
                             {<p className="text-uppercase font-weight-bold text-dark citysize">{this.state.response.place.name}</p>}
                             {<div className="localtemp font-weight-bold" ><span>{this.state.response.ob.tempF} &#8457;</span> / <span className="text-danger">{this.state.response.ob.tempC} &#8451;</span></div>}
                             <hr className="bg-white" />
                             {<p className="font-weight-bold mb-2 phrasesize text-dark ">{this.state.response.ob.weather}</p>}
                         </div>
                         <div className="col-md-5 col-sm-4">
                             <img className="imageStyle mx-auto d-block" src={path} alt="weather icons" ></img>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-6 weather-data ">
                     <div className="row">
                         <div className="col-md-5 col-sm-6">
                             <ul className="list-unstyled  text-dark ">
                                 <li> Humidity</li>
                                 <li> Winds</li>
                                 <li> Visibility</li>
                                 <li> Feels Like</li>
                                 <li> Pressure</li>
                                 <li> Dew Point</li>
                             </ul>
                         </div>
                         <div className="col-md-7 col-sm-6">
                             <ul className="list-unstyled mesuresize font-weight-bold">
                                 {<li>{this.state.response.ob.humidity} %</li>}
                                 {<li><span >{this.state.response.ob.windMPH} mph</span>  / <span className="text-danger">{this.state.response.ob.windKPH} kph</span></li>}
                                 {<li><span>{this.state.response.ob.visibilityMI} mi</span> / <span className="text-danger">{(this.state.response.ob.visibilityKM).toFixed(0)} km</span></li>}
                                 {<li><span>{this.state.response.ob.feelslikeF} &#8457;</span> / <span className="text-danger">{this.state.response.ob.feelslikeC} &#8451;</span></li>}
                                 {<li>{this.state.response.ob.pressureIN} in</li>}
                                 {<li><span>{this.state.response.ob.dewpointF} &#8457;</span> / <span className="text-danger">{this.state.response.ob.dewpointC} &#8451;</span></li>}
                             </ul>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-1 col-md-0"></div>
             </div>
            );
     }
  }
}

export default GetOnlineForecast;

