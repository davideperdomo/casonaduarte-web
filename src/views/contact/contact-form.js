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
        <span class="material-icons-round">
          place
        </span><p>Calle Floridablanca,134,local 2
            08011 Barcelona
            España
          </p>
        </Card>
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
      </ContactFormContainer>
    </Fragment>
  )
};

const ContactFormContainer = styled.div`
    padding: 1em;
    padding-top: 2em;
`;

export default ContactForm;