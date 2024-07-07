import React, { useState } from "react"; // Importing React and useState for component creation and state management
import styled from "styled-components"; // Importing styled-components for styling
import { Link as LinkR, NavLink } from "react-router-dom"; // Importing Link and NavLink for routing
import { MenuRounded } from "@mui/icons-material"; // Importing MenuRounded icon from Material-UI
import { Avatar } from "@mui/material"; // Importing Avatar component from Material-UI
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux
import { logout } from "../redux/reducers/userSlice"; // Importing logout action from userSlice

// Styled component for Nav container
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg}; // Background color based on theme
  height: 80px; // Height of the navigation bar
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem; // Font size
  position: sticky;
  top: 0;
  z-index: 10; // Z-index to keep it above other elements
  color: white; // Text color
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20}; // Border bottom with theme-based color
`;

// Styled component for NavContainer
const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px; // Maximum width of the navigation container
  padding: 0 24px; // Padding
  display: flex;
  gap: 14px; // Gap between elements
  align-items: center;
  justify-content: space-between;
  font-size: 1rem; // Font size
`;

// Styled component for Mobileicon
const Mobileicon = styled.div`
  color: ${({ theme }) => theme.text_primary}; // Icon color based on theme
  display: none;
  @media screen and (max-width: 768px) {
    display: flex; // Displaying the icon on smaller screens
    align-items: center;
  }
`;

// Styled component for NavItems
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px; // Gap between elements
  padding: 0 6px; // Padding
  list-style: none; // Removing default list styling

  @media screen and (max-width: 768px) {
    display: none; // Hiding nav items on smaller screens
  }
`;

// Styled component for Navlink
const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary}; // Text color based on theme
  font-weight: 500; // Font weight
  cursor: pointer; // Cursor type
  transition: all 1s slide-in; // Transition effect
  text-decoration: none; // Removing default underline
  &:hover {
    color: ${({ theme }) => theme.primary}; // Hover color based on theme
  }
  &.active {
    color: ${({ theme }) => theme.primary}; // Active color based on theme
    border-bottom: 1.8px solid ${({ theme }) => theme.primary}; // Bottom border for active state
  }
`;

// Styled component for UserContainer
const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end; // Aligning items to the right
  gap: 16px; // Gap between elements
  align-items: center;
  padding: 0 6px; // Padding
  color: ${({ theme }) => theme.primary}; // Text color based on theme
`;

// Styled component for TextButton
const TextButton = styled.div`
  text-align: end; // Text alignment to the right
  color: ${({ theme }) => theme.secondary}; // Text color based on theme
  cursor: pointer; // Cursor type
  font-size: 16px; // Font size
  transition: all 0.3s ease; // Transition effect
  font-weight: 600; // Font weight
  &:hover {
    color: ${({ theme }) => theme.primary}; // Hover color based on theme
  }
`;

// Styled component for MobileMenu
const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px; // Gap between elements
  padding: 0 6px; // Padding
  list-style: none; // Removing default list styling
  width: 90%; // Width of the mobile menu
  padding: 12px 40px 24px 40px; // Padding
  background: ${({ theme }) => theme.bg}; // Background color based on theme
  position: absolute; // Absolute positioning
  top: 80px; // Distance from top
  right: 0; // Distance from right
  transition: all 0.6s ease-in-out; // Transition effect
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"}; // Transform based on open state
  border-radius: 0 0 20px 20px; // Border radius
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2); // Box shadow
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; // Opacity based on open state
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")}; // Z-index based on open state
`;

// Navbar functional component
const Navbar = ({ currentUser }) => {
  const dispatch = useDispatch(); // useDispatch hook for dispatching actions
  const [isOpen, setisOpen] = useState(false); // State for mobile menu toggle
  return (
    <Nav>
      <NavContainer>
        <Mobileicon onClick={() => setisOpen(!isOpen)}> {/* Mobile menu icon */}
          <MenuRounded sx={{ color: "inherit" }} />
        </Mobileicon>

        <MobileMenu isOpen={isOpen}> {/* Mobile menu */}
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="/workouts">Workouts</Navlink>
          <Navlink to="/tutorials">Tutorials</Navlink>
          <Navlink to="/blogs">Blogs</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </MobileMenu>

        <NavItems> {/* Desktop navigation items */}
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="/workouts">Workouts</Navlink>
          <Navlink to="/tutorials">Tutorials</Navlink>
          <Navlink to="/blogs">Blogs</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </NavItems>

        <UserContainer> {/* User container */}
          <Avatar src={currentUser?.img}>{currentUser?.name[0]}</Avatar> {/* User avatar */}
          <TextButton onClick={() => dispatch(logout())}>Logout</TextButton> {/* Logout button */}
        </UserContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; // Exporting the Navbar component

