import styled from "@emotion/styled";

const BotonBorrar = styled.a`
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 2rem;
  margin: 2rem .5rem;
  text-align: center;
  background-color: red;
  color: white;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;
export default BotonBorrar;