import React from 'react';
import './contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="background-animation">
        {/* Colorful circles */}
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      {/* Header Section */}
   {/* Contact Information Section */}
      <section className=" text-center">
        <h2 className='text-xl mt-12 bg-red-300 font-serif'>Get In Touch</h2>
       
        <div className="contact-info">
          <div>
            <h3 className='font-bold'>Phone:</h3>
            <p className='font-bold'>+1 (234) 567-890</p>
          </div>
          <div>
            <h3 className='font-bold'>Email:</h3>
            <p className='font-bold'>contact@yourblog.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section>
        <h2 className='text-sm bg-blue-500'>SEND US A MESSAGE</h2>
        <div className="form-container">
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="">
  <label htmlFor="message">Message</label>
  <textarea 
    id="message" 
    rows="4" 
    placeholder="Your Message" 
    required 
    style={{
      width: '100%', // Makes it responsive
      maxWidth: '500px', // Sets a maximum width
      height: '50px', // Sets a specific height
      border: '1px solid #ccc', // Optional: border style
      borderRadius: '4px', // Optional: border radius
      padding: '10px', // Optional: padding inside the textarea
      resize: 'none' // Optional: prevents resizing
    }} 
  />
</div>

            <button className='mb-5'  type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
