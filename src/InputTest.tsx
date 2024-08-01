import styled from 'styled-components';
import { useState } from 'react';


export const InputTest = () => {
  const [color, setColor] = useState('#FFF');


  return (
    <ContainerUI>
      <IndicatorUI
        color={color}
      />

      <ControlsUI>
        <ButtonUI
          color='#F00'
          onClick={() => setColor('#F00')}
        >
          Press
        </ButtonUI>
        <ButtonUI
          color='#0F0'
          onClick={() => setColor('#0F0')}
        >
          Press
        </ButtonUI>
        <ButtonUI
          color='#00F'
          onClick={() => setColor('#00F')}
        >
          Press
        </ButtonUI>
        <input
          type='text'
        />

      </ControlsUI>

    </ContainerUI>
  );
};

const ContainerUI = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  gap: 2vmin;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: 'indicator controls';
`;

const IndicatorUI = styled.div <{color: string}>`
  height: 100%;
  width: 100%;
  border: 2px solid black;

  grid-area: indicator;
  background-color: ${props => props.color};
`;

const ControlsUI = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4px;

  grid-area: controls;
`;

const ButtonUI = styled.div <{color: string}>`
  height: 100%;
  width: 100%;
  border: 2px solid black;
  display: grid;
  place-items: center;

  font-weight: 800;
  font-size: 2em;

  color: ${props => props.color};
  background-color: ${props => props.color}2;
  
`;
