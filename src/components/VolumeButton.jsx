import styled from 'styled-components';

export function VolumeButton({ onClick }){
  return(
    <VolumeIconButton onClick={onClick}>
      <i className="fas fa-volume-up"></i>
    </VolumeIconButton>
  );
}

const VolumeIconButton = styled.button`
  background: none;
  padding: 0px 15px;
  cursor: pointer;

  i {
    color: 0A0A0A;
    font-size: 15px;
    margin-bottom: 5px;
    vertical-align: middle;
  }
`;