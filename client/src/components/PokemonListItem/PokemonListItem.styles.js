import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 10px;
  padding: 20px 10px;
  border: 1px dashed #000;
`;

const Number = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: bold;
`;

const Image = styled.img`
  display: block;
  width: 150px;
  height: 150px;
`;

export { Wrapper, Number, Image };
