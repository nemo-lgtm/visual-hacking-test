import { useEffect, useMemo, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';

/**
 * CustomCursor 컴포넌트
 *
 * 기본 마우스 커서를 숨기고 커스텀 원형 커서를 표시하는 컴포넌트.
 * data-cursor="hover" 속성이 있는 요소 위에서 확대 및 색상이 변경된다.
 *
 * 동작 방식:
 * 1. 페이지 로드 시 기본 커서가 숨겨지고 원형 커서가 나타남
 * 2. 마우스 이동에 따라 GSAP으로 부드럽게 커서가 따라감
 * 3. data-cursor="hover" 요소 위에서 커서가 확대되고 색상이 변경됨
 * 4. 터치 디바이스에서는 자동으로 비활성화됨
 *
 * Props:
 * @param {number} size - 커서 기본 크기 (px) [Optional, 기본값: 20]
 * @param {string} color - 커서 기본 색상 [Optional, 기본값: '#FFFFFF']
 * @param {number} hoverScale - 호버 시 확대 비율 [Optional, 기본값: 3]
 * @param {string} hoverColor - 호버 시 색상 [Optional, 기본값: '#D14836']
 * @param {string} mixBlendMode - 블렌드 모드 [Optional, 기본값: 'difference']
 *
 * Example usage:
 * <CustomCursor />
 * <CustomCursor size={16} hoverColor="#FF0000" />
 */
export function CustomCursor({
  size = 20,
  color = '#FFFFFF',
  hoverScale = 3,
  hoverColor = '#D14836',
  mixBlendMode = 'difference',
}) {
  const cursorRef = useRef(null);
  const isTouch = useMemo(() => {
    return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    // 기본 커서 숨기기
    document.body.style.cursor = 'none';

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const onMouseEnterHover = () => {
      gsap.to(cursor, {
        scale: hoverScale,
        backgroundColor: hoverColor,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const onMouseLeaveHover = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: color,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // data-cursor="hover" 요소 이벤트 연결
    const hoverTargets = document.querySelectorAll('[data-cursor="hover"]');
    hoverTargets.forEach((el) => {
      el.style.cursor = 'none';
      el.addEventListener('mouseenter', onMouseEnterHover);
      el.addEventListener('mouseleave', onMouseLeaveHover);
    });

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      hoverTargets.forEach((el) => {
        el.style.cursor = '';
        el.removeEventListener('mouseenter', onMouseEnterHover);
        el.removeEventListener('mouseleave', onMouseLeaveHover);
      });
    };
  }, [size, color, hoverScale, hoverColor, isTouch]);

  if (isTouch) return null;

  return (
    <Box
      ref={cursorRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode,
        transform: 'translate(-100px, -100px)',
      }}
    />
  );
}
