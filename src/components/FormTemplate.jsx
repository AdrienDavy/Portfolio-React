import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import deniedSound from "../assets/sounds/denied.mp3";
import successSound from "../assets/sounds/success.mp3";
import { useSound } from '@contexts/soundContext';

const FormTemplate = () => {
  const { isMuted } = useSound();
  const deniedRef = useRef();
  const successRef = useRef();
  const form = useRef();
  const [buttonText, setButtonText] = useState('Envoyer');
  const [isFormValid, setIsFormValid] = useState('btn-secondary');
  const isEmailValid = (email) => {
    // Utilisez ici votre propre validation pour le format de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const [isFormFilled, setIsFormFilled] = useState({
    firstname: false,
    lastname: false,
    email: false,
    message: false,
  });
  const [formErrors, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    message: false,
  });
  const [errorMessage, setErrorMessage] = useState(""); // Nouvel état pour le message d'erreur
  const fieldTranslations = {
    firstname: "votre prénom",
    lastname: "votre nom",
    email: "adresse email",
    message: "un message",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsFormFilled((prev) => ({ ...prev, [name]: value.trim() !== '' }));
    setFormErrors((prev) => ({ ...prev, [name]: false }));
  };

  const sendEmail = async () => {
    const formMess = document.querySelector(".form-message");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_SERVICE,
        import.meta.env.VITE_APP_FORM_TEMPLATE,
        form.current,
        import.meta.env.VITE_APP_ID
      );
      setIsFormValid('submitted');
      form.current.reset();
      setButtonText('Envoyé !');
      setTimeout(() => {
        setButtonText('Envoyer');
        setIsFormValid('btn-secondary');
      }, 2500);
    } catch (error) {
      formMess.classList.add("visible");
      formMess.innerHTML = "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";
      console.log(error.text);
      throw error; // Ajout de cette ligne pour propager l'erreur
    }
  };

  const handleClickSubmit = async (e) => {
    e.preventDefault();

    const allFieldsFilled = Object.values(isFormFilled).every(Boolean);

    const emailInput = form.current.elements.email;
    setErrorMessage("");

    if (allFieldsFilled && !isEmailValid(emailInput.value)) {
      setErrorMessage(`Veuillez entrer une ${fieldTranslations['email']} valide.`);
      setFormErrors((prev) => ({
        ...prev,
        firstname: !isFormFilled.firstname,
        lastname: !isFormFilled.lastname,
        email: true,
        message: !isFormFilled.message,
      }));
      if (!isMuted) {
        deniedRef.current.pause();
        deniedRef.current.currentTime = 0.2;
        deniedRef.current.play();
      }
      setIsFormValid('invalid');
      setButtonText('Erreur !');
      setTimeout(() => {
        setIsFormValid('btn-secondary');
        setButtonText('Envoyer');
      }, 1000);
    } else if (allFieldsFilled) {
      try {
        await sendEmail();
        if (!isMuted) {
          successRef.current.pause();
          successRef.current.play();
        }
      } catch (error) {
        console.warn(error);
      }
    } else {
      const missingFields = Object.keys(isFormFilled).filter((fieldName) => !isFormFilled[fieldName]);
      const newErrorMessage = `Veuillez renseigner ${missingFields.length > 1
        ? `${missingFields.slice(0, -1).map(fieldName => fieldTranslations[fieldName]).join(', ')} et ${fieldTranslations[missingFields[missingFields.length - 1]]}`
        : fieldTranslations[missingFields[0]]
        }.`;

      setErrorMessage(newErrorMessage);

      setFormErrors((prev) => ({
        ...prev,
        firstname: !isFormFilled.firstname,
        lastname: !isFormFilled.lastname,
        email: !isFormFilled.email && !isEmailValid(emailInput.value),
        message: !isFormFilled.message,
      }));
      if (!isMuted) {
        deniedRef.current.pause();
        deniedRef.current.currentTime = 0.2;
        deniedRef.current.play();
      }
      setIsFormValid('invalid');
      setButtonText('Erreur !');
      setTimeout(() => {
        setIsFormValid('btn-secondary');
        setButtonText('Envoyer');
      }, 1000);
    }
  };

  return (
    <>
      <audio ref={deniedRef} src={deniedSound}></audio>
      <audio ref={successRef} src={successSound}></audio>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="firstname"></label>
          <input type="text"
            name="firstname"
            pattern="(^[a-zA-ZÀ-ÖØ-öø-ÿ]{1,50})"
            title="Veuillez renseigner votre prénom"
            required
            placeholder="Prénom *"
            id="firstname"
            autoComplete="nope"
            onChange={handleInputChange}
            className={formErrors.firstname ? 'error' : ''}
          />
          <label htmlFor="lastname"></label>
          <input type="text"
            name="lastname"
            pattern="(^[a-zA-ZÀ-ÖØ-öø-ÿ]{1,50})"
            title="Veuillez renseigner votre nom"
            required
            placeholder="Nom *"
            id="lastname"
            autoComplete="nope"
            onChange={handleInputChange}
            className={formErrors.firstname ? 'error' : ''}
          />
          <span>{errorMessage}</span>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" required placeholder="pierredupont@gmail.com *" key="email" onChange={handleInputChange} title="Veuillez renseigner votre adresse mail" className={formErrors.firstname ? 'error' : ''} />
          <label htmlFor="message"></label>
          <textarea name="message" placeholder="Commentaires... *" id="message" rows="5" cols="33" required onChange={handleInputChange} className={formErrors.firstname ? 'error' : ''} />
          <button className={isFormValid} onClick={handleClickSubmit}>
            <p><input type="submit" value={buttonText} /></p>
            <span></span>
          </button>
        </form>
      </div>
      <div className="form-message"></div>
    </>
  );
};

export default FormTemplate;