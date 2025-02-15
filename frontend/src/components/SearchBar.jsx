import React, { useState, useCallback } from "react";
import {axiosInstance} from "../lib/axios.js";
import debounce from "lodash.debounce";
import { useChatStore } from "../store/useChatStore.js";


const Searchbar = () => {
  const { users, selectedUser, getUsers, setSelectedUser, isUserLoading } = useChatStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    discipline: "",
    experience: "",
    degree: "",
  });

  const performSearch = async (query, filters) => {
    if (
      !query.trim() &&
      !filters.discipline &&
      !filters.experience &&
      !filters.degree
    ) {
      setDoctors([]);
      return;
    }

    setLoading(true);
    try {
      const { data } = await axiosInstance.get(
        `/search/doctor?name=${query}&discipline=${filters.discipline}&experience=${filters.experience}&degree=${filters.degree}`
      );

      console.log(data);
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
    setLoading(false);
  };

  const debouncedSearch = useCallback(
    debounce((query, filters) => performSearch(query, filters), 500),
    []
  );

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    debouncedSearch(query, filters);
  };

  const handleDoctorClick = async (doctorId) => {
    try {
      const { data } = await axiosInstance.post(`/messages/user/makechat`, {
        userId: doctorId,
      });
      console.log("Chat created or retrieved:", data);
      await getUsers();
      // Handle UI navigation to chat
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [name]: value };
      performSearch(searchQuery, newFilters); // Immediate search update
      debouncedSearch(searchQuery, newFilters); // Debounced for smoother updates
      return newFilters;
    });
  };

  return (
    <div
      style={{
        padding: "10px",
        maxWidth: "400px",
        margin: "auto",
        position: "relative",
      }}
    >
      <input
        type="text"
        placeholder="Search for doctors..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{
          width: "95%",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <span
        onClick={() => setShowFilters(!showFilters)}
        style={{
          display: "block",
          textAlign: "right",
          fontSize: "12px",
          color: "blue",
          cursor: "pointer",
          marginTop: "5px",
        }}
      >
        Filter ▼
      </span>
      {showFilters && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "5px",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <label>
            Discipline:
            <input
              type="text"
              name="discipline"
              value={filters.discipline}
              onChange={handleFilterChange}
              style={{ width: "100%", marginTop: "5px" }}
            />
          </label>
          <label>
            Experience:
            <input
              type="number"
              name="experience"
              value={filters.experience}
              onChange={handleFilterChange}
              style={{ width: "100%", marginTop: "5px" }}
            />
          </label>
          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={filters.degree}
              onChange={handleFilterChange}
              style={{ width: "100%", marginTop: "5px" }}
            />
          </label>
        </div>
      )}
      {loading && <p>Loading...</p>}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
        {doctors.map((doctor) => (
          <li
            key={doctor._id}
            onClick={() => handleDoctorClick(doctor._id)}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
              cursor: "pointer",
            }}
          >
            {doctor.name} - {doctor.discipline}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;