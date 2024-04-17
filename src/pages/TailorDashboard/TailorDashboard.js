import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TailorDashboard.scss";
// import searchIcon from "../../assets/icons/search-24px.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddProjectModal from "../../components/AddProjectModal/AddProjectModal";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";

function TailorDashboard() {
  const { id } = useParams();
  const [activeProjects, setActiveProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [editingCell, setEditingCell] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/tailors/${id}/projects`
      );
      const projects = response.data;
      console.log("projects", projects);
      const active = projects.filter(
        (project) => project.status !== "Completed"
      );
      const completed = projects.filter(
        (project) => project.status === "Completed"
      );
      setActiveProjects(active);
      setCompletedProjects(completed);
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
          `http://localhost:5050/projects/${updatedProject.id}`,
          updatedProject
        );
      } else {
        await axios.post(`http://localhost:5050/projects`, updatedProject);
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
      <div className="tailor-page">
        <Sidebar />
        <div className="tailor-page__main">
          <h1 className="dashboard__title">Active Projects</h1>
          <div className="subheader">
            <button className="dashboard__btn" onClick={handleNewProject}>
              NEW PROJECT
            </button>
            <AddProjectModal
              isOpen={isModalOpen}
              closeModal={closeModal}
              tailorId={id}
              fetchProjects={fetchProjects}
            />
            {/* <div className="dashboard__search">
          <img src={searchIcon} alt="search" className="search-icon" />
          <p className="dashboard__text">Search</p>
        </div> */}
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Description</th>
                  <th>Client</th>
                  <th>Cost</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Payment Status</th>
                  <th>Status</th>
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
                          value={project.project_name}
                          onChange={handleCellChange}
                          onBlur={() => saveCellEdit(rowIndex)}
                        />
                      ) : (
                        <span>{project.project_name}</span>
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
                          name="client"
                          value={project.client_name}
                          onChange={handleCellChange}
                          onBlur={() => saveCellEdit(rowIndex)}
                        />
                      ) : (
                        <span>{project.client_name}</span>
                      )}
                    </td>
                    <td onClick={() => handleCellClick(rowIndex, 3)}>
                      {editingCell &&
                      editingCell.rowIndex === rowIndex &&
                      editingCell.colIndex === 3 ? (
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
                    <td onClick={() => handleCellClick(rowIndex, 4)}>
                      {editingCell &&
                      editingCell.rowIndex === rowIndex &&
                      editingCell.colIndex === 4 ? (
                        <input
                          type="text"
                          name="start_date"
                          value={project.start_date}
                          onChange={handleCellChange}
                          onBlur={() => saveCellEdit(rowIndex)}
                        />
                      ) : (
                        <span>{project.start_date}</span>
                      )}
                    </td>
                    <td onClick={() => handleCellClick(rowIndex, 5)}>
                      {editingCell &&
                      editingCell.rowIndex === rowIndex &&
                      editingCell.colIndex === 5 ? (
                        <input
                          type="text"
                          name="end_date"
                          value={project.end_date}
                          onChange={handleCellChange}
                          onBlur={() => saveCellEdit(rowIndex)}
                        />
                      ) : (
                        <span>{project.end_date}</span>
                      )}
                    </td>
                    <td onClick={() => handleCellClick(rowIndex, 6)}>
                      {editingCell &&
                      editingCell.rowIndex === rowIndex &&
                      editingCell.colIndex === 6 ? (
                        <input
                          type="text"
                          name="payment_status"
                          value={project.payment_status}
                          onChange={handleCellChange}
                          onBlur={() => saveCellEdit(rowIndex)}
                        />
                      ) : (
                        <span>{project.payment_status}</span>
                      )}
                    </td>
                    <td onClick={() => handleCellClick(rowIndex, 7)}>
                      {editingCell &&
                      editingCell.rowIndex === rowIndex &&
                      editingCell.colIndex === 7 ? (
                        <input
                          type="text"
                          name="status"
                          value={project.status}
                          onChange={handleCellChange}
                          onBlur={() => saveCellEdit(rowIndex)}
                        />
                      ) : (
                        <span>{project.status}</span>
                      )}
                    </td>
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
                  <th>Client</th>
                  <th>Cost</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Payment Status</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {completedProjects.map((project, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{project.project_name}</td>
                    <td>{project.description}</td>
                    <td>{project.client_name}</td>
                    <td>{project.cost}</td>
                    <td>{project.start_date}</td>
                    <td>{project.end_date}</td>
                    <td>{project.payment_status}</td>
                    <td>{project.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="footer-div">
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default TailorDashboard;
