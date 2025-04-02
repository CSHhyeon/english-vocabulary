import styled from 'styled-components';
import { SpeechWrapper, ExampleText } from '../styles/Word.styles';

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

const DefinitionWrapper = styled.ol`
  margin: 8px 0px 0px;
  padding: 0px 0px 0px 20px;

  li {
    margin-top: 8px;
  }
`;