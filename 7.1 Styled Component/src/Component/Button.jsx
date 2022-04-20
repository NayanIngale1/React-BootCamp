import styled from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.type == "primary" ? "#009dff" : "#fff"};
  color: ${(props) =>
    props.type == "primary"
      ? "#ffffff"
      : props.type == "dashed"
      ? "#009dff"
      : props.type == "link"
      ? "#009dff"
      : "#242424"};
  font-size: 16px;
  line-height: 1.5em;
  padding: 5px 15px;
  border: ${(props) =>
    props.type == "primary"
      ? "1px solid #009dff"
      : props.type == "dashed"
      ? "1px dashed #009dff"
      : props.type == "text"
      ? "none"
      : props.type == "link"
      ? "none"
      : "1px solid #242424"};
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.type == "primary"
        ? "#39b1fb"
        : props.type == "text"
        ? "#f6f4f4"
        : "#fff"};
    color: ${(props) =>
      props.type == "primary"
        ? "#fff"
        : props.type == "text"
        ? "none"
        : "#009dff"};
    border: ${(props) =>
      props.type == "primary"
        ? "1px solid #009dff"
        : props.type == "dashed"
        ? "1px dashed #009dff"
        : props.type == "text"
        ? "none"
        : props.type == "link"
        ? "none"
        : "1px solid #009dff"};
  }

  &:focus {
    box-shadow: ${(props) =>
      props.type == "text"
        ? "none"
        : props.type == "link"
        ? "none"
        : "rgba(131, 192, 253, 0.5) 0 0 0 3px;"};
    outline: none;
  }
 
`;

export { Button };
