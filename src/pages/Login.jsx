import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const userCredentail = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentail.user;
      console.log(user);
      setLoading(false);
      toast.success("Successfully logged in");
      navigate("/checkoOut");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <Helmet name="Login">
      {loading ? (
        <h2 className="fw-bold text-center">Loading....</h2>
      ) : (
        <div className="login">
          <h3 className="title_login text-center mt-5">Login</h3>
          <form className="form_login mb-5 mt-3" onSubmit={login}>
            <input
              type="text"
              placeholder="Enter your name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button className="secound_btn d-block mt-5 m-auto">Login</button>
            </div>
            <p className="mt-4 text-center">
              Dont't have an account?{" "}
              <Link className="text-white" to="/signup">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      )}
    </Helmet>
  );
};

export default Login;
