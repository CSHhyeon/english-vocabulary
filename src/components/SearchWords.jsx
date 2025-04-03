import styled from 'styled-components';
import { useEffect, useState } from 'react'
import { Word } from './Word';

export function SearchWords() {

  const [loading, setLoading] = useState(false);
  const [inputWord, setInputWord] = useState(()=>{
    const saved = localStorage.getItem('inputWord');
    return saved ? JSON.parse(saved) : '';
  });
  const [searchedWord, setSearchedWord] = useState(()=>{
    const saved = localStorage.getItem('searchedWord');
    return saved ? JSON.parse(saved) : '';
  });

  // save to localStorage
  useEffect(()=>{
    localStorage.setItem('inputWord', JSON.stringify(inputWord));
  }, [inputWord]);

  useEffect(()=>{
    localStorage.setItem('searchedWord', JSON.stringify(searchedWord));
  }, [searchedWord]);

  // 단어 검색(API 호출)
  const searchWord = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`);

      // 404 에러 핸들링
      if (!response.ok) {
        throw new Error('Word not found. Please check your spelling and try again.');
      }

      const result = await response.json();
      setSearchedWord(result[0]);
    } catch (error) {
      alert(`${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    searchWord();
  };
  
  return(
    <>
      <SearchWrapper onSubmit={handleSubmit}>
        <SearchInput type="text" placeholder="Enter a word to search..." onChange={ (e)=>{ setInputWord(e.target.value); }} value={inputWord}></SearchInput>
        <SearchButton type="submit" disabled={loading}>
        { loading ? 'Searching...Search' : (
          <>
            <i className="fas fa-search white-icon"></i>
            <span>Search</span>
          </>) }
        </SearchButton>
      </SearchWrapper>

      {
        searchedWord && <Word word={searchedWord}/>
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
  height: 40px;
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