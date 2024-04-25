import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectRequest.scss";
import { useNavigate, useParams } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import close from "../../assets/icons/close-24px.svg";
import Sidebar from "../../components/Sidebar/Sidebar";

const ProjectRequest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [projectRequests, setProjectRequests] = useState([]);

  const [formData, setFormData] = useState({
    tailor_id: id,
    name: "",
    description: "",
    status: "In progress",
    cost: "$100",
    client_id: 1,
    start_date: new Date().toISOString().slice(0, 10),
    end_date: "",
    payment_status: "Pending",
  });

  useEffect(() => {
    fetchRequests();
  }, []);
  const fetchRequests = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/tailors/${id}/orders`
      );
      const pendingRequests = response.data.filter(
        (request) => request.status === "pending"
      );
      setProjectRequests(pendingRequests);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const onAccept = async (projectId) => {
    try {
      const projectToAccept = projectRequests.find(
        (project) => project.order_id === projectId
      );
      if (projectToAccept) {
        const updatedFormData = {
          ...formData,
          name: projectToAccept.client_name,
          description: projectToAccept.description,
          end_date: projectToAccept.due_date,
          client_id: projectToAccept.client_id,
        };

        await axios.put(`http://localhost:5050/orders/${projectId}`, {
          status: "accepted",
        });
        await axios.post("http://localhost:5050/projects", updatedFormData);
        fetchRequests();
        navigate(`/tailor/${id}`);
      }
    } catch (error) {
      console.error("Error accepting project:", error);
    }
  };

  const onReject = async (projectId) => {
    try {
      await axios.put(`http://localhost:5050/orders/${projectId}`, {
        status: "declined",
      });
      fetchRequests();
    } catch (error) {
      console.error("Error rejecting project:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="requestPage">
        <Sidebar />
        <div className="request-container">
          <h1 className="requestPage__title">Project Requests</h1>
          {projectRequests.length > 0 ? (
            projectRequests.map((project, index) => {
              return (
                <div key={index}>
                  <div className="singleRequest">
                    <h3 className="singleRequest__subheading">
                      {project.client_name}
                    </h3>
                    <p className="singleRequest__text">
                      <span className="singleRequest__bold">Phone:</span>{" "}
                      {project.client_phone}
                    </p>
                    <p className="singleRequest__text">
                      <span className="singleRequest__bold">Email:</span>{" "}
                      {project.client_email}
                    </p>
                    <p className="singleRequest__text">
                      <span className="singleRequest__bold">Service:</span>{" "}
                      {project.service}
                    </p>
                    <p className="singleRequest__text">
                      <span className="singleRequest__bold">Description:</span>{" "}
                      {project.description}
                    </p>
                    <p className="singleRequest__text">
                      <span className="singleRequest__bold">Due:</span>{" "}
                      {project.due_date}
                    </p>
                    <div className="button-div">
                      <button
                        className="button-div__btn"
                        onClick={() => onAccept(project.order_id)}
                      >
                        Accept
                      </button>
                      <img
                        src={close}
                        alt="close"
                        onClick={() => onReject(project.order_id)}
                        className="button-div__close-img"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="clientList__noClients">
              <p>You don't have any projects yet</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectRequest;
