import React from 'react';
import emailjs from 'emailjs-com';
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fnkpktd', 'template_st7cnkl', e.target, 'user_ZlNMMwLkT7gSPBlUTooqb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}