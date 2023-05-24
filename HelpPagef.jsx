import React from 'react';
import './styles.css';

function Popup() {
  return (
    <div className="popup">
      <h1>Welcome to our help page!</h1>
      <p>We're here to assist you with any questions you have about recycling with our app.</p>
      <button onClick={() => {document.querySelector('.popup').style.display = 'none';}}>Got it</button>
    </div>
  );
}

function FAQItem({question, answer}) {
  return (
    <div className="faq-item">
      <div className="faq-question">{question}</div>
      <div className="faq-answer">{answer}</div>
    </div>
  );
}

function HelpPage() {
  return (
    <div>
      <Popup />
      <header>
        <h1>Help Page</h1>
      </header>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <div className="faq-question">What types of materials can I recycle with this app?</div>
        <div className="faq-answer">The app can help you identify a wide range of materials that are commonly recyclable, including paper, cardboard, plastic bottles, glass bottles and jars, aluminum cans, and more.</div>
      </div>
      <div className="faq-item">
        <div className="faq-question">How do I use the app to identify what materials are recyclable?</div>
        <div className="faq-answer">To use the app, simply take a picture of the material you want to recycle and submit it to the app. The app will then analyze the image and provide information on whether the material is recyclable or not.</div>
      </div>
      <div className="faq-item">
        <div className="faq-question">What happens if I accidentally put non-recyclable materials in my recycling bin?</div>
        <div className="faq-answer">Unfortunately, non-recyclable materials can cause problems during the recycling process and may contaminate other recyclable materials. It's important to check with your local recycling guidelines to ensure you're only putting the correct materials in your recycling bin.</div>
      </div>
      <div className="faq-item">
        <div className="faq-question">Can I use this app to learn more about recycling in general?</div>
        <div className="faq-answer">Yes, the app includes a wealth of information on recycling in general, including tips for reducing waste, advice on how to recycle different materials, and details on the environmental benefits of recycling.</div>
      </div>
      <div className="faq-item">
        <div className="faq-question">Is there a limit to how many items I can identify for recycling with the app?</div>
        <div className="faq-answer">There is no limit to the number of items you can identify for recycling with the app - you can use it as often as you like!</div>
      </div>
      <div className="faq-item">
        <div className="faq-question">How do I report a recycling-related problem or issue through the app?</div>
        <div className="faq-answer">If you encounter a problem or issue related to recycling, you can report it through the app's customer support feature. Our team will do our best to assist you and address any concerns you may have.</div>
      </div>
    </div>
    </div>
  );
}

export default HelpPage;

