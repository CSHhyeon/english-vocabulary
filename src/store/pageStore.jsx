import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePageStore = create(
  persist(
    (set) => ({
      totalPage: 1, // 전체 페이지 수 
      currentPage: 1, // 현재 active인 페이지
      showPage: 0, // 이전 버튼, 다음 버튼 disable 유무를 위한 변수

      vocaPerPage: 5, // 한 페이지에 보여줄 단어 수
      paginationPerPage: 5, // 보여줄 페이지 수
    
      // totalPage 값 설정
      setTotalPage: (myVocaLength) =>
        set((state) => ({
          totalPage: Math.max(1, Math.ceil(myVocaLength / state.vocaPerPage)),
        })),
      
    
      // currentPage 값 설정
      setCurrentPage: (currPage)=>set({ currentPage: currPage }),

      // 보여줄 페이지들 값 설정
      increaseShowPage: () => set((state) => ({ showPage: state.showPage + 1 })),
      decreaseShowPage: () => set((state) => ({ showPage: state.showPage - 1 })),
  }),
  {
    name: 'vocaPage',
    getStorage: () => localStorage,
  }
));

// 단어 추가된 경우
export const updatePageAfterAdd = (myVocaLength) => {
  const pageStore = usePageStore.getState();
  pageStore.setTotalPage(myVocaLength);
  pageStore.setCurrentPage(1);
};

// 단어 제거한 경우
export const updatePageAfterDelete = (myVocaLength) => {
  const pageStore = usePageStore.getState();
  pageStore.setTotalPage(myVocaLength); 

  const totalPage = Math.max(1, Math.ceil(myVocaLength / pageStore.vocaPerPage));
  if (pageStore.currentPage > totalPage) {
    pageStore.setCurrentPage(totalPage);
  }
};