/**
 * Voidframe Theme
 *
 * VOIDFRAME 스튜디오 랜딩 페이지 전용 다크 테마.
 * 브루탈리즘 + 에디토리얼 톤의 디자인 시스템.
 *
 * ## 핵심 철학
 * - **Dark Mode**: 검정 배경에 화이트 타이포그래피
 * - **Sharp Corners**: borderRadius 0
 * - **No Shadow**: 그림자 없음
 * - **Bold Typography**: 클램프 기반 대형 타이포
 * - **Accent Red**: #D14836 포인트 컬러
 */

import { createTheme } from '@mui/material/styles';

// ============================================================
// 1. Color Tokens (색상 토큰)
// ============================================================
const palette = {
  mode: 'dark',
  primary: {
    main: '#FFFFFF',
    contrastText: '#000000',
  },
  secondary: {
    main: '#D14836',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#000000',
    paper: '#0A0A0A',
  },
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.5)',
    disabled: 'rgba(255, 255, 255, 0.3)',
  },
  divider: 'rgba(255, 255, 255, 0.15)',
  action: {
    active: 'rgba(255, 255, 255, 0.7)',
    hover: 'rgba(255, 255, 255, 0.08)',
    selected: 'rgba(255, 255, 255, 0.16)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
  },
};

// ============================================================
// 2. Typography Tokens (타이포그래피 토큰)
// ============================================================
const typography = {
  fontFamily: [
    '"Outfit"',
    '"Pretendard Variable"',
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'sans-serif',
  ].join(','),

  headingFontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',

  fontSize: 14,
  htmlFontSize: 16,

  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 900,
    fontSize: 'clamp(4rem, 12vw, 10rem)',
    lineHeight: 0.9,
    letterSpacing: '-0.04em',
    textTransform: 'uppercase',
  },
  h2: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 900,
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    lineHeight: 0.95,
    letterSpacing: '-0.03em',
    textTransform: 'uppercase',
  },
  h3: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 800,
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    lineHeight: 1,
    letterSpacing: '-0.02em',
  },
  h4: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 700,
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
  },
  h5: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: 1.4,
    letterSpacing: '0',
  },
  h6: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: 1.4,
    letterSpacing: '0',
  },
  body1: {
    fontSize: '1.125rem',
    lineHeight: 1.6,
    letterSpacing: '0',
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    letterSpacing: '0',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.75,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: '0.02em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 600,
    lineHeight: 2,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
};

// ============================================================
// 3. Shape Token (모양 토큰)
// ============================================================
const shape = {
  borderRadius: 0,
};

// ============================================================
// 4. Shadow Tokens (그림자 토큰) — 모두 없음
// ============================================================
const customShadows = {
  none: 'none',
  sm: 'none',
  md: 'none',
  lg: 'none',
  xl: 'none',
};

// ============================================================
// 5. Component Overrides (컴포넌트 오버라이드)
// ============================================================
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255,255,255,0.2) transparent',
        backgroundColor: '#000000',
        color: '#FFFFFF',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        textTransform: 'uppercase',
        fontWeight: 600,
        letterSpacing: '0.08em',
        border: '2px solid #FFFFFF',
        color: '#FFFFFF',
        padding: '12px 32px',
        '&:hover': {
          backgroundColor: '#D14836',
          borderColor: '#D14836',
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        color: '#FFFFFF',
        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
        fontFamily: '"Outfit", "Pretendard Variable", sans-serif',
        fontWeight: 300,
        '&::before': {
          borderBottom: '2px solid rgba(255, 255, 255, 0.3) !important',
        },
        '&::after': {
          borderBottom: '2px solid #D14836 !important',
        },
        '&:hover:not(.Mui-disabled)::before': {
          borderBottom: '2px solid rgba(255, 255, 255, 0.6) !important',
        },
      },
      input: {
        padding: '12px 0',
        '&::placeholder': {
          color: 'rgba(255, 255, 255, 0.3)',
          opacity: 1,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        backgroundColor: '#0A0A0A',
      },
    },
  },
};

// ============================================================
// Theme 생성
// ============================================================
const voidframeTheme = createTheme({
  palette,
  typography,
  spacing: 8,
  shape,
  components,
});

voidframeTheme.customShadows = customShadows;

export default voidframeTheme;

export {
  palette,
  typography,
  shape,
  customShadows,
  components,
};
