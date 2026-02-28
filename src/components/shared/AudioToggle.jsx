import { Box, Typography } from '@mui/material';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';

/**
 * AudioToggle 컴포넌트
 *
 * 글로벌 오디오 상태를 토글하는 버튼 컴포넌트.
 * lucide-react 아이콘으로 현재 상태를 시각적으로 표시한다.
 *
 * 동작 방식:
 * 1. 클릭 시 오디오 재생/정지 상태가 토글됨
 * 2. 현재 상태에 따라 Volume2(재생 중) 또는 VolumeX(음소거) 아이콘 표시
 * 3. 라벨 텍스트가 함께 표시됨
 *
 * Props:
 * @param {string} label - 재생 중 라벨 [Optional, 기본값: 'SOUND ON']
 * @param {string} labelOff - 음소거 라벨 [Optional, 기본값: 'SOUND OFF']
 * @param {string} audioSrc - 배경음악 파일 경로 [Optional]
 * @param {object} position - 위치 스타일 객체 [Optional, 기본값: { top: 24, right: 24 }]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <AudioToggle audioSrc="/audio/bgm.mp3" />
 */
export function AudioToggle({
  label = 'SOUND ON',
  labelOff = 'SOUND OFF',
  audioSrc,
  position = { top: 24, right: 24 },
  sx,
}) {
  const { isMuted, toggleBgm } = useAudio();

  const handleClick = () => {
    toggleBgm(audioSrc);
  };

  return (
    <Box
      onClick={handleClick}
      data-cursor="hover"
      sx={{
        position: 'fixed',
        ...position,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        cursor: 'pointer',
        opacity: 0.7,
        transition: 'opacity 0.3s ease',
        '&:hover': {
          opacity: 1,
        },
        ...sx,
      }}
    >
      {isMuted ? (
        <VolumeX size={18} color="#FFFFFF" />
      ) : (
        <Volume2 size={18} color="#FFFFFF" />
      )}
      <Typography
        variant="caption"
        sx={{
          color: '#FFFFFF',
          letterSpacing: '0.1em',
          fontWeight: 600,
          userSelect: 'none',
        }}
      >
        {isMuted ? labelOff : label}
      </Typography>
    </Box>
  );
}
