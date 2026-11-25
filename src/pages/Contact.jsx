import { Contact as ContactForm, StarsCanvas } from "../components";

const ContactPage = () => {
  return (
    <div className="relative z-0 bg-primary min-h-screen pt-24">
      <ContactForm />
      <StarsCanvas />
    </div>
  );
};

export default ContactPage;
