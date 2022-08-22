import styled from "styled-components";

export const TaskItemDiv = styled.div`
  color: ${({ important }) => (important ? "purple" : "black")};
  font-weight: ${({ important }) => (important ? "bold" : "normal")};
  text-decoration: ${({ done }) => (done ? "line-through" : "")};

  width: 100%;
`;
export const Input = styled.input`
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none; /* Mobile Safari */
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;

  :checked {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center left;
  }
`;

export const Label = styled.label`
  background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center left;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 85px 15px 60px;
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  bottom: -3px;
  width: 30px;
  height: 40px;
  font-size: 34px;
  color: #cc9a9a;
  margin: auto 0 11px;
  transition: color 0.2s ease-out;
  cursor: pointer;
`;
export const ButtonEdit = styled(Button)`
  font-size: 19px;
  right: 45px;

  :after {
    content: "✎";
  }
`;

export const ButtonDestroy = styled(Button)`
  right: 10px;

  :after {
    content: "×";
  }
`;

export const SpanTime = styled.span`
  color: gray;
  font-size: 11px;
  width: 120px;
`;

export const SpanLabel = styled.span`
  color: #4d4d4d;
  display: block;
  font-weight: 400;
  line-height: 1.2;
  transition: color 0.4s;
  width: 150px;
  word-wrap: break-word;
`;
