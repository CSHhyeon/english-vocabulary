import styled from 'styled-components';
import { useMemo } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { usePageStore } from '../store/pageStore';

// 페이지네이션 컴포넌트
export function MyVocaPagination() {
  
  const { totalPage, currentPage, showPage, setCurrentPage, paginationPerPage,
    increaseShowPage, decreaseShowPage } = usePageStore();

  /* useEffect는 컴포넌트가 다 렌더링된 후 동작하고, useMemo는 컴포넌트가 렌더링되는 중간에 값 계산하고 똑같은 계산을 매번하지 않게 기억해 둠.
  * 렌더링 이후 추가 작업이 아닌 미리 계산된 값으로 pagination을 하는 것이기 때문에 useMemo가 더 적합하다고 생각했음.
  * useMemo: 계산된 값 변하지 않으면 컴포넌트 리렌더링 X
  * useEffect: 렌더링 -> effect 실행 -> 상태 변경 -> 리렌더링(현재는 불필요)
  */
  // 전체 페이지 그룹 수 계산 (ex: 23페이지면 5개씩 → 그룹은 0~4)
  const maxShowPage = useMemo(() => {
    return Math.ceil(totalPage / paginationPerPage) - 1; }, [totalPage, paginationPerPage]);

   // 현재 보여줄 페이지 번호 리스트 (5개)
  const pageList = useMemo(() => {
    return Array.from({ length: paginationPerPage }, (_, i) => {
      const num = showPage * paginationPerPage + (i + 1);
      return num <= totalPage ? num : null;
    }).filter(Boolean); // null 제거
  }, [showPage, totalPage]);

  return (
    <PaginationWrapper>
      <Pagination className='custom-pagination'>
        <Pagination.Prev disabled={ showPage === 0 } 
          onClick={ ()=>decreaseShowPage() }/>
        {
          pageList.map(function(page, i) {
            return (
              <Pagination.Item active={ currentPage === page }
                onClick={ ()=>setCurrentPage(page) } key={page}
              >{page}</Pagination.Item>
            );
          })
        }
        <Pagination.Next disabled={ showPage === maxShowPage }
          onClick={ ()=>increaseShowPage() }/>
      </Pagination>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;