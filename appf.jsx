import React from 'react';
import './style.css'; // import your CSS file

function GreenBin() {
  return (
    <div>
      <header>
        <h1>GreenBin</h1>
      </header>

      <nav>
        <div className="logo"></div>
        <div>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="help.html">Help</a>
          <a href="help2.html">Contact</a>
        </div>
      </nav>

      <main>
        <section>
          <h2>About Us</h2>
          <p>GreenBin is a mobile app designed to help people recycle more effectively and reduce their environmental impact.</p>
          <p>Our app features:</p>
          <ul>
            <li>A recycling guide with information on what materials can be recycled and where to recycle them</li>
            <li>A search feature to help you find recycling centers near you</li>
            <li>A reminder system to help you remember to recycle on a regular basis</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, please don't hesitate to contact us. We're always happy to hear from our users!</p>
          <p>You can reach us at:</p>
          <ul>
            <li>Email: info@GreenBinapp.com</li>
            <li>Phone: 555-555-5555</li>
            <li>Address: 123 Main St, Anytown USA</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

function AppFeatures() {
  return (
    <section>
      <h2>Web app features</h2>
      <ul>
        <li>
          Barcode scanner: The app has a barcode scanner that recognizes the products you purchase and provides information on how to dispose of the packaging
        </li>
        <li>
          Image recognition: The app uses image recognition technology to identify the type of waste you are trying to dispose of and provide recommendations on which bin to use
        </li>
        <li>
          Personalized recommendations: Based on the type of waste you typically dispose of, the app provides personalized recommendations on how to reduce your waste and recycle more effectively
        </li>
        <li>
          Tutorials and guides: The app includes tutorials and guides on topics like composting, reducing food waste, and proper recycling techniques
        </li>
        <li>
          Waste tracking: The app includes a feature that allows you to track the amount and type of waste you generate over time, so you can monitor your progress and identify areas for improvement
        </li>
        <li>
          Location-based services: The app uses location-based services to provide information on recycling centers and drop-off locations near you
        </li>
        <li>
          Community engagement: The app includes a feature that allows users to connect with other environmentally conscious individuals in their community, share tips and advice, and organize events focused on waste reduction and recycling
        </li>
      </ul>
    </section>
  );
}

function HowItWorks() {
  return (
    <section>
      <h2>How It Works</h2>
      <p>Using our app is easy! Simply follow these steps:</p>
      <ol>
        <li>
          Install the app: First, download and install the app on your smartphone. The app is available on both iOS and Android platforms
        </li>
        <li>
          Scan your waste: When you have waste to dispose of, simply launch the app and use your phone's camera to scan the waste. The app will use barcode scanning or image recognition technology to identify the type of waste and provide recommendations on how to dispose of it
        </li>
        <li>
          Follow the recommendations: Once the app has identified the type of waste, it will provide recommendations on which bin to use or how to properly dispose of the waste. Follow the recommendations to ensure that your waste is disposed of correctly and reduce the amount of waste that ends up in landfills
        </li>
        <li>
          Learn more: If you're interested in learning more about solid waste management, the app includes tutorials and guides on topics like composting, reducing food waste, and proper recycling techniques. You can access these resources at any time and learn how to reduce your environmental impact
        </li>
        <li>
          Personalized recommendations: As you use the app more and dispose of your waste correctly, the app will provide personalized recommendations on how to further reduce your waste and recycle more effectively. These recommendations are tailored to your individual waste disposal habits and can help you make a bigger impact on the environment
        </li>
      </ol>
      <p>By using our solid waste management app, you can take a step towards a more sustainable future by reducing your environmental impact and properly disposing of your waste.</p>
      <p>It's that simple!</p>
    </section>
  );
}


  function ContactUs() {
      return (
        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, please don't hesitate to contact us. We're always happy to hear from our users!</p>
          <p>You can reach us at:</p>
          <ul>
            <li>Email: info@GreenBinapp.com</li>
            <li>Phone: 555-555-5555</li>
            <li>Address: 123 Main St, Anytown USA</li>
          </ul>
        </section>
      );
    }




export default GreenBin;
