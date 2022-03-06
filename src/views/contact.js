import emailjs from "@emailjs/browser";
import { Fragment, useRef } from "react";
import Card from "../containers/card";

const EMAIL_CONFIG = {
  SERVICE_ID: "service_kwx1izw",
  TEMPLATE_ID: "template_n6nfcjo",
  USER_ID: "zplRVMn8pd2byUO1M"
};

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

const FormInput = ({ inputType = "input", ...props }) => {
  const inputTypes = {
    input: <input {...props} />,
    textArea: <textarea {...props}/>
  }
  console.log("type", inputTypes.input, inputTypes[inputType]);
  return ( inputTypes[inputType] ?? <textarea /> );
}

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      EMAIL_CONFIG.SERVICE_ID, 
      EMAIL_CONFIG.TEMPLATE_ID, 
      form.current, 
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
      <div>
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
                    //value={value.placeholder} 
                  /><br/>
                </Fragment> 
              })   
            }
            <input type="submit" value="Submit" />
          </form> 
        </Card>
      </div>
    </Fragment>
  )
};

/**
 * 
          <label for="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" value="John" /><br/>
          <label for="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" value="Doe" /><br/><br/>
 */
export default Contact;