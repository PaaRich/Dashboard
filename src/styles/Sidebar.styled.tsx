import styled from "styled-components";

export const SidebarWrapper = styled.div`
  & ul li {
    display: flex;
    align-items: center;
    padding: 0.25rem 0;
  }

  & .active {
    color: white;
    background-color: #3b82f6;
  }
  & ul li a {
    transition-duration: 0.5s;
  }
  & ul li a:not(.active):hover {
    transform: translateX(0.5rem);
    background-color: whitesmoke;
    color: #1a1acf;
  }
`;
