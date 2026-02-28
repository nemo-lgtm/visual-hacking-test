import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import voidframeTheme from '../styles/themes/voidframe';
import { AudioProvider } from '../hooks/useAudio';
import { CustomCursor } from '../components/shared/CustomCursor';
import { LoadingAnimation } from '../components/shared/LoadingAnimation';
import { AudioToggle } from '../components/shared/AudioToggle';
import { HeroSection } from '../sections/voidframe/HeroSection';
import { HorizontalStorySection } from '../sections/voidframe/HorizontalStorySection';
import { ServiceListSection } from '../sections/voidframe/ServiceListSection';
import { MarqueeSection } from '../sections/voidframe/MarqueeSection';
import { ContactSection } from '../sections/voidframe/ContactSection';

/**
 * VoidframeLanding 페이지
 *
 * VOIDFRAME 스튜디오 랜딩 페이지.
 * 브루탈리즘 + 에디토리얼 디자인의 풀 랜딩 경험을 제공한다.
 *
 * 동작 방식:
 * 1. 로딩 애니메이션이 재생됨 (클릭으로 스킵 가능)
 * 2. 로딩 완료 후 메인 콘텐츠가 노출됨
 * 3. Hero → 가로 스크롤 스토리 → 서비스 리스트 → 마키 → 연락처 순서
 * 4. 커스텀 커서, 오디오 토글 등 글로벌 인터랙션 요소 포함
 *
 * Example usage:
 * <VoidframeLanding />
 */
export function VoidframeLanding() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ThemeProvider theme={voidframeTheme}>
      <CssBaseline />
      <AudioProvider>
        <CustomCursor />
        <LoadingAnimation
          brandName="VOIDFRAME"
          tagline="WE FRAME THE VOID"
          onComplete={() => setIsLoaded(true)}
        />
        <Box
          sx={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          <AudioToggle position={{ top: 24, right: 24 }} />
          <HeroSection />
          <HorizontalStorySection />
          <ServiceListSection />
          <MarqueeSection />
          <ContactSection />
        </Box>
      </AudioProvider>
    </ThemeProvider>
  );
}
