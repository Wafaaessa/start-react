
/////////////////////////////////////////////////////
import React, { Component } from "react";
import style from './Contact.module.css'
const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            isError: {
                name: '',
                email: ''
            
            }
          
        }
    }


    onSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
         alert(`Sorry ${this.state.name}, it seems that my mail server is not responding. Please try again later!`);
        } else {
            console.log("Form is invalid!");
        }
    };


    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
     

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "* At least 4 characaters required" : "";
                  
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "* Not a valid email address";
                break;
            default:
                break;
        }
     

        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
        const { isError } = this.state;

        return (
            <div className="container mt-5 pt-5">
                <div className="title mt-5 pt-5 text-center">
                 <h1 className='pt-5 '>CONTACT ME</h1>
                  <div className={style.star}>
              <i className="fa-solid fa-star text-center  fa-4x"></i>
              </div>
             </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                    <form onSubmit={this.onSubmit} noValidate>
                
                <div className="form-group">
             
                    <div className="form-floating">
                    <input type="text"
                        className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onChange={this.formValChange}id="floatingName" placeholder="text"
                    />
                      <label htmlFor="floatingName">Name</label>
                    {isError.name.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>

                    )}
                        

                </div>
                </div>
                <div className="form-group">
                <div className="form-floating mb-3">
                 <input type="email"  id="floatingInput" placeholder="name@example.com"
                  className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                 name="email"onChange={this.formValChange}/>
                 <label htmlFor="floatingInput" className="">Email address</label>
                         {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}</div>
                </div>
                <div className="form-floating mb-3">
               <input type="phone" className="form-control" id="floatingInput" placeholder="phone"/>
               <label htmlFor="floatingInput" >Phone Number</label>
               </div>
           
               
               <div className=" form-floating mb-3 ">
                <textarea  id="floatingInput" className="form-control w-75 h-50"  rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false"></textarea>

                <label  htmlFor="floatingInput">Message</label> </div>
                <div className="form-group pb-5">
            <button  className="btn btn-primary btn-xl button px-4 fw-bolder py-2 " id="sendMessageButton" type="submit">Send</button>  
             </div>
            <div className="alert alert-danger " style={{display: this.state.name ? 'block' : 'none' }}>
                {/* <button type="button" className="close2" data-dismiss="alert"className="me-0" aria-hidden="true">×</button> */}
            <strong >Sorry {this.state.name}, it seems that my mail server is not responding. Please try again later!</strong>
           
            </div>
           
          
            </form>
                    </div>
                </div>
            </div>
           
        );
    }
}
