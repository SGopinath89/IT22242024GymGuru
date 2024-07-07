import React, { useState } from "react"; // Importing React and useState for component creation and state management
import styled from "styled-components"; // Importing styled-components for styling
import TextInput from "./TextInput"; // Importing TextInput component
import Button from "./Button"; // Importing Button component
import { UserSignUp } from "../api"; // Importing UserSignUp function from API
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux
import { loginSuccess } from "../redux/reducers/userSlice"; // Importing loginSuccess action from userSlice

// Styled component for Container
const Container = styled.div`
  width: 100%;
  max-width: 500px; // Maximum width of the container
  display: flex;
  flex-direction: column;
  gap: 36px; // Gap between elements
`;

// Styled component for Title
const Title = styled.div`
  font-size: 30px; // Font size
  font-weight: 800; // Font weight
  color: ${({ theme }) => theme.text_primary}; // Text color based on theme
`;

// Styled component for Span
const Span = styled.div`
  font-size: 16px; // Font size
  font-weight: 400; // Font weight
  color: ${({ theme }) => theme.text_secondary + 90}; // Text color based on theme
`;

// SignUp functional component
const SignUp = () => {
  const dispatch = useDispatch(); // useDispatch hook for dispatching actions
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [buttonDisabled, setButtonDisabled] = useState(false); // State for button disabled state
  const [name, setName] = useState(""); // State for name input
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input

  // Function to validate input fields
  const validateInputs = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  // Function to handle sign up
  const handelSignUp = async () => {
    setLoading(true); // Setting loading state to true
    setButtonDisabled(true); // Disabling the button
    if (validateInputs()) {
      await UserSignUp({ name, email, password }) // Calling UserSignUp function with name, email, and password
        .then((res) => {
          dispatch(loginSuccess(res.data)); // Dispatching loginSuccess action with user data
          alert("Account Created Success"); // Alerting user about successful account creation
          setLoading(false); // Setting loading state to false
          setButtonDisabled(false); // Enabling the button
        })
        .catch((err) => {
          alert(err.response.data.message); // Alerting user about error
          setLoading(false); // Setting loading state to false
          setButtonDisabled(false); // Enabling the button
        });
    }
  };

  return (
    <Container>
      <div>
        <Title>Create New Account 🏋</Title> {/* Title */}
        <Span>Please enter details to create a new account</Span> {/* Subtitle */}
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        {/* Name input */}
        <TextInput
          label="Full name"
          placeholder="Enter your full name"
          value={name}
          handelChange={(e) => setName(e.target.value)}
        />
        {/* Email input */}
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        {/* Password input */}
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
          value={password}
          handelChange={(e) => setPassword(e.target.value)}
        />
        {/* Sign up button */}
        <Button
          text="SignUp"
          onClick={handelSignUp}
          isLoading={loading}
          isDisabled={buttonDisabled}
        />
      </div>
    </Container>
  );
};

export default SignUp; // Exporting the SignUp component
