import { useState } from "react";
import "./FAQ.css";

function FAQ() {

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply click the WhatsApp Order button and send us your requirement."
    },
    {
      question: "Do you deliver across India?",
      answer: "Yes. Delivery is available across India. Shipping charges depend on your location."
    },
    {
      question: "Which sizes are available?",
      answer: "Pain Relief Oil and Hair Oil are available in 100 ml and 500 ml. Stress Relief Oil is available in 100 ml."
    },
    {
      question: "Are these Ayurvedic products?",
      answer: "Yes, our products are prepared using traditional Ayurvedic ingredients."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq" id="faq">

      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (

        <div className="faq-item" key={index}>

          <button
            className="faq-question"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            {faq.question}
          </button>

          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}

        </div>

      ))}

    </section>
  );
}

export default FAQ;