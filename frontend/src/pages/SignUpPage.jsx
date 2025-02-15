import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useAuthStore } from "../store/useAuthStore.js";

const Signup = () => {
  const [role, setRole] = useState(""); // User role (Doctor or Patient)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    experience: "",
    degree: "",
    discipline: "",
    age: "",
    phoneNumber: "",
  });

  const {signup,isSigningUp} = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // signup(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", { ...formData, role });
    signup({...formData,role});

    // Send formData & role to backend
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-5"
        style={{ width: "600px", borderRadius: "10px" }}
      >
        <h2 className="text-center fw-bold mb-4">Sign Up</h2>

        {/* Role Selection */}
        <div className="mb-4 text-center">
          <label className="form-label fw-semibold">Select Role:</label>
          <div className="d-flex justify-content-center gap-3">
            <button
              type="button"
              className={`btn ${role === "Doctor" ? "btn-primary" : "btn-outline-primary"} px-5 py-2 rounded-pill fw-bold`}
              onClick={() => setRole("Doctor")}
            >
              Doctor
            </button>
            <button
              type="button"
              className={`btn ${role === "Patient" ? "btn-success" : "btn-outline-success"} px-5 py-2 rounded-pill fw-bold`}
              onClick={() => setRole("Patient")}
            >
              Patient
            </button>
          </div>
        </div>

        <form>
          {/* Common Fields */}
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control form-control-lg"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control form-control-lg"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control form-control-lg"
              required
            />
          </div>

          {/* Doctor-Specific Fields */}
          {role === "Doctor" && (
            <>
              <div className="mb-3">
                <input
                  type="number"
                  name="experience"
                  placeholder="Experience (Years)"
                  value={formData.experience}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="discipline"
                  placeholder="Specialization"
                  value={formData.discipline}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  required
                />
              </div>
            </>
          )}

          {/* Patient-Specific Fields */}
          {role === "Patient" && (
            <>
              <div className="mb-3">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill fw-bold" onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
