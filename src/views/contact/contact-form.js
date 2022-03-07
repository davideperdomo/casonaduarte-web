import emailjs from "@emailjs/browser";
import { Fragment, useRef } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { FormInput } from "../../components/form";
import Card from "../../containers/card";
import { EMAIL_CONFIG } from "../../helpers/email";

const FORM_SCHEMA = {
  name: {
    label: "Nombre",
    placeholder: ""
  },
  phone: {
    label: "Phone",
    placeholder: ""
  },
  email: {
    label: "Email",
    placeholder: ""
  },
  message: {
    label: "Mensaje",
    placeholder: "",
    inputType: "textArea"
  }
};

const ContactForm = () => {
  const form = useRef();
  const { pathname } = useLocation();
  const pathValues = pathname.split("/")
  const messageType = (pathValues.length > 0) ? pathValues[1] : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      EMAIL_CONFIG.SERVICE_ID, 
      EMAIL_CONFIG.TEMPLATE_ID, 
      { ...form.current, messageType }, 
      EMAIL_CONFIG.USER_ID
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Fragment>
      <ContactFormContainer>
        <Card>
          <h3>Contáctanos</h3>
          <form ref={form} onSubmit={handleSubmit}>
            { Object.entries(FORM_SCHEMA).map( ([key,value], idx) => {
                return <Fragment>      
                  <label for={key}>{value.label}</label><br />
                  <FormInput 
                    inputType={value?.inputType ?? "input"}
                    type="text" 
                    id={key} 
                    name={key} 
                  /><br/>
                </Fragment> 
              })   
            }
            <input type="submit" value="Submit" />
          </form> 
        </Card>
        <br />
        <Card>
          <a href="https://goo.gl/maps/9zT4ic8q4z3EH1zW7" target="_blank" rel="noreferrer">
            <p>
              <span class="material-icons-round">
              place
              </span>
              Calle Floridablanca,134,local 2
              08011 Barcelona
              España
            </p>
          </a>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1118.312093719771!2d2.161506962070942!3d41.381080364576626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a261d67d57c7%3A0x7cfdd9c8e1fd13a1!2sC.%20de%20Floridablanca%2C%20134%2C%2008011%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sco!4v1646622620041!5m2!1sen!2sco" width="500" height="300" style={{border:0}} allowfullscreen="" loading="lazy" title="casona-map"></iframe>
        </Card>
      </ContactFormContainer>
    </Fragment>
  )
};

const ContactFormContainer = styled.div`
  padding: 2em 1em;

  @media (max-width: 720px){
    iframe {
      display: none;
    }
  };
`;

export default ContactForm;