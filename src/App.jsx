import { TitleWrapper, TabWrapper, SectionWrapper, TabButton } from './styles/Header.styles'
import { MyVocabulary } from './components/MyVocabulary'
import { SearchWords } from './components/SearchWords'
import { useVocaStore } from './store/vocaStore'
import { useTabStore } from './store/tabStore'
import { useEffect } from 'react'
import './App.css'

function App() {
  const { tab, setTab, changeTab } = useTabStore();
  const { myVoca } = useVocaStore();

  // Tab 키 전환 기능
  useEffect(() => {
    const handleTabKey = (e)=>{
      if (e.key !== 'Tab') return;
      e.preventDefault();
      changeTab();
    }

    document.addEventListener('keydown', handleTabKey);

    // cleanup
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, []);

  return (
    <>
      <TitleWrapper>English Vocabulary Notebook</TitleWrapper>
      <TabWrapper>
        <TabButton $active={tab === 0} onClick={ ()=>{ setTab(0) }}>Search Words</TabButton>
        <TabButton $active={tab === 1} onClick={ ()=>{ setTab(1) }}>My Vocabulary ({myVoca.length})</TabButton>
      </TabWrapper>

      <SectionWrapper>
        {
          tab === 0 ? <SearchWords/> : <MyVocabulary/>
        }
      </SectionWrapper>
    </>
  );
}

export default App
