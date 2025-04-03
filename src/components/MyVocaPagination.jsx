import styled from 'styled-components';
import Pagination from 'react-bootstrap/Pagination';
import { usePageStore } from '../store/pageStore';

export function MyVocaPagination() {
  
  const { totalPage, currentPage, showPage, setCurrentPage,
    increaseShowPage, decreaseShowPage } = usePageStore();
  const pageNumber = Array.from({length: 5}, (_, i) => {
    const num = (showPage * 5) + (i + 1);
    return num <= totalPage ? num : null;
  }).filter(Boolean); // null 제거

  return (
    <PaginationWrapper>
      <Pagination className='custom-pagination'>
        <Pagination.Prev disabled={ showPage === 0 } 
          onClick={ ()=>decreaseShowPage() }/>
        {
          pageNumber.map(function(page, i) {
            return (
              <Pagination.Item active={ currentPage === page }
                onClick={ ()=>setCurrentPage(page) } key={page}
              >{page}</Pagination.Item>
            );
          })
        }
        <Pagination.Next disabled={ showPage === (totalPage - 1) }
          onClick={ ()=>increaseShowPage() }/>
      </Pagination>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;