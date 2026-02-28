import { Box } from '@mui/material';
import { Title } from '../../components/typography/Title';
import { InteractiveServiceList } from '../../components/shared/InteractiveServiceList';
import heartImg from '../../assets/voidframe/ref/prise-grafyti-1-stop.png';
import circleImg from '../../assets/voidframe/ref/prise-grafyti-2-stop.png';
import flowerImg from '../../assets/voidframe/ref/prise-grafyti-3-stop.png';

/**
 * ServiceListSection 컴포넌트
 *
 * VOIDFRAME 서비스 목록 섹션.
 * 호버 인터랙션이 적용된 서비스 리스트를 전체 너비로 표시한다.
 * 레퍼런스 사이트의 스프레이 그래피티(하트, 원, 꽃)를 배경 장식으로 산배치.
 *
 * 동작 방식:
 * 1. 섹션 타이틀(EXPERTISE / OUR CRAFT)이 상단에 표시
 * 2. 서비스 항목이 대형 텍스트 리스트로 나열
 * 3. 각 항목 호버 시 확대 + 빨간색 전환 + 나머지 흐리게
 * 4. 배경에 스프레이 그래피티 장식이 산배치
 *
 * Props:
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ServiceListSection />
 */

const services = [
  'Film Production',
  'Commercial Video',
  'Motion Design',
  'Brand Films',
  'Music Videos',
  'Post Production',
];

export function ServiceListSection({ sx }) {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: '#000',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        ...sx,
      }}
    >
      {/* 스프레이 그래피티 배경 장식들 */}
      <Box
        component="img"
        src={heartImg}
        alt=""
        sx={{
          position: 'absolute',
          right: { xs: -30, md: '5%' },
          top: '8%',
          width: { xs: 120, md: 180 },
          filter: 'invert(1)',
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      />
      <Box
        component="img"
        src={circleImg}
        alt=""
        sx={{
          position: 'absolute',
          left: { xs: -50, md: '-2%' },
          bottom: '15%',
          width: { xs: 150, md: 220 },
          filter: 'invert(1)',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      />
      <Box
        component="img"
        src={flowerImg}
        alt=""
        sx={{
          position: 'absolute',
          right: { xs: -20, md: '8%' },
          bottom: '5%',
          width: { xs: 100, md: 160 },
          filter: 'invert(1)',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      />

      <Title
        overline="EXPERTISE"
        title="OUR CRAFT"
        level="h2"
        sx={{
          mb: { xs: 4, md: 6 },
          position: 'relative',
          zIndex: 1,
          '& .MuiTypography-overline': {
            color: '#D14836',
          },
          '& .MuiTypography-h2': {
            color: '#FFFFFF',
          },
        }}
      />
      <InteractiveServiceList
        items={services}
        hoverEffect="underline"
        accentColor="#D14836"
        hasNumber
        hasDivider
        sx={{ position: 'relative', zIndex: 1 }}
      />
    </Box>
  );
}
