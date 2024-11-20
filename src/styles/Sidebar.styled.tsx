import styled from "styled-components";

export const SidebarWrapper = styled.div`
  height: 100dvh;
  background-color: whitesmoke;

  & ul li {
    display: flex;
    align-items: center;
  }

  & .active {
    color: white;
    background-color: #6f6fef;
  }
  & ul li a {
    transition-duration: 0.5s;
  }
  & ul li a:not(.active):hover {
    transform: translateX(0.5rem);
    color: #1a1acf;
  }
`;
