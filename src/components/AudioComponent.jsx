import styled from 'styled-components';

// 볼륨 버튼
export function AudioComponent({ phonetics }) {
  const playable = phonetics.find(p => p.audio);

  return playable ? (
    <AudioPlayButton url={playable.audio} />
  ) : null;
}

function AudioPlayButton({ url }) {
  const handleClick = () => {
    new Audio(url).play();
  };

  return (
    <StyledButton onClick={handleClick}>
      <i className="fas fa-volume-up"></i>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: none;
  padding: 0 15px;
  cursor: pointer;
  border: none;

  i {
    color: #0A0A0A;
    font-size: 15px;
    margin-bottom: 5px;
    vertical-align: middle;
  }
`;
