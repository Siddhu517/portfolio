import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      toast.error("All fields are required");
      return;
    }

    /* emailjs.com to use send email */

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Email Send Successfully");
          console.log(result.text);
          /* reset form data */
          form.current.reset();
        },
        (error) => {
          toast.error("Email send error");
          console.log(error.text);
        }
      );
  };

  const contact_info = [
    {
      logo: "mail",
      text: "siddhusadadekar517@gmail.com",
    },
    {
      logo: "logo-whatsapp",
      text: "+917263837199",
    },
    {
      logo: "location",
      text: "Sindhudurg, Maharashtra, India.",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          {" "}
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form
            className="flex flex-col flex-1 gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              className=""
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              name="user_email"
              className=""
              required
            />
            <textarea
              placeholder="Your message"
              name="message"
              rows={10}
            ></textarea>
            <button type="submit" className="btn-primary w-fit " value="Send">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info?.map((contact, i) => (
              <div key={i} className="flex gap-4 w-fit items-center">
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-base">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
