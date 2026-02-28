import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';

/**
 * LoadingAnimation 컴포넌트
 *
 * 페이지 진입 시 브랜드명 문자 분할 애니메이션 후 콘텐츠를 노출하는 인트로 로딩 화면.
 * GSAP Timeline으로 각 문자를 순차적으로 등장시킨다.
 *
 * 동작 방식:
 * 1. 전체 화면 검정 배경이 나타남
 * 2. 브랜드명이 문자 단위로 분할되어 stagger 애니메이션으로 등장
 * 3. 태그라인이 페이드인으로 등장
 * 4. 전체 로딩 화면이 위로 슬라이드 아웃되며 사라짐
 * 5. onComplete 콜백이 호출됨
 *
 * Props:
 * @param {string} brandName - 브랜드명 텍스트 [Optional, 기본값: 'VOIDFRAME']
 * @param {string} tagline - 태그라인 텍스트 [Optional, 기본값: 'WE FRAME THE VOID']
 * @param {number} duration - 전체 애니메이션 소요 시간 (초) [Optional, 기본값: 2.5]
 * @param {function} onComplete - 애니메이션 완료 콜백 [Optional]
 * @param {boolean} isSkippable - 클릭으로 스킵 가능 여부 [Optional, 기본값: true]
 *
 * Example usage:
 * <LoadingAnimation onComplete={() => setIsLoaded(true)} />
 */
export function LoadingAnimation({
  brandName = 'VOIDFRAME',
  tagline = 'WE FRAME THE VOID',
  duration = 2.5,
  onComplete,
  isSkippable = true,
}) {
  const containerRef = useRef(null);
  const charsRef = useRef([]);
  const taglineRef = useRef(null);
  const tlRef = useRef(null);
  const [isDone, setIsDone] = useState(false);
  const onCompleteRef = useRef(onComplete);

  const chars = brandName.split('');

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const handleComplete = useCallback(() => {
    setIsDone(true);
    if (onCompleteRef.current) onCompleteRef.current();
  }, []);

  const handleSkip = () => {
    if (!isSkippable || isDone) return;
    if (tlRef.current) {
      tlRef.current.progress(1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isDone) return;

    const tl = gsap.timeline({
      onComplete: handleComplete,
    });
    tlRef.current = tl;

    // 문자 stagger 등장
    tl.fromTo(
      charsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: 'power3.out',
      }
    );

    // 태그라인 등장
    tl.fromTo(
      taglineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      `-=${duration * 0.15}`
    );

    // 대기
    tl.to({}, { duration: duration * 0.2 });

    // 전체 화면 슬라이드 아웃
    tl.to(container, {
      yPercent: -100,
      duration: 0.6,
      ease: 'power3.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [duration, isDone, handleComplete]);

  if (isDone) return null;

  return (
    <Box
      ref={containerRef}
      onClick={handleSkip}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: '#000',
        zIndex: 9998,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isSkippable ? 'pointer' : 'default',
      }}
    >
      <Box sx={{ display: 'flex', overflow: 'hidden' }}>
        {chars.map((char, i) => (
          <Box
            key={i}
            ref={(el) => { charsRef.current[i] = el; }}
            component="span"
            sx={{
              fontFamily: '"Outfit", "Pretendard Variable", sans-serif',
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              display: 'inline-block',
              opacity: 0,
            }}
          >
            {char}
          </Box>
        ))}
      </Box>
      <Typography
        ref={taglineRef}
        variant="overline"
        sx={{
          color: 'rgba(255, 255, 255, 0.5)',
          mt: 2,
          letterSpacing: '0.2em',
          opacity: 0,
        }}
      >
        {tagline}
      </Typography>
    </Box>
  );
}
