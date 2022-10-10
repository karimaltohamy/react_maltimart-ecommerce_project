import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import "../styles/login.css";

const Login = () => {
  const [userName, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      console.log(user);

      setLoading(false);
      toast.success("Account Created");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("somthing went wrong");
    }
  };
  return (
    <Helmet name="Signup">
      {loading ? (
        <h2 className="fw-bold text-center">Loading....</h2>
      ) : (
        <div className="signup">
          <h3 className="title_login text-center mt-5">Signup</h3>
          <form className="form_login mb-5 mt-3" onSubmit={signup}>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <div>
              <button className="secound_btn d-block mt-5 m-auto">
                Create an Account
              </button>
            </div>
            <p className="mt-4 text-center">
              Aleardy have an account?{" "}
              <Link className="text-white" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      )}
    </Helmet>
  );
};

export default Login;
