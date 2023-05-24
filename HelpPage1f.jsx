import React, { useState } from 'react';

function HelpPage1() {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (event.target.validity.valid) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  return (
    <>
      <header>
        <h1>Help Page</h1>
      </header>
      <div className="container">
        <h2>Ask a question</h2>
        <form onSubmit={handleSubmit}>
          <div className="step">
            <input
              type="text"
              id="question"
              name="question"
              className="form-input"
              placeholder="Your question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              required
            />
          </div>
          <div className="step">
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div className="step">
            <button type="submit" className="form-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default HelpPage1;
