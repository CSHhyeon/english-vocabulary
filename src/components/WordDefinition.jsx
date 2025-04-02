import styled from 'styled-components';

export function WordMeaningAndDefinition({ meaning, i }) {
  return (
    <MeaningBlock $isNotFirst={i > 0}>
      <SpeechWrapper>{ meaning.partOfSpeech }</SpeechWrapper>
      <DefinitionWrapper>
        {meaning.definitions.slice(0, 3).map((def, i) => (
          <li key={i}>
            { def.definition }
            { def.example && <ExampleText>"{ def.example }"</ExampleText> }
          </li>
        ))}
      </DefinitionWrapper>
    </MeaningBlock>
  );
}

const MeaningBlock = styled.div`
  margin-top: ${(props) => (props.$isNotFirst ? '16px' : '0px')};
`;

const SpeechWrapper = styled.div`
  color: #0A0A0A;
  margin: 0px 0px 8px;
  padding: 2px 10px;

  font-size: 12px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  width: fit-content;
`;

const DefinitionWrapper = styled.ol`
  margin: 8px 0px 0px;
  padding: 0px 0px 0px 20px;

  li {
    margin-top: 8px;
  }
`;

const ExampleText = styled.p`
  color: #737373;
  font-size: 14px;
  font-style: italic;
  margin: 4px 0px 0px;
`;