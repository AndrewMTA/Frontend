
import {BsCurrencyDollar, BsCreditCard2Front} from 'react-icons/bs';
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const FormCF = () => {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [company, setCompany] = useState("");
const [pitch, setPitch] = useState("");
const [raise, setRaise] = useState("");
const [stage, setStage] = useState("");
const [timeline, setTimeline] = useState("");
const [prevRaised, setPrevRaised] = useState("");
const [usa, setUsa] = useState("");
const [data, setData]=useState([]);

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

  // our object to pass
  const data = {
    name,
    email,
    phone,
    company,
    pitch,
    raise,
    stage,
    timeline,
    prevRaised,
    usa,
  };
  axios.post(
      "/crowdfunding",
      data
    )
    navigate("/success")

    .then((response) => {
      console.log(response);
      setName("");
      setPhone("");
      setEmail("");
      setCompany("");
      setPitch("");
      setRaise("");
      setStage("");
      setTimeline("");
      setPrevRaised("");
      setUsa("");
    });
};

  return (
    <div className='wrapper'>
  
    <form className="form" onSubmit={handleSubmit}>
      <div className='flexWrap'>
    <h2>Start Your Campaign</h2>
    </div>
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
      <label>How much do you want to raise?</label>

     <span className='dollar'> <BsCurrencyDollar color = "#000000" size = {15}/> </span><input
      type="number"
        className="form-price"
        required
        defaultValue="678"
        onChange={(e) => setRaise(e.target.value)}
        value={raise}
      />{" "}  </div>    <div className="inputWrap">
      <label>What stage are you at?</label>
      <input
        type="text"
        className="form-control"
        required
   
        onChange={(e) => setStage(e.target.value)}
        value={stage}
      />{" "}  </div>    <div className="inputWrap">
      <label>How soon do you want to raise?</label>
      <input
        type="text"
        className="form-control"
        required
    
        onChange={(e) => setTimeline(e.target.value)}
        value={timeline}
      />{" "}    </div>  
      
      
      <div className="inputWrap">
        
      <label>How much have you already raised?</label>
      <span className='dollar'> <BsCurrencyDollar color = "#000000" size = {15}/> </span>
      <input
        type="text"
        className="form-price"
        required
  
        onChange={(e) => setPrevRaised(e.target.value)}
        value={prevRaised}
      />    </div>  <div className="inputWrap">
         <label>Do you live in the U.S?</label>
      <input
        type="text"
        className="form-control"
        required
     
        onChange={(e) => setUsa(e.target.value)}
        value={usa}
      />
      </div>
      <button type='submit' className='rounded-md border-[1px] mb-10 mt-5 p-3 border-[#0091FA] text-white text-[25px]'>Submit</button>
      <h2><a href='/Invest'> <span className='Click'>Sign Up To Invest</span> </a></h2>
    </form>
    </div>
  );
};

export default FormCF;
