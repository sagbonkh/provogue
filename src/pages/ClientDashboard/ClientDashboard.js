import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ClientDashboard.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import ProjectRequestModal from "../../components/ProjectRequestModal/ProjectRequestModal";

const ClientDashboard = () => {
  const { id } = useParams();
  const [activeProjects, setActiveProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [editingCell, setEditingCell] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/client/${id}/projects`
      );
      const projects = response.data;
      setActiveProjects(
        projects.filter((project) => project.status !== "Completed")
      );
      setCompletedProjects(
        projects.filter((project) => project.status === "Completed")
      );
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleCellClick = (rowIndex, colIndex, colName) => {
    setEditingCell({ rowIndex, colIndex, colName });
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
      const putProject = {
        name: updatedProject.project_name,
        description: updatedProject.description,
        status: updatedProject.status,
        start_date: updatedProject.start_date,
        end_date: updatedProject.end_date,
        cost: updatedProject.cost,
        payment_status: updatedProject.payment_status,
        tailor_id: 1, // Ensure these IDs are correctly managed or dynamically set
        client_id: 1, // Ensure these IDs are correctly managed or dynamically set
      };
      if (updatedProject.project_id) {
        await axios.put(
          `http://localhost:5050/projects/${updatedProject.project_id}`,
          putProject
        );
      } else {
        await axios.post(`http://localhost:5050/projects`, updatedProject);
      }
      fetchProjects(); // Re-fetch projects to refresh the table
      setEditingCell(null);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    fetchProjects(); // Re-fetch projects after modal has been closed
  };

  const handleNewProject = () => {
    openModal();
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="tailor-page">
        <div className="tailor-page__main">
          <h1 className="dashboard__title">Active Projects</h1>
          <div className="subheader">
            <button className="dashboard__btn" onClick={handleNewProject}>
              REQUEST
            </button>
            <ProjectRequestModal
              isOpen={isModalOpen}
              closeModal={closeModal}
              clientId={id}
            />
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Description</th>
                  <th>Tailor</th>
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
                    {[
                      "project_name",
                      "description",
                      "tailor_name",
                      "cost",
                      "start_date",
                      "end_date",
                      "payment_status",
                      "status",
                    ].map((col, colIndex) => (
                      <td
                        onClick={() => handleCellClick(rowIndex, colIndex, col)}
                        key={colIndex}
                      >
                        {editingCell &&
                        editingCell.rowIndex === rowIndex &&
                        editingCell.colIndex === colIndex ? (
                          col === "status" || col === "payment_status" ? (
                            <select
                              name={col}
                              value={project[col]}
                              onChange={handleCellChange}
                              onBlur={() => saveCellEdit(rowIndex)}
                            >
                              {col === "status"
                                ? ["Completed", "In Progress", "Postponed"].map(
                                    (option) => (
                                      <option key={option} value={option}>
                                        {option}
                                      </option>
                                    )
                                  )
                                : ["Paid", "Pending", "Overdue"].map(
                                    (option) => (
                                      <option key={option} value={option}>
                                        {option}
                                      </option>
                                    )
                                  )}
                            </select>
                          ) : (
                            <input
                              type="text"
                              name={col}
                              value={project[col]}
                              onChange={handleCellChange}
                              onBlur={() => saveCellEdit(rowIndex)}
                            />
                          )
                        ) : (
                          <span>{project[col]}</span>
                        )}
                      </td>
                    ))}
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
                  <th>Tailor</th>
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
                    <td>{project.tailor_name}</td>
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
      <Footer />
    </div>
  );
};

export default ClientDashboard;
