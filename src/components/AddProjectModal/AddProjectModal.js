import React, { useState } from "react";
import ReactModal from "react-modal";
import "./AddProjectModal.scss";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import close from "../../assets/icons/close-24px.svg";
import axios from "axios";

const AddProjectModal = ({ isOpen, closeModal, tailorId, fetchProjects }) => {
  const [formData, setFormData] = useState({
    tailor_id: tailorId,
    name: "",
    description: "",
    status: "In progress",
    cost: "",
    start_date: new Date().toISOString().slice(0, 10),
    end_date: "",
    payment_status: "Pending",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/projects", formData);
      closeModal();
      fetchProjects();
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleDateChange = (date) => {
    const selectedDate = date ? date.format("YYYY-MM-DD") : "";
    setFormData({ ...formData, end_date: selectedDate });
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add New Project Modal"
      appElement={document.getElementById("root")}
    >
      <img
        src={close}
        alt="close"
        className="close-icon"
        onClick={closeModal}
      />
      <h2 className="modal-title">Add New Project</h2>
      <form onSubmit={handleSubmit} className="addForm">
        <label className="addForm__label" htmlFor="name">
          Project Name*
        </label>
        <input
          type="text"
          name="name"
          className="addForm__input"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
        />
        <label className="addForm__label" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          name="description"
          className="addForm__input"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
        />
        <label className="addForm__label" htmlFor="cost">
          Cost
        </label>
        <input
          type="text"
          name="cost"
          className="addForm__input"
          placeholder="Project Cost"
          value={formData.cost}
          onChange={handleChange}
        />
        <div className="addForm__datepicker">
          <label htmlFor="date" className="addForm__label">
            Due date
          </label>
          <Datetime
            value={formData.end_date ? new Date(formData.end_date) : null}
            onChange={handleDateChange}
            name="date"
            inputProps={{
              placeholder: "Select a date",
              className: "addForm__input",
            }}
          />
        </div>
        <button type="submit" className="addForm__btn">
          Add Project
        </button>
      </form>
    </ReactModal>
  );
};

export default AddProjectModal;
