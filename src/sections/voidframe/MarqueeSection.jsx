import { Box } from '@mui/material';
import { FullPageContainer } from '../../components/layout/FullPageContainer';
import { MarqueeText } from '../../components/typography/MarqueeText';
import feedbackImg from '../../assets/voidframe/ref/feedback-success.png';
import squirrelImg from '../../assets/voidframe/ref/squirrel-grafyti-stop.png';

/**
 * MarqueeSection 컴포넌트
 *
 * 무한 스크롤 텍스트(마키)가 여러 줄로 겹치는 전체 화면 섹션.
 * 서로 다른 방향과 속도의 마키 텍스트로 시각적 깊이감을 연출한다.
 * 레퍼런스 사이트의 스프레이 그래피티(feedback, squirrel)를 배경 장식으로 산배치.
 *
 * 동작 방식:
 * 1. 전체 화면 검정 배경에 3개의 MarqueeText가 수직 배치
 * 2. 첫 번째 줄: 'COLLABORATE' 흰색, 왼쪽 방향
 * 3. 두 번째 줄: 'CREATE TOGETHER' 빨간색, 오른쪽 방향
 * 4. 세 번째 줄: 'VOIDFRAME' 유령 워터마크 (10% 불투명도)
 * 5. 배경에 스프레이 그래피티 장식이 산배치
 *
 * Props:
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <MarqueeSection />
 */
export function MarqueeSection({ sx }) {
  return (
    <FullPageContainer
      sx={{
        bgcolor: '#000',
        overflow: 'hidden',
        ...sx,
      }}
    >
      {/* 스프레이 그래피티 배경 장식들 */}
      <Box
        component="img"
        src={feedbackImg}
        alt=""
        sx={{
          position: 'absolute',
          right: { xs: -20, md: '6%' },
          top: '12%',
          width: { xs: 140, md: 200 },
          filter: 'invert(1)',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      />
      <Box
        component="img"
        src={squirrelImg}
        alt=""
        sx={{
          position: 'absolute',
          left: { xs: -30, md: '3%' },
          bottom: '10%',
          width: { xs: 160, md: 240 },
          filter: 'invert(1)',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: { xs: 2, md: 4 },
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <MarqueeText
          text="COLLABORATE"
          direction="left"
          speed={25}
          sx={{ color: '#FFFFFF' }}
        />
        <MarqueeText
          text="CREATE TOGETHER"
          direction="right"
          speed={18}
          fontSize="clamp(2.5rem, 8vw, 6rem)"
          sx={{ color: '#D14836' }}
        />
        <MarqueeText
          text="VOIDFRAME"
          direction="left"
          speed={35}
          fontSize="clamp(4rem, 14vw, 12rem)"
          sx={{ color: 'rgba(255, 255, 255, 0.06)' }}
        />
      </Box>
    </FullPageContainer>
  );
}
