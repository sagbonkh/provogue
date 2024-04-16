import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import axios from "axios";
import closeIcon from "../../assets/icons/close-24px.svg";
import "./ProjectRequestModal.scss";

const ProjectRequestModal = ({ isOpen, closeModal, clientId }) => {
  const [tailors, setTailors] = useState([]);
  const [formData, setFormData] = useState({
    client_id: clientId,
    service: "",
    description: "",
    tailor_id: "",
    end_date: "",
  });

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const response = await axios.get("http://localhost:5050/tailors");
        setTailors(response.data);
      } catch (error) {
        console.error("Error fetching tailors:", error);
      }
    };
    fetchTailors();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    const selectedDate = date ? date.format("YYYY-MM-DD") : "";
    setFormData({ ...formData, end_date: selectedDate });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5050/orders", formData);
      closeModal();
    } catch (error) {
      console.error("Error requesting project:", error);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add New Project Modal"
      appElement={document.getElementById("root")}
    >
      <img
        src={closeIcon}
        alt="close"
        className="close-icon"
        onClick={closeModal}
      />
      <h2 className="modal-title">Request a New Project</h2>
      <form onSubmit={handleSubmit} className="addForm">
        <div className="form-field">
          <label className="addForm__label" htmlFor="service">
            Service*
          </label>
          <input
            type="text"
            name="service"
            className="addForm__input"
            placeholder="Describe your request"
            value={formData.service}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label className="addForm__label" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="addForm__input"
            placeholder="Additional details here"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="tailor_id" className="addForm__label">
            Choose a Tailor*
          </label>
          <select
            name="tailor_id"
            className="addForm__input"
            value={formData.tailor_id}
            onChange={handleChange}
            required
          >
            <option value="">Select a Tailor</option>
            {tailors.map((tailor) => (
              <option key={tailor.id} value={tailor.id}>
                {tailor.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field addForm__datepicker">
          <label htmlFor="date" className="addForm__label">
            Due date
          </label>
          <Datetime
            value={formData.end_date ? new Date(formData.end_date) : null}
            onChange={handleDateChange}
            inputProps={{
              placeholder: "Select a date",
              className: "addForm__input",
            }}
          />
        </div>
        <button type="submit" className="addForm__btn">
          Make Request
        </button>
      </form>
    </ReactModal>
  );
};

export default ProjectRequestModal;
