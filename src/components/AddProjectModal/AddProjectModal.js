import React, { useState } from "react";
import ReactModal from "react-modal";
import "./AddProjectModal.scss";

const AddProjectModal = ({ isOpen, closeModal }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cost: "",
    start_date: "",
    end_date: "",
    payment_status: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    closeModal();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add New Project Modal"
      appElement={document.getElementById("root")}
    >
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project Name</label>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
        />
        <label>Cost</label>
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
        />
        {/* Add more input fields for other project details */}
        <button type="submit">Add Project</button>
      </form>
      <button onClick={closeModal}>Close Modal</button>
    </ReactModal>
  );
};

export default AddProjectModal;
