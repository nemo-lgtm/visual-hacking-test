import { Box, Typography } from '@mui/material';
import { StretchedHeadline } from '../../components/typography/StretchedHeadline';
import { SplitScreen } from '../../components/layout/SplitScreen';
import { BigTypographyForm } from '../../components/input/BigTypographyForm';
import handleGrafytiImg from '../../assets/voidframe/ref/handle-grafyti-stop.png';
import flowerImg from '../../assets/voidframe/ref/prise-grafyti-3-stop.png';

/**
 * ContactSection 컴포넌트
 *
 * VOIDFRAME 연락처 섹션.
 * 대형 타이포 폼과 연락처 정보를 좌우 분할로 배치하고, 하단에 푸터를 포함한다.
 *
 * 동작 방식:
 * 1. 상단에 'LET'S TALK' 대형 타이틀 표시
 * 2. 좌측: 이름, 회사, 이메일, 프로젝트 설명 폼
 * 3. 우측: 이메일, 전화, 주소 등 연락처 정보
 * 4. 하단: 저작권 표시와 법적 링크
 *
 * Props:
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ContactSection />
 */

const formFields = [
  { name: 'name', placeholder: 'Your Name', label: 'NAME' },
  { name: 'company', placeholder: 'Company', label: 'COMPANY' },
  { name: 'email', placeholder: 'Email Address', type: 'email', label: 'EMAIL' },
  { name: 'message', placeholder: 'Tell us about your project...', multiline: true, label: 'PROJECT' },
];

export function ContactSection({ sx }) {
  const handleSubmit = () => {
    // Form submission handled externally
  };

  return (
    <Box
      sx={{
        bgcolor: '#000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
    >
      {/* LET'S TALK 타이틀 + 배경 이미지 영역 */}
      <Box sx={{
        position: 'relative',
        px: { xs: 3, md: 8 },
        pt: { xs: 8, md: 12 },
        pb: { xs: 4, md: 6 },
        overflow: 'hidden',
      }}>
        {/* 스프레이 그래피티 배경 장식 */}
        <Box
          component="img"
          src={handleGrafytiImg}
          alt=""
          sx={{
            position: 'absolute',
            right: { xs: -20, md: '5%' },
            top: '10%',
            width: { xs: 180, md: 280 },
            filter: 'invert(1)',
            opacity: 0.06,
            pointerEvents: 'none',
          }}
        />
        <Box
          component="img"
          src={flowerImg}
          alt=""
          sx={{
            position: 'absolute',
            left: { xs: -40, md: '2%' },
            bottom: '20%',
            width: { xs: 120, md: 180 },
            filter: 'invert(1)',
            opacity: 0.04,
            pointerEvents: 'none',
          }}
        />
        <StretchedHeadline
          text="LET'S TALK"
          fontSize="clamp(3rem, 10vw, 9rem)"
          fontWeight={900}
          lineHeight={0.9}
          sx={{ color: '#FFFFFF', position: 'relative', zIndex: 1 }}
        />
      </Box>

      {/* 폼 + 연락처 */}
      <Box sx={{ flex: 1, px: { xs: 3, md: 8 }, pb: { xs: 6, md: 10 } }}>
        <SplitScreen
          ratio="60:40"
          stackAt="md"
          gap={6}
          left={
            <BigTypographyForm
              fields={formFields}
              submitLabel="SEND MESSAGE"
              onSubmit={handleSubmit}
              accentColor="#D14836"
              fontSize="clamp(1.2rem, 2.5vw, 2rem)"
            />
          }
          right={
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: 4,
                pt: { xs: 0, md: 2 },
              }}
            >
              <Box>
                <Typography
                  variant="overline"
                  sx={{ color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '0.15em' }}
                >
                  EMAIL
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#FFFFFF', mt: 0.5 }}
                >
                  hello@voidframe.studio
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="overline"
                  sx={{ color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '0.15em' }}
                >
                  PHONE
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#FFFFFF', mt: 0.5 }}
                >
                  +82 2 1234 5678
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="overline"
                  sx={{ color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '0.15em' }}
                >
                  ADDRESS
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#FFFFFF', mt: 0.5, lineHeight: 1.8 }}
                >
                  12F, Teheran-ro 427
                  <br />
                  Gangnam-gu, Seoul
                  <br />
                  South Korea
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="overline"
                  sx={{ color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '0.15em' }}
                >
                  SOCIAL
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, mt: 0.5 }}>
                  {['Instagram', 'Vimeo', 'LinkedIn'].map((social) => (
                    <Typography
                      key={social}
                      variant="body2"
                      data-cursor="hover"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        '&:hover': { color: '#D14836' },
                      }}
                    >
                      {social}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          }
        />
      </Box>

      {/* 푸터 */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          px: { xs: 3, md: 8 },
          py: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '0.05em' }}
        >
          &copy; 2026 VOIDFRAME STUDIO. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {['PRIVACY', 'TERMS'].map((link) => (
            <Typography
              key={link}
              variant="caption"
              data-cursor="hover"
              sx={{
                color: 'rgba(255, 255, 255, 0.3)',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#FFFFFF' },
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
