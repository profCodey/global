import React, {useRef} from "react";
import "./quote.css";
import sendEmail from "../../../email";

function Quote2() {
   const form = useRef();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [location, setLocation] = useState('');
  // const [enquiry, setEnquiry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const templateParams = {
    //   name,
    //   email,
    //   phone,
    //   location,
    //   enquiry
    // };
// console.log(templateParams);
 
    
    try {
      await sendEmail(form.current);
      alert("Message sent successfully");
    }catch(err){
      alert("Message failed to send");
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
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email Address:</label>
            <br />
            <input
              type="email"
              name="user_email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <br />
            <input
              type="tel"
              name="user_phone"
              // value={phone}
              // onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label>Location:</label>
            <br />
            <input
              type="text"
              name="location"
              // value={location}
              // onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="quoteEnquiry">
            <label>Enquiry:</label>
            <br />
            <textarea
              name="message"
              // value={enquiry}
              // onChange={(e) => setEnquiry(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Quote2;
