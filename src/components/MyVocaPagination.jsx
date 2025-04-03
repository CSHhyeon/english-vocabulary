import styled from 'styled-components';
import Pagination from 'react-bootstrap/Pagination';

export function MyVocaPagination() {
  return (
    <PaginationWrapper>
      <Pagination className='custom-pagination'>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;