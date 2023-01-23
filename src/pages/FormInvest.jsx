
import {BsCurrencyDollar, BsCreditCard2Front} from 'react-icons/bs';
import React from "react";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Info from "../assets/info.png"
import axios from "axios";
const FormCF = () => {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [accredited, setAccredited] = useState("");
const [income, setIncome] = useState("");
const [usa, setUsa] = useState("")

const navigate = useNavigate()
function formatPhoneNumber(value) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, "");

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early
  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}


const handleInput = (e) => {
  // this is where we'll call the phoneNumberFormatter function
  const formattedPhoneNumber = formatPhoneNumber(e.target.value);
  // we'll set the input value using our setphone
  setPhone(formattedPhoneNumber);
};

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log(name, age, designation, salary);

  navigate("/success")
  // our object to pass
  const data = {
    name,
    email,
    phone,
    accredited, 
    income,
    usa,
  };
  axios.post(
      "/investors",
      data
    )
    .then((response) => {
      console.log(response);
      setName("");
      setPhone("");
      setEmail("");
      setAccredited("");
      setIncome("");
      setUsa("");
    });
};

  return (
    <div className='wrapper'>

    <form className="form" onSubmit={handleSubmit}>
      <div className='flexWrap'>
    <h2>Start Investing</h2>
      <h2><a href='/crowdfund'> <span className='Click'>Click Here To Raise Money</span> </a></h2></div>
      <div className="inputWrap">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        required

        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      </div>
      <div className="inputWrap">
      <label>Phone</label>
      <input
             required
         className="form-control"
       onChange={(e) => handleInput(e)} 
       value={phone} /> 

        </div> 
       
       
       <div className="inputWrap">
      <label>Email</label>
      <input
        type="text"
        className="form-control"
        required
       
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />{" "}    </div>  <div className="inputWrap">
        <div className='flexWrap'>
      <label>Are you an accredited investor?  </label> </div>

<input
      type="text"
      className="form-control"
        required
        defaultValue="678"
        onChange={(e) => setAccredited(e.target.value)}
        value={accredited}
      />{" "}  </div>    <div className="inputWrap">
      <label>What is your annual income?</label>     <span className='dollar'> <BsCurrencyDollar color = "#000000" size = {17}/> </span>
      <input
        type="number"
        className="form-price"
        required
   
        onChange={(e) => setIncome(e.target.value)}
        value={income}
      />{" "}  </div>   <div className="inputWrap">
         <label>Do you live in the U.S?</label>
      <input
        type="text"
        className="form-control"
        required
     
        onChange={(e) => setUsa(e.target.value)}
        value={usa}
      />
      </div>
      <button type='submit' className='rounded-md border-[1px] mt-10 p-3 border-[#0091FA] text-white text-[25px]' >Submit</button>
    </form> 

    </div>
  );
};

export default FormCF;
