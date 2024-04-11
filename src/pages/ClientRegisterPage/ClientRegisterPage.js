import { useState } from "react";
import "./ClientRegisterPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function ClientRegisterPage() {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Handler function to update the selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [isChecked, setIsChecked] = useState(false);

  // Handler function to toggle the checkbox status
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Header />
      <section className="register">
        <h1 className="register__title">Register Client</h1>
        <p className="register__text">Let's help your new client get set up </p>
        <div className="register__location">
          <p className="register__text">Provogue</p>
          <p className="register__text">May 05, 2020</p>
          <p className="register__text">9:00 AM - 1:00 PM</p>
        </div>
        <form className="client">
          <label htmlFor="your-name" className="client__label">
            Full name *
          </label>
          <input
            placeholder="Your name"
            name="your-name"
            className="client__input"
          ></input>
          <label htmlFor="email" className="client__label">
            Email *
          </label>
          <input
            placeholder="Your email"
            name="email"
            className="client__input"
          ></input>
          <label htmlFor="phone" className="client__label">
            Phone number *
          </label>
          <input
            placeholder="Your phone number"
            name="phone"
            className="client__input"
          ></input>
          <label htmlFor="birthdate" className="client__label">
            Date of birth *
          </label>
          <input
            placeholder="Your date of birth"
            name="birthdate"
            className="client__input"
          ></input>
          <label htmlFor="gender" className="client__label">
            Gender *
          </label>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            name="gender"
            className="client__dropdown"
          >
            <option value="" className="client__option">
              Select your gender
            </option>
            <option value="male" className="client__option">
              Male
            </option>
            <option value="female" className="client__option">
              Female
            </option>
            <option value="other" className="client__option">
              Other
            </option>
            <option value="other" className="client__option">
              Prefer not to say
            </option>
          </select>
          <div>
            <label className="client__label">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              I agree to the <a href="">terms and conditions</a>*
            </label>
          </div>
          <button className="client__btn">Submit</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
export default ClientRegisterPage;
