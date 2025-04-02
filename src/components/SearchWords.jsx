import styled from 'styled-components';
import { useEffect, useState } from 'react'
import { Word } from './Word';

export function SearchWords() {

  const [inputWord, setInputWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [word, setWord] = useState('');
  const [show, setShow] = useState(false);

  const search = async (word) => {
    if (!word.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const result = await response.json();
      setWord(result[0]);
      setShow(true);
    } catch (error) {
      console.error(`잘못된 요청입니다. ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  return(
    <>
      <SearchWrapper onSubmit={(e)=>{ e.preventDefault(); search(inputWord); }}>
        <SearchInput type="text" placeholder="Enter a word to search..." onChange={ (e)=>{ setInputWord(e.target.value); }}></SearchInput>
        <SearchButton type="submit" disabled={loading}>
        { loading ? 'Searching...Search' : (
          <>
            <i className="fas fa-search white-icon"></i>
            <span>Search</span>
          </>) }
        </SearchButton>
      </SearchWrapper>

      {
        show && <Word word={word}/>
      }
    </>
  );
}

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 20px;
  padding: 8px 12px;
  border: 1px solid #E5E5E5;
  border-radius: 6px;

  &:focus {
    outline-color: black;
  }
`;

const SearchButton = styled.button`
  color: #FAFAFA;
  background-color: #171717;
  height: 40px;
  padding: 8px 16px;
  cursor: pointer;

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;