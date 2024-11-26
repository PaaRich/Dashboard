import styled from "styled-components";

export const HomeWrapper = styled.section`
  padding: 1rem 0;

  .c-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  tbody tr:nth-child(2n) {
    background-color: whitesmoke;
  }
`;

export const Card = styled.div``;
