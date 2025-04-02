import { TitleWrapper, TabWrapper, SectionWrapper, TabButton } from './styles/Header.styles'
import { MyVocabulary } from './components/MyVocabulary'
import { SearchWords } from './components/SearchWords'
import { useVocaStore } from './store/vocaStore'
import { usePageStore } from './store/pageStore'
import { useEffect } from 'react'
import './App.css'

function App() {
  const { page, setPage, changePage } = usePageStore();
  const { myVoca } = useVocaStore();

  // Tab 키 전환 기능
  useEffect(() => {
    const handleTabKey = (e)=>{
      if (e.key !== 'Tab') return;
      e.preventDefault();
      changePage();
    }

    // window에 걸어야 어디에서든 키 입력 감지할 수 있다고 함
    window.addEventListener('keydown', handleTabKey);

    // cleanup
    return () => {
      window.removeEventListener('keydown', handleTabKey);
    };
  }, []);

  return (
    <>
      <TitleWrapper>English Vocabulary Notebook</TitleWrapper>
      <TabWrapper>
        <TabButton $active={page === 0} onClick={ ()=>{ setPage(0) }}>Search Words</TabButton>
        <TabButton $active={page === 1} onClick={ ()=>{ setPage(1) }}>My Vocabulary ({myVoca.length})</TabButton>
      </TabWrapper>

      <SectionWrapper>
        {
          page === 0 ? <SearchWords/> : <MyVocabulary/>
        }
      </SectionWrapper>
    </>
  );
}

export default App
