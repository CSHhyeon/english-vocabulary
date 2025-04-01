import styled from 'styled-components';

export const TitleWrapper = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

export const TabWrapper = styled.div`
  background-color: #F5F5F5;
  width: 736px;
  height: 40px;
  margin: 0px 0px 32px;
  padding: 4px;
  display: flex;
  align-items: center;
`;

export const TabButton= styled.button`
  width: 364px;
  height: 32px;
  border: none;
  padding: 6px 12px;
  border-radius: 2px;

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