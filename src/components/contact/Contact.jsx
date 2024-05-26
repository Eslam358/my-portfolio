import "./contact.scss";

// import React, { useRef, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xbjneqjr");
  
  // const Email = useRef();
  // const Message_ref = useRef();
  // const [Sent, setSent] = useState(false);
  
  // const handleSubmitt = (event) => {
  //   event.preventDefault();
  // };
  // const Message = () => {
    // if (state.succeeded) {
    //   setSent(true);
    //   setTimeout(() => {
    //     setSent(false);
    //     Message_ref.current.value = "";
    //     Email.current.value = "";
    //   }, 3000);
    // }
  // };
  
  console.log(state)
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }
  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <img src="https://xslmy.csb.app/assets/shake.svg" alt="cont" />
      </div>
      <div className="contact-right">
        <div className="head">
          <h2>Contact.</h2>
        </div>
        <form  onSubmit={handleSubmit}>
    
      <input
      placeholder="Email Address"
        id="email"
        type="email" 
        name="email"
        />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
      <textarea
        placeholder="Message"
        id="message"
        name="message"
        />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>


        {/* <form onSubmit={handleSubmitt}>
          <input placeholder="Email" ref={Email} type="text" />

          <textarea
            ref={Message_ref}
            placeholder="Message"
            name=""
            id=""
          ></textarea>
          <button type="submit" onClick={() => Message()}>
            Send
          </button>
        </form> */}

        <div className="Message">
          {state.succeeded && <h3>Thanks, I'll reply ASAP :</h3>}
          {state.errors && <h3 style={{color:"red"}}>errors, I'll errors :</h3>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
