import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';

/**
 * InteractiveServiceList 컴포넌트
 *
 * 서비스 항목을 리스트 형태로 표시하며, 호버 시 GSAP 인터랙션이 적용되는 컴포넌트.
 * 각 항목에 마우스를 올리면 스케일/색상 전환 효과가 발생한다.
 *
 * 동작 방식:
 * 1. items 배열의 각 항목이 대형 텍스트로 세로 나열됨
 * 2. 호버 시 해당 항목이 확대되고 액센트 색상으로 변경
 * 3. 호버하지 않은 항목은 불투명도가 낮아짐
 * 4. 선택적으로 번호(인덱스)와 구분선 표시
 *
 * Props:
 * @param {Array<string|{label: string, description: string}>} items - 서비스 항목 배열 [Required]
 * @param {string} fontSize - 폰트 크기 [Optional, 기본값: 'clamp(2rem, 6vw, 5rem)']
 * @param {string} hoverEffect - 호버 이펙트 종류 ('underline' | 'spray') [Optional, 기본값: 'underline']
 * @param {string} accentColor - 호버 시 액센트 색상 [Optional, 기본값: '#D14836']
 * @param {boolean} hasNumber - 번호 표시 여부 [Optional, 기본값: true]
 * @param {boolean} hasDivider - 항목 사이 구분선 여부 [Optional, 기본값: true]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <InteractiveServiceList items={['Film Production', 'Commercial Video', 'Motion Design']} />
 */
export function InteractiveServiceList({
  items,
  fontSize = 'clamp(2rem, 6vw, 5rem)',
  hoverEffect = 'underline',
  accentColor = '#D14836',
  hasNumber = true,
  hasDivider = true,
  sx,
  ...props
}) {
  const itemRefs = useRef([]);
  const listRef = useRef(null);

  const handleMouseEnter = (index) => {
    const item = itemRefs.current[index];
    if (!item) return;

    // 호버된 항목 강조
    gsap.to(item, {
      scale: 1.02,
      x: 16,
      color: accentColor,
      duration: 0.3,
      ease: 'power2.out',
    });

    // 나머지 항목 흐리게
    itemRefs.current.forEach((el, i) => {
      if (i !== index && el) {
        gsap.to(el, {
          opacity: 0.3,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    });
  };

  const handleMouseLeave = () => {
    // 모든 항목 원래 상태
    itemRefs.current.forEach((el) => {
      if (el) {
        gsap.to(el, {
          scale: 1,
          x: 0,
          color: '#FFFFFF',
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    });
  };

  return (
    <Box
      ref={listRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      {items.map((item, index) => {
        const label = typeof item === 'string' ? item : item.label;
        const number = String(index + 1).padStart(2, '0');

        return (
          <Box
            key={index}
            ref={(el) => { itemRefs.current[index] = el; }}
            data-cursor="hover"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 2, md: 4 },
              py: { xs: 2, md: 3 },
              cursor: 'pointer',
              transformOrigin: 'left center',
              color: '#FFFFFF',
              ...(hasDivider && {
                borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
              }),
              ...(hasDivider && index === 0 && {
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              }),
              // 밑줄 이펙트
              ...(hoverEffect === 'underline' && {
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  backgroundColor: accentColor,
                  transition: 'width 0.4s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }),
            }}
          >
            {hasNumber && (
              <Typography
                variant="overline"
                sx={{
                  color: 'inherit',
                  opacity: 0.4,
                  minWidth: '3ch',
                  fontFamily: '"Outfit", sans-serif',
                }}
              >
                {number}
              </Typography>
            )}
            <Typography
              sx={{
                fontFamily: '"Outfit", "Pretendard Variable", sans-serif',
                fontSize,
                fontWeight: 800,
                lineHeight: 1.1,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                color: 'inherit',
              }}
            >
              {label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
