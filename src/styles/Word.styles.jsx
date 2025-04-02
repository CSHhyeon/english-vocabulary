import styled from 'styled-components';

export const WordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 24px 0;
  border: 1px solid #E5E5E5;
`;

export const WordNameWrapper = styled.div`
  padding: 24px 24px 8px;
  display: flex;
  justify-content: space-between;
`;

export const WordNameAndNoun = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WordName = styled.div`
  display: flex;
  align-items: center;

  font-size: 24px;
  font-weight: 600;
  color: #0A0A0A;
`;

export const WordNoun = styled.div`
  font-size: 14px;
  color: #737373;
`;

export const WordDefinitionWrapper = styled.div`
  padding: 0 24px 24px;
`;

export const SpeechWrapper = styled.div`
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

export const ExampleText = styled.p`
  color: #737373;
  font-size: 14px;
  font-style: italic;
  margin: 4px 0px 0px;
`;

export const ActionButton = styled.button`
  color: #FAFAFA;
  background-color: ${props => props.$danger ? '#EF4444' : '#171717'};
  height: ${props => props.$danger ? '36px' : '40px'};
  padding: ${props => props.$danger ? '0 12px' : '8px 16px'};
  &:hover {
    opacity: 0.9;
  }
`;
