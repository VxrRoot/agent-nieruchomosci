import React from "react";

const ContactForm = () => {
  return (
    <div className="py-10 flex flex-col lg:flex-row">
      <div className="basis-1/2">
        <p>
          Masz pytania dotyczące nieruchomości? Skontaktuj się ze mną! Wspólnie
          zrealizujemy Twoje cele
        </p>
      </div>
      <form className="basis-1/2 lg:px-10">
        <input
          type="text"
          name="Imię"
          placeholder="Imię"
          className="py-2 mb-4 px-4 w-full border-black border-2 outline-none"
        />
        <input
          type="text"
          name="Email"
          placeholder="Email"
          className="py-2 px-4 mb-4 w-full border-black border-2 outline-none"
        />
        <textarea
          name="Wiadomość"
          placeholder="Wiadomość"
          className="py-2 px-4 mb-4 w-full border-black border-2 outline-none"
        />
        <button className="bg-black text-white py-2 px-8">Wyślij</button>
      </form>
    </div>
  );
};

export default ContactForm;
