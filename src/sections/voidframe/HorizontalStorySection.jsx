import { Box, Typography } from '@mui/material';
import { HorizontalScrollSection, HorizontalPanel } from '../../components/media/HorizontalScrollSection';
import { SplitScreen } from '../../components/layout/SplitScreen';
import { StretchedHeadlineMultiline } from '../../components/typography/StretchedHeadline';
import { FullPageContainer } from '../../components/layout/FullPageContainer';
import crewStopImg from '../../assets/voidframe/ref/crew-stop.png';
import grafytiStopImg from '../../assets/voidframe/ref/grafyti-stop.png';
import programLink1 from '../../assets/voidframe/ref/program-link-1.png';
import programLink2 from '../../assets/voidframe/ref/program-link-2.png';
import programLink3 from '../../assets/voidframe/ref/program-link-3.png';
import promoCrewImg from '../../assets/voidframe/ref/promo-crew-stop.png';
import linesImg from '../../assets/voidframe/ref/lines.svg';
import squirrelImg from '../../assets/voidframe/ref/squirrel.svg';
import wheelImg from '../../assets/voidframe/ref/wheel.svg';

/**
 * HorizontalStorySection 컴포넌트
 *
 * VOIDFRAME 스토리를 가로 스크롤로 펼치는 섹션.
 * 4개 패널: 숫자 통계 → 철학 텍스트 → 접근 방식 → 전환 화면
 * 레퍼런스 사이트의 스프레이 그래피티 일러스트를 장식 요소로 활용.
 *
 * 동작 방식:
 * 1. 세로 스크롤이 가로 이동으로 변환됨 (GSAP ScrollTrigger)
 * 2. 각 패널이 100vw 너비로 순차 표시
 * 3. 패널 1: 숫자 통계 + "CREW" 스프레이 텍스트 장식
 * 4. 패널 2: 철학 메시지 대형 타이포
 * 5. 패널 3: 접근 방식 + 해골 그래피티 + 스프레이 아이콘들
 * 6. 패널 4: 서비스 섹션으로의 전환 (빨간 배경)
 *
 * Props:
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <HorizontalStorySection />
 */

/** 통계 데이터 */
const stats = [
  { number: '69+', label: 'Projects Completed' },
  { number: '5', label: 'Years of Experience' },
  { number: '300+', label: 'Films Produced' },
];

export function HorizontalStorySection({ sx }) {
  return (
    <HorizontalScrollSection panelCount={4} sx={sx}>
      {/* Panel 1: 숫자 통계 + CREW 스프레이 */}
      <HorizontalPanel sx={{ bgcolor: '#000', px: { xs: 3, md: 8 } }}>
        <SplitScreen
          ratio="60:40"
          stackAt="sm"
          left={
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              gap: { xs: 4, md: 6 },
              px: { xs: 2, md: 6 },
            }}>
              {stats.map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: 'clamp(3rem, 8vw, 7rem)',
                      fontWeight: 900,
                      lineHeight: 1,
                      color: '#FFFFFF',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.4)',
                      letterSpacing: '0.15em',
                      mt: 0.5,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          }
          right={
            <Box sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              px: { xs: 2, md: 4 },
            }}>
              {/* CREW 스프레이 텍스트 */}
              <Box
                component="img"
                src={crewStopImg}
                alt=""
                sx={{
                  width: { xs: '80%', md: '90%' },
                  maxWidth: 400,
                  filter: 'invert(1)',
                  opacity: 0.15,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  maxWidth: '40ch',
                  lineHeight: 1.8,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                We are a collective of filmmakers, designers, and storytellers who believe in the power of moving images to shape perception and define brands.
              </Typography>
            </Box>
          }
          sx={{ height: '100%' }}
        />
      </HorizontalPanel>

      {/* Panel 2: 철학 텍스트 + 스프레이 장식 */}
      <HorizontalPanel sx={{ bgcolor: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
        {/* 스프레이 그래피티 배경 장식들 */}
        <Box
          component="img"
          src={promoCrewImg}
          alt=""
          sx={{
            position: 'absolute',
            right: { xs: -40, md: '3%' },
            top: '8%',
            width: { xs: 200, md: 320 },
            filter: 'invert(1)',
            opacity: 0.06,
            pointerEvents: 'none',
          }}
        />
        <Box
          component="img"
          src={linesImg}
          alt=""
          sx={{
            position: 'absolute',
            left: { xs: -60, md: '-3%' },
            bottom: '5%',
            width: { xs: 180, md: 300 },
            filter: 'invert(1)',
            opacity: 0.08,
            pointerEvents: 'none',
          }}
        />
        <Box sx={{ px: { xs: 3, md: 8 }, width: '100%', maxWidth: '90vw', position: 'relative', zIndex: 1 }}>
          <StretchedHeadlineMultiline
            lines={['STORIES', 'WORTH', 'TELLING']}
            gap={0}
            headlineProps={{
              fontSize: 'clamp(3rem, 10vw, 9rem)',
              fontWeight: 900,
              lineHeight: 0.95,
            }}
            sx={{ color: '#FFFFFF' }}
          />
        </Box>
      </HorizontalPanel>

      {/* Panel 3: 접근 방식 + 그래피티 장식 */}
      <HorizontalPanel sx={{ bgcolor: '#000', px: { xs: 3, md: 8 } }}>
        <SplitScreen
          ratio="45:55"
          stackAt="sm"
          left={
            <Box sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              px: { xs: 2, md: 6 },
            }}>
              {/* 해골 그래피티 배경 장식 */}
              <Box
                component="img"
                src={grafytiStopImg}
                alt=""
                sx={{
                  position: 'absolute',
                  right: { xs: -20, md: -40 },
                  top: '10%',
                  width: { xs: 160, md: 240 },
                  filter: 'invert(1)',
                  opacity: 0.08,
                  pointerEvents: 'none',
                }}
              />
              <Typography
                variant="overline"
                sx={{ color: '#D14836', letterSpacing: '0.15em', mb: 2, position: 'relative', zIndex: 1 }}
              >
                OUR APPROACH
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Every frame is a decision. Every cut, a conviction.
              </Typography>
            </Box>
          }
          right={
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              gap: 3,
              px: { xs: 2, md: 6 },
            }}>
              <Typography
                variant="body1"
                sx={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.8 }}
              >
                We don&apos;t just produce videos. We architect visual narratives that cut through noise. From concept to final grade, every element serves the story.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'rgba(255, 255, 255, 0.4)', lineHeight: 1.8 }}
              >
                Our process is collaborative, iterative, and relentlessly focused on craft. We work with brands who refuse to settle for ordinary.
              </Typography>
              {/* 스프레이 아이콘 그리드 */}
              <Box sx={{
                display: 'flex',
                gap: { xs: 3, md: 5 },
                mt: 3,
                alignItems: 'center',
              }}>
                {[programLink1, programLink2, programLink3].map((icon, i) => (
                  <Box
                    key={i}
                    component="img"
                    src={icon}
                    alt=""
                    sx={{
                      width: { xs: 48, md: 64 },
                      height: { xs: 48, md: 64 },
                      objectFit: 'contain',
                      filter: 'invert(1)',
                      opacity: 0.5,
                    }}
                  />
                ))}
              </Box>
            </Box>
          }
          sx={{ height: '100%' }}
        />
      </HorizontalPanel>

      {/* Panel 4: 전환 (빨간 배경) + 스프레이 장식 */}
      <HorizontalPanel>
        <FullPageContainer
          sx={{
            bgcolor: '#D14836',
            width: '100vw',
            overflow: 'hidden',
          }}
        >
          {/* 스프레이 그래피티 배경 장식들 */}
          <Box
            component="img"
            src={squirrelImg}
            alt=""
            sx={{
              position: 'absolute',
              left: { xs: -30, md: '4%' },
              top: '10%',
              width: { xs: 180, md: 280 },
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          />
          <Box
            component="img"
            src={wheelImg}
            alt=""
            sx={{
              position: 'absolute',
              right: { xs: -20, md: '5%' },
              bottom: '8%',
              width: { xs: 140, md: 220 },
              opacity: 0.08,
              pointerEvents: 'none',
            }}
          />
          <StretchedHeadlineMultiline
            lines={['WHAT', 'WE DO']}
            gap={0}
            headlineProps={{
              fontSize: 'clamp(4rem, 12vw, 12rem)',
              fontWeight: 900,
              lineHeight: 0.9,
            }}
            sx={{
              color: '#FFFFFF',
              px: { xs: 3, md: 8 },
              maxWidth: '90vw',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </FullPageContainer>
      </HorizontalPanel>
    </HorizontalScrollSection>
  );
}
