import React from "react";
import styled from "styled-components";
import { Countries } from "./";

const NavBar = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 80px;
  `;

  const Navlinks = styled.ul`
    display: flex;
    align-items: center;
  `;

  const Navlink = styled.li`
    margin: 0 1rem;
    list-style: none;
  `;
  return (
    <>
      <Container>
        <div>
          <h1>Street Rate</h1>
        </div>
        <div>
          <Navlinks>
            <Countries />
            <Navlink>Home</Navlink>
            <Navlink>News</Navlink>
            <Navlink>Contact</Navlink>
          </Navlinks>
        </div>
      </Container>
    </>
  );
};

export default NavBar;
