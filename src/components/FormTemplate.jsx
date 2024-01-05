import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs.sendForm(import.meta.env.VITE_APP_SERVICE, import.meta.env.VITE_APP_FORM_TEMPLATE, form.current, import.meta.env.VITE_APP_ID)
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        formMess.classList.add("visible");
        formMess.innerHTML = "<p class='success'>Message envoyé !</p>";
        setTimeout(() => {
          formMess.classList.remove("visible");
          formMess.innerHTML = "";
        }, 2500);
      }, (error) => {
        formMess.classList.add("visible");
        formMess.innerHTML = "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";
        console.log(error.text);
      });
  };

  return (
    <>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="firstname"></label>
          <input type="text"
            name="firstname"
            pattern="(^[a-zA-ZÀ-ÖØ-öø-ÿ]{1,30})"
            title="Veuillez renseigner votre prénom"
            required
            placeholder="Prénom *"
            id="firstname"
            autoComplete="nope"
          />
          <label htmlFor="lastname"></label>
          <input type="text"
            name="lastname"
            pattern="(^[a-zA-ZÀ-ÖØ-öø-ÿ]{1,30})"
            title="Veuillez renseigner votre nom"
            required
            placeholder="Nom *"
            id="lastname"
            autoComplete="nope"
          />
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" required placeholder="pierredupont@gmail.com *" key="email" />
          <label htmlFor="message"></label>
          <textarea name="message" placeholder="Commentaires... *" id="message" rows="5" cols="33" required />
          <button className="btn-secondary">
            <p><input className="unclicked" type="submit" value="Envoyer" /></p>
            <span></span>
          </button>
        </form>
      </div>
      <div className="form-message"></div>
    </>
  );
};

export default FormTemplate;