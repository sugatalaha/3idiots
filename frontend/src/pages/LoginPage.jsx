import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";  

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");  
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ ...formData, role });
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-3">Login</h2>

        {/* Role Selection */}
        <div className="mb-3 text-center">
          <label className="form-label">Select Role:</label>
          <div className="d-flex justify-content-center gap-2">
            <button
              type="button"
              className={`btn ${role === "Doctor" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setRole("Doctor")}
            >
              Doctor
            </button>
            <button
              type="button"
              className={`btn ${role === "Patient" ? "btn-success" : "btn-outline-success"}`}
              onClick={() => setRole("Patient")}
            >
              Patient
            </button>
          </div>
        </div>

        {role && (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <Mail className="h-5 w-5" />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <Lock className="h-5 w-5" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* <button type="submit" className="btn btn-primary w-100" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button> */}
            <button class="btn btn-primary w-100 py-2 rounded-pill shadow-lg position-relative">
                    <span class="spinner-border spinner-border-sm me-2 d-none" id="loadingSpinner"></span>
                    <strong>Sign In</strong>
            </button>
          </form>
        )}

        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary text-decoration-none">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
