import styled from "styled-components";

const Outter = styled.div`
  background-color: #fff;

  overflow: auto;
`;

const Inner = styled.div`
  height: auto;
  overflow: auto;
  padding: 0 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
`;

export default function App({ title, children }) {
  return (
    <Outter>
      <h4>{title}</h4>
      <Inner>{children}</Inner>
    </Outter>
  );
}
