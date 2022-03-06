import { Fragment } from "react";
import Card from "../containers/card";

const FORM_SCHEMA = {
  email: {
    label: "Email",
    placeholder: ""
  },
  content: {
    label: "Mensaje",
    placeholder: ""
  }
};

const Contact = () => {
  return (
    <Fragment>
      <Card>
        <form action="/action_page.php">
          { Object.entries(FORM_SCHEMA).map( ([key,value], idx) => {
              return <Fragment>      
                <label for={key}>{value.label}</label><br />
                <input type="text" id={key} name={key} value={value.placeholder} /><br/>
              </Fragment> 
            })   
          }
          <input type="submit" value="Submit" />
        </form> 
      </Card>
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