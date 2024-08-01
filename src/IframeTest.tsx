import styled from 'styled-components';


export const IframeTest = () => {

  return (
    <IframeUI
      src='/input'
    />
  );
};

const IframeUI = styled.iframe `
  width: 100%;
  height: 100%;

`;
