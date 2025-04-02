import styled from 'styled-components';

export const TitleWrapper = styled.h1`
  color: #0A0A0A;
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin: 0px 0px 32px;
`;

export const TabWrapper = styled.div`
  background-color: #F5F5F5;
  width: 736px;
  height: 40px;
  margin: 0px 0px 32px;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 6px;
`;

export const TabButton= styled.button`
  width: 364px;
  height: 32px;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;

  background-color: ${({ $active }) => ($active ? '#FFFFFF' : 'transparent')};
  color: ${({ $active }) => ($active ? '#0A0A0A' : '#737373')};

  &:focus {
    outline: none;
  }

`;

export const SectionWrapper = styled.section`
  margin: 8px 0px 0px;
  width: 736px;
`;