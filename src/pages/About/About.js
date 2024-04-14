import React from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-page">
        <div className="about-page__container">
          <h2 className="about-page__title">
            About <span className="about-page__provogue">Provogue</span>
          </h2>
          <h3 className="about-page__subtitle">
            Provogue: Provoke. En Vogue. Provogue.
          </h3>
          <p className="about-page__text">
            Welcome to Provogue, the cutting-edge project management platform
            designed specifically for the unique needs of tailors and their
            clients. At Provogue, we blend functionality with style, providing
            an elegant solution that helps fashion professionals manage their
            workflows and client interactions seamlessly. With Provogue, provoke
            excellence in your craft and stay en vogue in a competitive market.
          </p>
          <h3 className="about-page__subtitle">Tailor Features:</h3>
          <ul>
            <li className="about-page__text">
              Client Management: Oversee client bookings, appointments, and
              projects all from one centralized platform. Provogue ensures a
              seamless management experience, helping you keep your operations
              smooth and professional.
            </li>
            <li className="about-page__text">
              Invoices: Create polished, branded invoices with ease. Our
              streamlined invoicing system allows you to get paid faster and
              manage your finances efficiently.
            </li>
            <li className="about-page__text">
              Contracts: Send professional contracts for electronic signature
              effortlessly. With Provogue, your clients can sign securely from
              any device, ensuring flexibility and convenience for both parties.
            </li>
            <li className="about-page__text">
              Quotes: Generate and send detailed quotes easily, providing clear
              and professional financial communications to your clients,
              enhancing trust and transparency.
            </li>
          </ul>
          <h3 className="about-page__subtitle">Client Features:</h3>
          <ul>
            <li className="about-page__text">
              Service Requests: Clients can easily submit detailed service
              requests, providing tailors with all the necessary specifications
              to begin projects without delay.
            </li>
            <li className="about-page__text">
              Project Tracking: Monitor your projects in real-time. Provogue
              offers complete transparency, giving clients peace of mind and
              ensuring they are always updated on their project's progress.
            </li>
            <li className="about-page__text">
              Communication Tools: Maintain constant communication with your
              tailor using Provogue’s built-in messaging and collaboration
              tools, ensuring that all parties are aligned and informed.
            </li>
            <li className="about-page__text">
              Feedback: After project completion, clients can provide feedback
              and reviews, crucial for tailors looking to improve their services
              and client satisfaction continuously.
            </li>
          </ul>
          <p className="about-page__text">
            Provogue is more than just a project management tool—it's a partner
            in fashioning your business's success, ensuring that every stitch
            and seam is accounted for. Embrace Provogue, where every feature is
            tailored to make management as stylish as the fashion you create.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
