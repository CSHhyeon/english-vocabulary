
import styled from 'styled-components';
import { use, useEffect, useState } from 'react'
import { WordMeaningAndDefinition } from './WordDefinition';
import { useVocaStore } from '../store/vocaStore';

export function Word({ word }) {  
  console.log(word);
  const { myVoca } = useVocaStore();

  return (
    <WordWrapper>
      {/* 단어 이름, 발음 기호 */}
      <WordNameWrapper>
        <WordNameAndNoun>
          <WordName>{ word.word }</WordName>
          <WordNoun>{ word.phonetic }</WordNoun>
        </WordNameAndNoun>
        <AddToVocaButton>+  Add to Vocabulary</AddToVocaButton>
      </WordNameWrapper>

      {/* 단어 품사별 뜻 */}
      <WordDefinitionWrapper> 
        {
          word.meanings.map(function(meaning, i) {
            return (
              <WordMeaningAndDefinition meaning={meaning} i={i} key={i}/>
            );
          })
        }
      </WordDefinitionWrapper>
    </WordWrapper>
  );
}

const WordWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 24px 0px 0px;
  border: 1px solid #E5E5E5;
`;

const WordNameWrapper = styled.div`
  height: 100px;
  padding: 24px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const WordNameAndNoun = styled.div`
  display: flex;
  flex-direction: column;
`;

const WordName = styled.div`
  color: #0A0A0A;
  font-size: 24px;
  font-weight: 600;
`;

const WordNoun = styled.div`
  color: #737373
  font-size: 14px;
`;

const AddToVocaButton = styled.button`
  color: #FAFAFA;
  background-color: #171717;
  padding: 8px 16px;
  height: 40px;
`;

// 단어 정의
const WordDefinitionWrapper = styled.div`
  padding: 0px 24px 24px;
`;