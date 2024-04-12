import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TailorDashboard.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddProjectModal from "../../components/AddProjectModal/AddProjectModal";

function TailorDashboard({ tailorId }) {
  const [activeProjects, setActiveProjects] = useState([]);
  const [editingCell, setEditingCell] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/tailors/${tailorId}/projects`
      );
      const projects = response.data.filter(
        (project) => project.status !== "complete"
      );
      setActiveProjects(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleCellClick = (rowIndex, colIndex) => {
    setEditingCell({ rowIndex, colIndex });
  };

  const handleCellChange = (event) => {
    const { name, value } = event.target;
    const { rowIndex } = editingCell;
    const updatedProjects = [...activeProjects];
    updatedProjects[rowIndex][name] = value;
    setActiveProjects(updatedProjects);
  };

  const saveCellEdit = async (rowIndex) => {
    try {
      const updatedProject = activeProjects[rowIndex];
      if (updatedProject.id) {
        await axios.put(
          `http://localhost:8080/projects/${updatedProject.id}`,
          updatedProject
        );
      } else {
        await axios.post(`http://localhost:8080/projects`, updatedProject);
      }
      setEditingCell(null);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleNewProject = () => {
    openModal();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard">
      <Header />
      <h1 className="dashboard__title">Active Projects</h1>
      <div className="subheader">
        <button className="dashboard__btn" onClick={handleNewProject}>
          NEW PROJECT
        </button>
        <AddProjectModal isOpen={isModalOpen} closeModal={closeModal} />
        <div className="dashboard__search">
          <img src={searchIcon} alt="search" className="search-icon" />
          <p className="dashboard__text">Search</p>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {activeProjects.map((project, rowIndex) => (
              <tr key={rowIndex}>
                <td onClick={() => handleCellClick(rowIndex, 0)}>
                  {editingCell &&
                  editingCell.rowIndex === rowIndex &&
                  editingCell.colIndex === 0 ? (
                    <input
                      type="text"
                      name="name"
                      value={project.name}
                      onChange={handleCellChange}
                      onBlur={() => saveCellEdit(rowIndex)}
                    />
                  ) : (
                    <span>{project.name}</span>
                  )}
                </td>
                <td onClick={() => handleCellClick(rowIndex, 1)}>
                  {editingCell &&
                  editingCell.rowIndex === rowIndex &&
                  editingCell.colIndex === 1 ? (
                    <input
                      type="text"
                      name="description"
                      value={project.description}
                      onChange={handleCellChange}
                      onBlur={() => saveCellEdit(rowIndex)}
                    />
                  ) : (
                    <span>{project.description}</span>
                  )}
                </td>
                <td onClick={() => handleCellClick(rowIndex, 2)}>
                  {editingCell &&
                  editingCell.rowIndex === rowIndex &&
                  editingCell.colIndex === 2 ? (
                    <input
                      type="text"
                      name="cost"
                      value={project.cost}
                      onChange={handleCellChange}
                      onBlur={() => saveCellEdit(rowIndex)}
                    />
                  ) : (
                    <span>{project.cost}</span>
                  )}
                </td>
                <td>{project.start_date}</td>
                <td>{project.end_date}</td>
                <td>{project.payment_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="dashboard__subtitle">Completed Projects</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>{/* Display completed projects here */}</tbody>
        </table>
      </div>
      <div className="footer-div">
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default TailorDashboard;
