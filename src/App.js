import './App.css';
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import  Facebook  from '@material-ui/icons/Facebook';
import  Twitter  from '@material-ui/icons/Twitter';
import  LinkedIn  from '@material-ui/icons/LinkedIn';
import  GitHub  from '@material-ui/icons/GitHub';

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
      console.log("value gretter then 0")
    }
  }


   DialogBoxNotrender=()=>{
    return(
      <Dialog
      open={this.state.openDialogbox_NotLucky}
      onClose={this.handleCloseDialogBox}
      aria-labelledby="responsive-dialog-title"
    >
      {/* <DialogTitle id="responsive-dialog-title"> {this.state.luckynumber} is not a Lucky Number </DialogTitle> */}
      <DialogContent>
        <DialogContentText>
        <div className="diloagbox-luck-not-container"> a Lucky Number </div>
           <img src={unhappy} alt="lucky not number" style={{width:'20%',height:'20%'}}/> 
           
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={this.handleCloseDialogBox} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
    )
  } 


   DialogBoxLuckyNumberrender=()=>{
    return(
      <Dialog
      open={this.state.openDialogbox_Lucky}
      onClose={this.handleCloseDialogBox}
      aria-labelledby="responsive-dialog-title"
    >
      {/* <DialogTitle id="responsive-dialog-title">{this.state.luckynumber} is a Lucky Number </DialogTitle> */}
      <DialogContent>
        <DialogContentText>
            <div className="diloagbox-luck-container">
                {this.state.luckynumber}
            </div>
            
               <img src={luck} alt="lucky number"/>
            
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={this.handleCloseDialogBox} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
    )
  }


  HOMErender(){

    return (
      <div className="App">

        <div className="birthdaylucky-heading">
            Is your Birthday Lucky? 🤔
        </div>

        <form  noValidate>

        <div className="birthdaylucky-DOBText">
            <TextField id="date" label="Birthday"  variant="filled" value={this.state.DOB} type="date" onChange={this.onhandle_getBirthdate}
                InputLabelProps={{
                  shrink: true,
                }} style={{width:'20%'}}/>
         </div>

        <div className="birthdaylucky-LukText">
          <TextField id="standard-number"  variant="filled" label="Enter your lucky number"  value={this.state.luckynumber} onChange={this.onhandle_getLuckyNumber}
            InputLabelProps={{
              shrink: true,
            }}
            style={{width:'20%'}}
            error={this.state.luckynumber < 0} helperText={ this.state.luckynumber < 0 ? 'greater then 0 ' : '' }
          />
        </div>

        
        <div className="birthdaylucky-button">
          {this.state.DOB && this.state.luckynumber>0 ? 
          <Button variant="outlined" style={{backgroundColor:'rgba(255, 0, 0, 0.5)',color:'white'}} onClick={this.CalculateLuckyNumber}> Check Number </Button> :
          <div> Enter DOB and your lucky number and check entered number is <b>lucky</b> or <b>not</b>. </div>}
        </div>
       </form>
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
                      <Facebook  style={{color:'grey'}}/>
                    </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://twitter.com/CPanpaliya'> 
                     <span className="menu__socialIcon">
                        <Twitter style={{color:'grey'}}/>
                     </span>
                  </a><br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://www.linkedin.com/in/chanchal-panpaliya-0b0436112'> 
                    <span className="menu__socialIcon">
                      <LinkedIn style={{color:'grey'}}/> 
                      </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://github.com/chanchal-panpaliya'> 
                    <span className="menu__socialIcon">
                      <GitHub style={{color:'grey'}}/>
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
