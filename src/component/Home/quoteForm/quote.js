import React, {useRef} from "react";
import "./quote.css";
import sendEmail from "../../../email";
import MainButton from '../../button/button'

function Quote2() {
   const form = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      await sendEmail(form.current);
      alert("Message sent successfully");
      console.log('message sent');
    }catch(err){
      alert("Message failed to send");
      console.log("message failed to send")
      console.log('erorr', err);
    }
    
  };

    
  return (
    <div className="quoteForm2">
      <div className="quoteFormWrapper">
        <form ref={form} onSubmit={handleSubmit} className="quoteformchild">
          <h2>Get a Quote</h2>
          <div>
            <label>Name:</label> <br />
            <input
              type="text"
              name="user_name"
              className="text-2xl p-4 md:p-6"
      
            />
          </div>
          <div>
            <label>Email Address:</label>
            <br />
            <input
              type="email"
              name="user_email"
              className="text-2xl p-4 md:p-6"
         
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <br />
            <input
              type="tel"
              name="user_phone"
              className="text-2xl p-4 md:p-6"
   
            />
          </div>
          <div>
            <label>Location:</label>
            <br />
            <input
              type="text"
              name="location"
              className="text-2xl p-4 md:p-6"
        
            />
          </div>
          <div className="quoteEnquiry">
            <label>Enquiry:</label>
            <br />
            <textarea
              name="message"
              className="text-2xl p-4 md:p-6"

            />
          </div>

          <div className="mx-auto w-full flex justify-center">
            <MainButton text="Submit" submit="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Quote2;
