import { CircularProgress } from "@mui/material"; // Importing CircularProgress from Material-UI
import React from "react"; // Importing React for component creation
import styled from "styled-components"; // Importing styled-components for styling

// Styled component for Button
const Button = styled.div`
  border-radius: 10px;
  color: white; // Text color
  font-size: 14px; // Font size
  cursor: pointer; // Cursor type
  transition: all 0.3s ease; // Transition effect
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px; // Gap between elements
  height: min-content; // Height based on content
  padding: 16px 26px; // Padding
  box-shadow: 1px 20px 35px 0px ${({ theme }) => theme.primary + 40}; // Box shadow
  border: 1px solid ${({ theme }) => theme.primary}; // Border
  @media (max-width: 600px) {
    padding: 8px 12px; // Adjusting padding on smaller screens
  }

  ${({ type, theme }) =>
    type === "secondary"
      ? `
  background: ${theme.secondary}; // Background color for secondary type
  border: 1px solid ${({ theme }) => theme.secondary}; // Border color for secondary type
  `
      : `
  background: ${theme.primary}; // Background color for primary type
`}

  ${({ isDisabled }) =>
    isDisabled &&
    `
  opacity: 0.8; // Reduced opacity
  cursor: not-allowed; // Disabled cursor

  `}
  ${({ isLoading }) =>
    isLoading &&
    `
    opacity: 0.8; // Reduced opacity
  cursor: not-allowed; // Disabled cursor
`}
${({ flex }) =>
    flex &&
    `
    flex: 1; // Flexible width
`}

${({ small }) =>
    small &&
    `
padding: 10px 28px; // Adjusting padding for small size
`}
  ${({ outlined, theme }) =>
    outlined &&
    `
background: transparent; // Transparent background
color: ${theme.primary}; // Text color based on theme
  box-shadow: none; // No box shadow
`}
  ${({ full }) =>
    full &&
    `
  width: 100%; // Full width button
`}
`;

// Functional component for Button
const CustomButton = ({
  text,
  isLoading,
  isDisabled,
  rightIcon,
  leftIcon,
  type,
  onClick,
  flex,
  small,
  outlined,
  full,
}) => {
  return (
    <Button
      onClick={() => !isDisabled && !isLoading && onClick()} // onClick event handler with conditions to prevent action during loading or when disabled
      isDisabled={isDisabled} // Disabled state for the button
      type={type} // Button type
      isLoading={isLoading} // Loading state for the button
      flex={flex} // Flexible width
      small={small} // Small size button
      outlined={outlined} // Outlined style
      full={full} // Full width button
    >
      {isLoading && ( // Displaying CircularProgress when loading
        <CircularProgress
          style={{ width: "18px", height: "18px", color: "inherit" }} // Styling for CircularProgress
        />
      )}
      {leftIcon} {/* Left icon */}
      {text} {/* Button text */}
      {isLoading && <> . . .</>} {/* Loading indicator */}
      {rightIcon} {/* Right icon */}
    </Button>
  );
};

export default CustomButton; // Exporting the component for use in other files

