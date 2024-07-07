import React, { useState } from "react"; // Import React and useState for component creation and state management
import styled from "styled-components"; // Import styled-components for styling
import LogoImage from "../utils/Images/Logo.jpg"; // Import logo image
import AuthImage from "../utils/Images/AuthImage.jpg"; // Import authentication image
import SignIn from "../components/SignIn"; // Import SignIn component
import SignUp from "../components/SignUp"; // Import SignUp component

// Styled component for the container
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg}; // Background color based on theme
  @media (max-width: 700px) {
    flex-direction: column; // Change flex direction to column on smaller screens
  }
`;

// Styled component for the left section
const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none; // Hide left section on smaller screens
  }
`;

// Styled component for the logo image
const Logo = styled.img`
  position: absolute;
  width: 70px;
  top: 40px;
  left: 60px;
  z-index: 10; // Set z-index to keep the logo above other elements
`;

// Styled component for the background image
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover; // Cover the entire container with the image
`;

// Styled component for the right section
const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px; // Padding around the content
  gap: 16px; // Gap between elements
  align-items: center; // Center align items horizontally
  justify-content: center; // Center align items vertically
`;

// Styled component for text
const Text = styled.div`
  font-size: 16px; // Font size
  text-align: center; // Center align text
  color: ${({ theme }) => theme.text_secondary}; // Text color based on theme
  margin-top: 16px; // Top margin
  @media (max-width: 400px) {
    font-size: 14px; // Reduce font size on smaller screens
  }
`;

// Styled component for text button
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary}; // Text color based on theme
  cursor: pointer; // Set cursor to pointer on hover
  transition: all 0.3s ease; // Transition effect
  font-weight: 600; // Bold font weight
`;

// Authentication functional component
const Authentication = () => {
  const [login, setLogin] = useState(false); // State to manage login status
  return (
    <Container>
      {/* Left section with logo and background image */}
      <Left>
        <Logo src={LogoImage} /> {/* Logo image */}
        <Image src={AuthImage} /> {/* Background image */}
      </Left>
      {/* Right section with sign in or sign up form */}
      <Right>
        {!login ? ( // If not logged in, show sign in form
          <>
            <SignIn /> {/* SignIn component */}
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>SignUp</TextButton> {/* Button to switch to sign up form */}
            </Text>
          </>
        ) : (
          // If logged in, show sign up form
          <>
            <SignUp /> {/* SignUp component */}
            <Text>
              Already have an account?{" "}
              <TextButton onClick={() => setLogin(false)}>SignIn</TextButton> {/* Button to switch to sign in form */}
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication; // Export Authentication component
