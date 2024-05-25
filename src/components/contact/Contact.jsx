import "./contact.scss";

import React, { useRef, useState } from "react";

const Contact = () => {
  const Email = useRef();
  const Message_ref = useRef();
  const [Sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const Message = () => {
    if (Message_ref.current.value !== "" && Email.current.value !== "") {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        Message_ref.current.value = "";
        Email.current.value = "";
      }, 3000);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <img src="https://xslmy.csb.app/assets/shake.svg" alt="cont" />
      </div>
      <div className="contact-right">
        <div className="head">
          <h2>Contact.</h2>
        </div>
        <form onSubmit={handleSubmit}>
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
        </form>
      
        <div className="Message">
          {Sent && <h3>Thanks, I'll reply ASAP :</h3>}
          ooooooooooo
        </div>
      </div>
    </div>
  );
};

export default Contact;
