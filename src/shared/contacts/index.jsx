import React from 'react'
import './contacts.css'
import Button from 'shared/button'
import { GoArrowRight } from 'react-icons/go'
import { GoLocation } from "react-icons/go";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import Header from 'shared/header';


const Contact = () => {
  return (
    <div className="Form_contact">
      <Header/>
      <h1 className="hi">Contact Us</h1>
      <h3 className="lo">Any Questions or remarks? Just write us a message</h3>
      <div className="container_cont">
      <div className="contact_info">
        <h1>Contact Information</h1>
        <h3>Say something to start a live chat</h3>
        <div className="contact_info_list">
          <ul>
          <li>{<MdOutlinePhoneInTalk/>}+10123826781</li>
          <li>{<CiMail/>}demo@gmail.com</li>
          <li>{<GoLocation/>}132 Dartmouth Street Boston, Massachusetts 02156 United States</li>
          </ul>
        </div>
      </div>
      <div className="contact_form">
        <form>
        <div className="form-field">
          <fieldset>
            
            <input type="text" name="first" id="first" placeholder= "First Name"  class ="first"/>

            
            <input type="text" name="last" id="last" placeholder= "Last Name"class ="last" />

            
            <input type="email" name="email" id="email" placeholder='Email' class ="email"/>

            
            <input type="tel" name="phone" id="phone"placeholder='Phone Number'  class ="tel"/>
            </fieldset>
            </div>
            <div className="form-2">
                <label>Select Subject?</label>
                <div className="form-radio">
                    <label><input type="radio" name="" id="" />General Inquiry</label>
                    <label><input type="radio" name="" id="" />Payment $ fees</label>
                    <label><input type="radio" name="" id="" />Technical</label>
                    <label><input type="radio" name="" id="" />Registration</label>
                    <label><input type="radio" name="" id="" />Others</label>
                </div>
                <div className="form-message">
                    <textarea name="messagee" id="message" placeholder='Your message'></textarea>
                </div>
                <div className=" form-button">
                <Button
          style={{
            backgroundColor: "#dba94d",
            color: "#1f4b43",
            padding: "8px 12px",
            width: "256px",
          }}
          btnName={"Send Message"}
          rightIcon={<GoArrowRight size={22} />}
        />
               </div>
            </div>

        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact