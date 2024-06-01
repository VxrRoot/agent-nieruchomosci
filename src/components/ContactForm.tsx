import React from "react";

const ContactForm = () => {
  return (
    <div className="pt-10 flex flex-col lg:flex-row">
      <div className="basis-1/2">
        <p className="lg:pr-14">
          Jeśli masz jakiekolwiek pytania dotyczące kupna, sprzedaży czy wynajmu
          nieruchomości, jestem tutaj, aby Ci pomóc. Moje doświadczenie i wiedza
          o rynku nieruchomości pozwolą nam wspólnie znaleźć najlepsze
          rozwiązania, dostosowane do Twoich potrzeb i oczekiwań.
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
