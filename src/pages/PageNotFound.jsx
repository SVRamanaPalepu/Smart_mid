import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PageNotFound = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">404</h1>
        <p className="subtitle">Oops! The page you're looking for doesn't exist.</p>

        <div className="tv">
          <div className="screen">
            <span>NOT FOUND</span>
          </div>
        </div>

        <button
          className="home-btn"
          onClick={() => navigate(user ? "/home" : "/signin")}
        >
          ← Back to Home
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5e9d6, #f8d9a0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;

  .container {
    text-align: center;
    padding: 20px;
  }

  .title {
    font-size: 6rem;
    font-weight: 900;
    color: #d36604;
    margin-bottom: 0.2em;
  }

  .subtitle {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 2em;
  }

  .tv {
    width: 260px;
    height: 150px;
    margin: 0 auto 2em;
    border-radius: 15px;
    background: #d36604;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #1d0e01;
    box-shadow: inset 4px 4px #e69635;
  }

  .screen {
    width: 90%;
    height: 80%;
    background: black;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    letter-spacing: 2px;
    border-radius: 10px;
    animation: flicker 0.3s infinite alternate;
  }

  @keyframes flicker {
    from {
      opacity: 0.7;
    }
    to {
      opacity: 1;
    }
  }

  .home-btn {
    padding: 12px 28px;
    font-size: 1rem;
    background: #d36604;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .home-btn:hover {
    background: #a94e02;
    transform: translateY(-3px);
  }

  @media (max-width: 500px) {
    .title {
      font-size: 4rem;
    }
    .tv {
      width: 200px;
      height: 120px;
    }
  }
`;

export default PageNotFound;