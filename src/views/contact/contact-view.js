import { Fragment } from "react";
import ContactForm from "./contact-form";
import TopBar from "../../containers/top-bar";
import BottomBar from "../../containers/bottom-bar";

const Contact = () => {
  return (
    <Fragment>
      <TopBar />
      <ContactForm />
      <BottomBar />
    </Fragment>
  );
};

export default Contact;