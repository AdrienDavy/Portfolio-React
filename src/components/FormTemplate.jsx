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
        formMess.innerHTML = "<p class='success'>Message envoyé !</p>";
        setTimeout(() => {
          formMess.innerHTML = "";
        }, 2500);
      }, (error) => {
        formMess.innerHTML = "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";
        console.log(error.text);
      });
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name"></label>
        <input type="text"
          name="name"
          pattern="(^[a-zA-ZÀ-ÖØ-öø-ÿ]{1,30} [a-zA-ZÀ-ÖØ-öø-ÿ]{1,30}$)"
          title="Veuillez renseigner votre prénom et votre nom en les séparant par un espace."
          required autoComplete="off"
          placeholder="John Doe"
          id="name" />
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" required autoComplete="off" placeholder="johndoe@gmail.com" />
        <label htmlFor="message"></label>
        <textarea name="message" placeholder="Commentaires..." id="message" rows="5" cols="33" required />
        <input type="submit" value="Envoyer" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default FormTemplate;