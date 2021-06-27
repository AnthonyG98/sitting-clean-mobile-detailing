import React from "react"
import emailjs from "../../node_modules/emailjs-com"

const initialState = {
    name: '',
    email:'',
    phone:'', 
    pack:'',
    nameError:'',
    emailError:'',
    phoneError:''
}
class Contact extends React.Component {
    constructor(){
        super()
        this.state = initialState
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    validate = () => {
        let nameError ="";
        let emailError="";
        let phoneError="";
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const reg = /^\d+$/;
        
        if(this.state.name.length < 2){
            nameError = "Enter a valid name"
        }
        if(nameError){
            this.setState({ nameError })
            return false
        }
        if(this.state.phone.length < 10 || !this.state.phone.match(reg)){
            phoneError = "Enter a valid phone number"
        }
        if(phoneError){
            this.setState({ phoneError })
            return false
        }
        if(!this.state.email.match(re) || this.state.email < 10){
            emailError = "invalid email"
        }
        if(emailError){
            this.setState({ emailError })
            return false
        }
        return true
    }
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        const submitBtn = document.getElementById("submit");
        if(isValid){
            submitBtn.innerHTML= "Sent"
            this.setState(initialState);
        }
        emailjs.sendForm('service_6mfw3xf', 'template_e53vza5', event.target, 'user_tF7OLHQ41f2A3l6UsEq8G')
    }
      render(){
        return(
            <div className="contact-container" id="contact-scroll">
                <form id="form" onSubmit={this.handleSubmit}>
                <label className="label">Name: </label>
                <input 
                className="input" 
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                /><br/>
                <div className="test">{this.state.nameError}</div>
                <label className="label">Email: </label>
                <input 
                className="input" 
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                /><br/>
                <div className="test">{this.state.emailError}</div>
                <p className="or">or</p>
                <label className="label" name="phone">Phone number : </label>
                <input 
                className="input" id="phone"
                name="phone"
                type="text"
                onChange={this.handleChange}
                value={this.state.phone}
                /><br/>
                <div className="test">{this.state.phoneError}</div>
                <select className="select-pack" 
                name="pack"
                onChange={this.handleChange}
                value={this.state.pack}>
                    <option className="option" value="express detail">
                        Express Detail
                    </option>
                    <option className="option" value="clay wax detail">
                        Clay wax Detail
                    </option>
                    <option className="option" value="full interior detail">
                        Full Interior Detail
                    </option>
                </select><br/>
                <label className="label">Appointment date:</label>
                <input type="date"/><br/>
                <div className="center-submit">
                    <button type="submit" id="submit">Submit</button>
                </div>
                </form>
                <div className="follow-container">
                <h1 className="follow-text">FOLLOW US ON INSTAGRAM!</h1>
                <i class="fab fa-instagram"><p className="icon-text">SITTINGCLEAN_MOBILEDETAILING</p></i>
                </div>
            </div>
    
    )
}}

export default Contact