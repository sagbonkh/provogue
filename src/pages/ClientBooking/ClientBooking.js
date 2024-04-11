import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css"; // Import CSS for styling
import "./ClientBooking.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function ClientBooking() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Header />
      <section className="booking">
        <div className="booking__sect">
          <h1 className="booking__title">Let Us Measure You</h1>
          <p className="booking__text">
            Have doubts about measurements, sizing, or our Awesome service? Let
            us arrange to meet up.
          </p>
        </div>
        <form className="booking-form">
          {/* Add the date picker */}
          <div className="booking-form__datepicker">
            <label htmlFor="date" className="booking-form__label">
              Select a date *
            </label>
            <Datetime
              value={selectedDate}
              onChange={handleDateChange}
              inputProps={{
                placeholder: "Select a date",
                className: "booking-form__input",
              }}
            />
          </div>
          {/* Rest of the form inputs */}
          <label htmlFor="your-name" className="booking-form__label">
            Full name *
          </label>
          <input
            placeholder="Your name"
            name="your-name"
            className="booking-form__input"
          />
          <label htmlFor="email" className="booking-form__label">
            Email *
          </label>
          <input
            placeholder="Your email"
            name="email"
            className="booking-form__input"
          />
          <label htmlFor="phone" className="booking-form__label">
            Phone number *
          </label>
          <input
            placeholder="Your phone number"
            name="phone"
            className="booking-form__input"
          />
          <label htmlFor="message" className="booking-form__label">
            Message
          </label>
          <textarea
            className="booking-form__message"
            name="message"
            placeholder="Your message"
          ></textarea>
          <div className="booking-form__btn-div">
            <button className="booking-form__btn">BOOK NOW</button>
            <p className="booking-form__subtext">
              Looking Forward to meeting you
            </p>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default ClientBooking;
