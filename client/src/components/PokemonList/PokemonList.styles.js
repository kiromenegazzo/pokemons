import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  text-align: center;
`;

const ButtonMore = styled.button.attrs({
  type: "button",
  disabled: `${({ disable }) => disable}`
})`
  display: block;
  width: 100%;
  padding: 10px 20px;
`;

const Loading = styled.div`
  width: 100%;
  padding: 10px 20px;
`;

const Pagination = styled.div`
  width: 100%;
  padding: 10px 20px;
`;

export { Wrapper, ButtonMore, Loading, Pagination };
