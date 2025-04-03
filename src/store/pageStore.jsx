import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePageStore = create(
  persist(
    (set) => ({
      totalPage: 1,
      currentPage: 1,
      showPage: 0,
      cnt: 5,
    
      // totalPage 값 설정
      setTotalPage: (myVocaLength)=>set((state) => 
        ({ totalPage: Math.ceil(myVocaLength / state.cnt) })),
    
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