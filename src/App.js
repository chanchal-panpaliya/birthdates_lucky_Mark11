import './App.css';
import { Component } from 'react';

import FacebookIcon from './img/icons/facebook.png';
import TwitterIcon from './img/icons/twitter.png';
import LinkedInIcon from './img/icons/linkedin.png';
import GithubIcon from './img/icons/github.png'; 

import luck from './img/luck.jpg';
import unhappy from './img/unhappy1.png';


class App extends Component {

  constructor(props){
    super(props)
            this.state ={
              DOB : "",
              luckynumber:"",
              openDialogbox_Lucky:false,
              openDialogbox_NotLucky:false
            }
  }

  onhandle_getBirthdate = (e) =>{     
           this.setState({ DOB: e.target.value })
  }

  onhandle_getLuckyNumber = (e) =>{
           this.setState({ luckynumber: e.target.value }) 
  }

  
  sumOfDOBDigits = () =>{
    let getDOB = this.state.DOB;

    var DOBSplit=getDOB.split("-");
    var GETDOB_IN_NUMBER=DOBSplit.join("");
    let sum =0;
       for(let val in GETDOB_IN_NUMBER){
         sum = sum + parseInt(GETDOB_IN_NUMBER[val])
       }
      return sum
   }


   handleCloseDialogBox =(e)=>{
    this.setState({openDialogbox_Lucky:false,openDialogbox_NotLucky:false,luckynumber:""})
  }

  

  CalculateLuckyNumber=()=>{
    let getUserEnterNumber = this.state.luckynumber;
    let getSumOfDigit = this.sumOfDOBDigits();
    
    if(getUserEnterNumber>0){
         if(getSumOfDigit%getUserEnterNumber===0){
            this.setState({openDialogbox_Lucky:true})
         }else{
            this.setState({openDialogbox_NotLucky:true})
         }
    }else{
      // console.log("value gretter then 0")
    }
  }


  DialogBoxNotrender=()=>{
    return(
      this.state.openDialogbox_NotLucky ? 
      <div> 
      <dialog className="myFirstDialog" style={{width:'40%',height:'40%',backgroundColor:'white',border:'0px solid black',zIndex:'2',top:'20%'}} open>
  
        <div className="diloagbox-luck-not-container"> Lucky Number </div>
           <img src={unhappy} alt="lucky not number" style={{width:'60%',height:'80%',paddingLeft:'7%',paddingTop:'5%'}}/> 
           
           <br/>
        <button className="button1" onClick={this.handleCloseDialogBox} style={{backgroundColor:'grey',bottom:'0%'}}>
          Agree
        </button>
  
    </dialog>
    </div> : null
      
    )
  } 


  DialogBoxLuckyNumberrender=()=>{
    return(
      this.state.openDialogbox_Lucky ? 
      <div>
      <dialog className="myFirstDialog" style={{width:'40%',height:'40%',backgroundColor:'white',border:'0px solid black',zIndex:'2',top:'20%'}}  open>
       <br/>
        <div className="diloagbox-luck-container">
              {this.state.luckynumber}
        </div>
            
              <img src={luck} alt="lucky number" style={{width:'80%',height:'80%'}}/>
            
           
        <br/><br/>
        <button id="hide" onClick={this.handleCloseDialogBox} style={{backgroundColor:'grey',bottom:'0%'}}>
          Agree
        </button>
  
    </dialog> </div>: null
      
    )
  } 

  HOMErender(){

    return (
      <div className="App">

        <div className="birthdaylucky-heading">
            Is your Birthday Lucky? 🤔
        </div>


        <div className="birthdaylucky-DOBText">
            <input id="date"  value={this.state.DOB} type="date" onChange={this.onhandle_getBirthdate} style={{width:'20%',height:'5vh'}}/>
         </div>

        <div className="birthdaylucky-LukText">
          <input id="standard-number"   placeholder="Enter your lucky number"  value={this.state.luckynumber} onChange={this.onhandle_getLuckyNumber} style={{width:'20%',height:'5vh'}}/>
              <br/>
                   {this.state.luckynumber < 0 ? <small style={{color:'red'}}>greater then 0 </small> : ""}
        </div>

        
        <div className="birthdaylucky-button">
          {this.state.DOB && this.state.luckynumber>0 ? 
          <button type="submit" className="button1" style={{color:'black',width:'20%',height:'5vh',border:'2px solid rgba(255, 0, 0, 0.5)'}} onClick={this.CalculateLuckyNumber}> Check Number </button> :
          <div> Enter DOB and your lucky number and check entered number is <b>lucky</b> or <b>not</b>. </div>}
        </div>
     
       <div className="body-privacy-text"> <b>Privacy Notice</b>:  Not storing data </div>
      </div>
    );
  }

  render(){
   return(
    <div className="container-birthdaylucky">
    <div className="background-birthdaylucky">
      <div style={{width:'-webkit-fill-available',position:'fixed'}}>
          <div className="menu__logoSpace"> 
              <a href="/" className="menu__logo"> Creator Space </a>
          </div>
          <div className="menu__socialItems">
                  <a className="menu__socialLink" target="_blank" href='https://www.facebook.com/chanchal.panpaliya'> 
                    <span className="menu__socialIcon">
                      <img style={{width:'8%',paddingTop:'2%'}} src={FacebookIcon} alt="facebooklink"/>
                    </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://twitter.com/CPanpaliya'> 
                     <span className="menu__socialIcon">
                        <img style={{width:'8%',paddingTop:'2%'}} src={TwitterIcon} alt="twitterlink"/>
                     </span>
                  </a><br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://www.linkedin.com/in/chanchal-panpaliya-0b0436112'> 
                    <span className="menu__socialIcon">
                       <img style={{width:'8%',paddingTop:'2%'}} src={LinkedInIcon} alt="linkedinlink"/>
                      </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://github.com/chanchal-panpaliya'> 
                    <span className="menu__socialIcon">
                      <img style={{width:'8%',paddingTop:'2%'}} src={GithubIcon} alt="githublink"/>
                    </span>
                </a>
              </div>
      </div>
    </div>
    <div className="body-frame-birthdaylucky">
       {this.HOMErender()}
      
    </div> 
    {this.DialogBoxNotrender()}
    {this.DialogBoxLuckyNumberrender()}
</div>
   )
  }
 
}

export default App;
