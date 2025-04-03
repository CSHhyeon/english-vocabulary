import styled from 'styled-components';
import { useMemo } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { usePageStore } from '../store/pageStore';

export function MyVocaPagination() {
  
  const { cnt, totalPage, currentPage, showPage, setCurrentPage,
    increaseShowPage, decreaseShowPage } = usePageStore();

  // 전체 페이지 그룹 수 계산 (ex: 23페이지면 5개씩 → 그룹은 0~4)
  const maxShowPage = useMemo(() => Math.floor((totalPage - 1) / cnt), [totalPage]);

   // 현재 보여줄 페이지 번호 리스트 (5개)
  const pageList = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => {
      const num = showPage * cnt + (i + 1);
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