import { CloseRounded, Visibility, VisibilityOff } from "@mui/icons-material"; // Importing icons for the close button and password visibility toggle
import React, { useState } from "react"; // Importing React and useState for component creation and state management
import styled from "styled-components"; // Importing styled-components for styling

// Styled component for the container
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px; // Gap between elements
`;

// Styled component for the label
const Label = styled.label`
  font-size: 12px; // Font size
  color: ${({ theme }) => theme.text_primary}; // Text color based on theme
  padding: 0px 4px; // Padding
  ${({ error, theme }) =>
    error &&
    `
    color: ${theme.red}; // If there's an error, set the color to red
  `}
  ${({ small }) =>
    small &&
    `
    font-size: 8px; // If small prop is true, reduce font size
  `}
  ${({ popup, theme }) =>
    popup &&
    `
  color: ${theme.popup_text_secondary}; // If popup prop is true, set color to popup text color
  `}
`;

// Styled component for the outlined input
const OutlinedInput = styled.div`
  border-radius: 8px; // Border radius
  border: 0.5px solid ${({ theme }) => theme.text_secondary}; // Border color
  background-color: transparent; // Transparent background
  color: ${({ theme }) => theme.text_primary}; // Text color
  outline: none; // Remove outline
  padding: 16px; // Padding
  display: flex;
  align-items: center; // Align items center
  gap: 12px; // Gap between elements
  &:focus-within {
    border-color: ${({ theme }) => theme.secondary}; // Border color on focus
  }
  ${({ error, theme }) =>
    error &&
    `
    border-color: ${theme.red}; // Border color if there's an error
  `}

  ${({ chipableInput, height, theme }) =>
    chipableInput &&
    `
    background: ${theme.card}; // Background color
    flex-direction: column; // Flex direction
    align-items: flex-start; // Align items to start
    gap: 8px; // Gap between elements
    min-height: ${height} // Minimum height
  `}

  ${({ small }) =>
    small &&
    `
    border-radius: 6px; // Border radius
    padding: 8px 10px; // Padding
  `}

  ${({ popup, theme }) =>
    popup &&
    `
  color: ${theme.popup_text_secondary}; // Text color
  border: 0.5px solid ${theme.popup_text_secondary + 60}; // Border color
  `}
`;

// Styled component for the input element
const Input = styled.input`
  width: 100%; // Full width
  font-size: 14px; // Font size
  outline: none; // Remove outline
  border: none; // Remove border
  background-color: transparent; // Transparent background
  color: ${({ theme }) => theme.text_primary}; // Text color
  &:focus {
    outline: none; // Remove outline on focus
  }
  ${({ small }) =>
    small &&
    `
    font-size: 12px; // Reduce font size if small prop is true
  `}

  ${({ popup, theme }) =>
    popup &&
    `
  color: ${theme.popup_text_secondary}; // Text color for popup
  `}
`;

// Styled component for displaying error message
const Error = styled.p`
  font-size: 12px; // Font size
  margin: 0px 4px; // Margin
  color: ${({ theme }) => theme.red}; // Text color for error message
  ${({ small }) =>
    small &&
    `
    font-size: 8px; // Reduce font size if small prop is true
  `}
`;

// Styled component for the chip wrapper
const ChipWrapper = styled.div`
  display: flex; // Flex display
  flex-wrap: wrap; // Wrap elements
  gap: 6px; // Gap between elements
`;

// Styled component for the chip
const Chip = styled.div`
  padding: 5px 10px; // Padding
  border-radius: 8px; // Border radius
  background: ${({ theme }) => theme.primary + 10}; // Background color
  color: ${({ theme }) => theme.primary}; // Text color
  font-size: 12px; // Font size
  display: flex; // Flex display
  align-items: center; // Align items center
  gap: 4px; // Gap between elements
  cursor: pointer; // Cursor pointer
  transition: all 0.3s ease; // Transition effect
`;

// TextInput functional component
const TextInput = ({
  label, // Label for input
  placeholder, // Placeholder text
  name, // Name attribute for input
  value, // Value of input
  error, // Error message
  handelChange, // Function to handle input change
  textArea, // Boolean indicating if input is a text area
  rows, // Number of rows for text area
  columns, // Number of columns for text area
  chipableInput, // Boolean indicating if input is chipable
  chipableArray, // Array of chips
  removeChip, // Function to remove chip
  height, // Height of the chipable input
  small, // Boolean indicating if input is small
  popup, // Boolean indicating if input is for a popup
  password, // Boolean indicating if input is for a password
}) => {
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  return (
    <Container small={small}>
      <Label small={small} popup={popup} error={error}>
        {label}
      </Label>
      <OutlinedInput
        small={small}
        popup={popup}
        error={error}
        chipableInput={chipableInput}
        height={height}
      >
        {chipableInput ? (
          // Render chipable input
          <ChipWrapper>
            {chipableArray.map((chip, index) => (
              // Map over chipableArray to render chips
              <Chip key={index}>
                <span>{chip}</span> {/* Chip text */}
                <CloseRounded // Close button to remove chip
                  sx={{ fontSize: "14px" }}
                  onClick={() => removeChip(name, index)}
                />
              </Chip>
            ))}
            {/* Input field for chipable input */}
            <Input
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={(e) => handelChange(e)}
            />
          </ChipWrapper>
        ) : (
          // Render regular input
          <>
            {/* Input field */}
            <Input
              popup={popup}
              small={small}
              as={textArea ? "textarea" : "input"} // Render as text area if textArea prop is true
              name={name}
              rows={rows}
              columns={columns}
              placeholder={placeholder}
              value={value}
              onChange={(e) => handelChange(e)}
              type={password && !showPassword ? "password" : "text"} // Show password if showPassword state is true
            />
            {/* Password visibility toggle */}
            {password && (
              <>
                {showPassword ? (
                  // If showPassword is true, show visibility off icon
                  <>
                    <Visibility onClick={() => setShowPassword(false)} />
                  </>
                ) : (
                  // If showPassword is false, show visibility on icon
                  <>
                    <VisibilityOff onClick={() => setShowPassword(true)} />
                  </>
                )}
              </>
            )}
          </>
        )}
      </OutlinedInput>
      {/* Display error message if there's an error */}
      {error && (
        <Error small={small} popup={popup}>
          {error}
        </Error>
      )}
    </Container>
  );
};

export default TextInput; // Export TextInput component

