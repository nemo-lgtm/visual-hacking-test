import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { FullPageContainer } from '../../components/layout/FullPageContainer';
import { StretchedHeadlineMultiline } from '../../components/typography/StretchedHeadline';
import carGif from '../../assets/voidframe/ref/car.gif';
import fireImg from '../../assets/voidframe/ref/fire-m.png';

/**
 * HeroSection 컴포넌트
 *
 * VOIDFRAME 랜딩 페이지 히어로 섹션.
 * 전체 화면에 대형 브랜드명, 태그라인, 스크롤 안내를 표시한다.
 * 레퍼런스 사이트의 car.gif 일러스트와 fire 스프레이 이펙트를 배경에 배치.
 *
 * 동작 방식:
 * 1. 전체 화면 검정 배경에 VOIDFRAME 브랜드명이 거대한 텍스트로 중앙 배치
 * 2. 우측 하단에 car.gif 일러스트가 장식 요소로 배치
 * 3. 좌측에 fire 스프레이 이미지가 배경 장식으로 배치
 * 4. 하단에 SCROLL 텍스트와 화살표가 반복 바운스 애니메이션
 *
 * Props:
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <HeroSection />
 */
export function HeroSection({ sx }) {
  const contentRef = useRef(null);
  const scrollRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const scroll = scrollRef.current;
    const car = carRef.current;
    if (!content) return;

    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      content,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // car 일러스트 슬라이드인
    if (car) {
      tl.fromTo(
        car,
        { opacity: 0, x: 120 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' },
        '-=0.6'
      );
    }

    if (scroll) {
      tl.fromTo(
        scroll,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.3'
      );

      // 화살표 반복 바운스
      gsap.to(scroll.querySelector('.scroll-arrow'), {
        y: 8,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }

    return () => tl.kill();
  }, []);

  return (
    <FullPageContainer
      sx={{
        bgcolor: '#000',
        px: { xs: 3, md: 6 },
        ...sx,
      }}
    >
      {/* fire 스프레이 배경 장식 — 좌측 */}
      <Box
        component="img"
        src={fireImg}
        alt=""
        sx={{
          position: 'absolute',
          left: { xs: -40, md: -20 },
          top: '15%',
          width: { xs: 200, md: 320 },
          opacity: 0.12,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* car.gif 일러스트 — 우측 하단 */}
      <Box
        ref={carRef}
        component="img"
        src={carGif}
        alt=""
        sx={{
          position: 'absolute',
          right: { xs: -30, md: '5%' },
          bottom: { xs: '12%', md: '15%' },
          width: { xs: 280, md: 480, lg: 560 },
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'invert(1)',
        }}
      />

      {/* 메인 콘텐츠 */}
      <Box
        ref={contentRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: '90vw',
          opacity: 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <StretchedHeadlineMultiline
          lines={['VOID', 'FRAME']}
          gap={0}
          headlineProps={{
            fontSize: 'clamp(4rem, 15vw, 14rem)',
            fontWeight: 900,
            lineHeight: 0.9,
          }}
          sx={{ color: '#FFFFFF' }}
        />

        <Typography
          variant="overline"
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            mt: 4,
            letterSpacing: '0.2em',
            fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
          }}
        >
          WE FRAME THE VOID
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.3)',
            mt: 1,
            fontStyle: 'italic',
            letterSpacing: '0.05em',
          }}
        >
          Moving images. Unmoved ambition.
        </Typography>
      </Box>

      {/* 스크롤 안내 */}
      <Box
        ref={scrollRef}
        sx={{
          position: 'absolute',
          bottom: { xs: 32, md: 48 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          opacity: 0,
          zIndex: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255, 255, 255, 0.4)',
            letterSpacing: '0.2em',
            fontWeight: 600,
          }}
        >
          SCROLL
        </Typography>
        <Box className="scroll-arrow">
          <ChevronDown size={20} color="rgba(255, 255, 255, 0.4)" />
        </Box>
      </Box>
    </FullPageContainer>
  );
}
