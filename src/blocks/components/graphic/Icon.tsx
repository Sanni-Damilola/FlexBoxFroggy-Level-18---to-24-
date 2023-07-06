import styled, { keyframes } from "styled-components";

const Icon = () => {
  return (
    <div>
      <Main>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "darkorange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <p>Joan</p>
        </div>
      </Main>
    </div>
  );
};

export default Icon;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Main = styled.div`
  width: 120px;
  height: 120px;
  /* background-color: darkorange;
  border-radius: 999px;
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */
  display: flex;
  margin: 7px;
  justify-content: center;
  align-items: center;

  p {
    animation-name: ${pulseAnimation};
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    animation-iteration-count: infinite;
  }
`;
