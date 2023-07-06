import styled from "styled-components";

const Definition = () => {
  return (
    <div>
      <Wrapper>
        <p>
          Oh no! The frogs are all squeezed onto a single row of lilypads.
          Spread them out using the flex-wrap property, which accepts the
          following values: nowrap: Every item is fit to a single line. wrap:
          Items wrap around to additional lines. wrap-reverse: Items wrap around
          to additional lines in reverse.
        </p>
      </Wrapper>
    </div>
  );
};

export default Definition;

const Wrapper = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
