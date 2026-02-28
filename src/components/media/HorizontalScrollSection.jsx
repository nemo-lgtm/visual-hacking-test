import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * HorizontalScrollSection 컴포넌트
 *
 * 세로 스크롤 입력을 가로 이동으로 변환하는 GSAP 기반 가로 스크롤 섹션.
 * ScrollTrigger의 pin + scrub 기능으로 매끄러운 가로 스크롤을 구현한다.
 *
 * 동작 방식:
 * 1. 외부 래퍼가 panelCount x 100vh 높이로 세로 공간을 확보
 * 2. 내부 컨테이너가 화면에 고정(pin)됨
 * 3. 세로 스크롤 진행도에 따라 내부 패널들이 가로로 이동
 * 4. 스크롤이 끝나면 pin이 해제되고 다음 콘텐츠로 이어짐
 *
 * Props:
 * @param {ReactNode} children - 패널 콘텐츠 (각 패널은 width: 100vw 권장) [Required]
 * @param {number} panelCount - 패널 수 [Required]
 * @param {string} height - 각 패널 높이 [Optional, 기본값: '100vh']
 * @param {boolean} snap - 스냅 스크롤 활성화 [Optional, 기본값: false]
 * @param {function} onProgress - 스크롤 진행도 콜백 (0~1) [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <HorizontalScrollSection panelCount={4}>
 *   <Panel1 />
 *   <Panel2 />
 *   <Panel3 />
 *   <Panel4 />
 * </HorizontalScrollSection>
 */
export function HorizontalScrollSection({
  children,
  panelCount,
  height = '100vh',
  snap = false,
  onProgress,
  sx,
  ...props
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          snap: snap ? { snapTo: 1 / (panelCount - 1), duration: 0.3 } : false,
          onUpdate: (self) => {
            if (onProgress) {
              onProgress(self.progress);
            }
          },
        },
      });
    }, container);

    return () => ctx.revert();
  }, [panelCount, snap, onProgress]);

  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      <Box
        ref={trackRef}
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          height,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

/**
 * HorizontalPanel 컴포넌트
 *
 * HorizontalScrollSection 내부에서 사용하는 개별 패널.
 *
 * Props:
 * @param {ReactNode} children - 패널 콘텐츠 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <HorizontalPanel>
 *   <PanelContent />
 * </HorizontalPanel>
 */
export function HorizontalPanel({
  children,
  sx,
  ...props
}) {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100%',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
