import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Container from 'common/src/components/UI/Container';

import ContactFromWrapper from './contact.style';

import emailjs from 'emailjs-com';

const ContactSection = ({
  sectionWrapper,
  row,
  contactForm,
  secTitleWrapper,
  secHeading,
  secText,
  button,
  note,
}) => {


  
       {/**
    emailjs.sendForm('service_fnkpktd', 'template_st7cnkl', e.target, 'user_ZlNMMwLkT7gSPBlUTooqb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    */}
    
  function handleContactForm(e) {
    console.log("Foumrulaire");
}


  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="CONTACT" />
          <Heading
            {...secHeading}
            content="Voulez-vous des renseignements supplémentaires?"
          />
        </Box>
        <Box {...row}>
          <Box {...contactForm}>
            <ContactFromWrapper>
              
              <form onSubmit={handleContactForm}>

              <Input
                name="email"
                inputType="email"
                placeholder="Adresse mel"
                iconPosition="right"
                isMaterial={false}
                className="email_input"
                aria-label="email"
                valeur= {Input.value}  
              />
                <Button {...button} title="ENVOYER" />
              </form>

            </ContactFromWrapper>
            <Text
              {...note}
              content="Note: Please call us at 12pm to 8am. otherwise our customer supporter will not  available to reach your call, but you can drop mail anytime."
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: ['0px', '10px', '20px', '80px'],
    pb: ['0px', '0px', '0px', '0px', '80px'],
    bg: '#f9fbfd',
  },
  secTitleWrapper: {
    mb: ['45px', '50px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    justifyContent: 'center',
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2],
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`,
  },
  note: {
    fontSize: ['13px', '14px', '15px', '15px', '15px'],
    color: '#5d646d',
    lineHeight: '1.87',
    textAlign: 'center',
  },
};

export default ContactSection;
