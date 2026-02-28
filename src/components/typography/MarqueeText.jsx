import { Box } from '@mui/material';
import { keyframes } from '@mui/material/styles';

/**
 * MarqueeText 컴포넌트
 *
 * 무한 수평 스크롤 텍스트(마키) 컴포넌트.
 * CSS keyframes 기반으로 텍스트가 끊김 없이 연속 스크롤된다.
 *
 * 동작 방식:
 * 1. 텍스트와 구분자가 repeat 횟수만큼 복제되어 긴 행을 구성
 * 2. CSS animation으로 전체 행이 좌/우로 무한 이동
 * 3. 행이 두 벌 배치되어 이어붙이기 효과로 끊김 없음
 * 4. speed로 한 사이클 소요 시간(초) 조절
 *
 * Props:
 * @param {string} text - 스크롤할 텍스트 [Required]
 * @param {number} speed - 애니메이션 한 사이클 시간 (초) [Optional, 기본값: 20]
 * @param {string} direction - 스크롤 방향 ('left' | 'right') [Optional, 기본값: 'left']
 * @param {string} separator - 텍스트 사이 구분자 [Optional, 기본값: ' \u2014 ']
 * @param {string} fontSize - 폰트 크기 [Optional, 기본값: 'clamp(3rem, 10vw, 8rem)']
 * @param {number} fontWeight - 폰트 굵기 [Optional, 기본값: 900]
 * @param {number} repeat - 텍스트 반복 횟수 [Optional, 기본값: 6]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <MarqueeText text="VOIDFRAME" />
 * <MarqueeText text="COLLABORATE" direction="right" speed={15} />
 */

const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
`;

export function MarqueeText({
  text,
  speed = 20,
  direction = 'left',
  separator = ' \u2014 ',
  fontSize = 'clamp(3rem, 10vw, 8rem)',
  fontWeight = 900,
  repeat = 6,
  sx,
  ...props
}) {
  const animation = direction === 'left' ? scrollLeft : scrollRight;

  // 텍스트 + 구분자를 repeat만큼 반복
  const repeatedText = Array(repeat)
    .fill(null)
    .map((_, i) => (
      <Box
        component="span"
        key={i}
        sx={{ whiteSpace: 'nowrap' }}
      >
        {text}{separator}
      </Box>
    ));

  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: `${animation} ${speed}s linear infinite`,
          fontFamily: '"Outfit", "Pretendard Variable", sans-serif',
          fontSize,
          fontWeight,
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
        }}
      >
        {/* 두 벌 배치로 끊김 없는 루프 */}
        {repeatedText}
        {repeatedText}
      </Box>
    </Box>
  );
}
