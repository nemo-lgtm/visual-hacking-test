import { useCallback, useState } from 'react';
import { Box, Button, Input, Typography } from '@mui/material';

/**
 * BigTypographyForm 컴포넌트
 *
 * 대형 타이포그래피 기반 연락처 폼.
 * 밑줄만 있는 큼직한 인풋으로 브루탈리즘 스타일의 폼을 구성한다.
 *
 * 동작 방식:
 * 1. fields 배열의 각 필드가 대형 텍스트 인풋으로 렌더링됨
 * 2. 각 인풋은 MUI Input (밑줄만) 기반으로 큰 폰트 사이즈 적용
 * 3. 포커스 시 밑줄 색상이 액센트 색상으로 변경됨
 * 4. 제출 버튼 클릭 시 onSubmit 콜백에 폼 데이터 전달
 *
 * Props:
 * @param {Array<{name: string, placeholder: string, type: string, multiline: boolean}>} fields - 폼 필드 배열 [Required]
 * @param {string} submitLabel - 제출 버튼 텍스트 [Optional, 기본값: 'SEND']
 * @param {string} fontSize - 인풋 폰트 크기 [Optional, 기본값: 'clamp(1.5rem, 3vw, 2.5rem)']
 * @param {function} onSubmit - 폼 제출 콜백 [Optional]
 * @param {string} accentColor - 포커스 시 액센트 색상 [Optional, 기본값: '#D14836']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <BigTypographyForm
 *   fields={[
 *     { name: 'name', placeholder: 'Your Name' },
 *     { name: 'email', placeholder: 'Email', type: 'email' },
 *   ]}
 *   onSubmit={(data) => console.log(data)}
 * />
 */
export function BigTypographyForm({
  fields,
  submitLabel = 'SEND',
  fontSize = 'clamp(1.5rem, 3vw, 2.5rem)',
  onSubmit,
  accentColor = '#D14836',
  sx,
  ...props
}) {
  const [formData, setFormData] = useState(() => {
    const initial = {};
    fields.forEach((field) => {
      initial[field.name] = '';
    });
    return initial;
  });

  const handleChange = useCallback((name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 4, md: 5 },
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      {fields.map((field) => (
        <Box key={field.name}>
          {field.label && (
            <Typography
              variant="overline"
              sx={{
                color: 'rgba(255, 255, 255, 0.4)',
                mb: 1,
                display: 'block',
                letterSpacing: '0.1em',
              }}
            >
              {field.label}
            </Typography>
          )}
          <Input
            fullWidth
            name={field.name}
            type={field.type || 'text'}
            placeholder={field.placeholder}
            multiline={field.multiline || false}
            rows={field.multiline ? 3 : undefined}
            value={formData[field.name]}
            onChange={(e) => handleChange(field.name, e.target.value)}
            disableUnderline={false}
            data-cursor="hover"
            sx={{
              fontSize,
              fontFamily: '"Outfit", "Pretendard Variable", sans-serif',
              fontWeight: 300,
              color: '#FFFFFF',
              '&::before': {
                borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
              },
              '&::after': {
                borderBottom: `2px solid ${accentColor}`,
              },
              '&:hover:not(.Mui-disabled)::before': {
                borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
              },
              '& input::placeholder, & textarea::placeholder': {
                color: 'rgba(255, 255, 255, 0.25)',
                opacity: 1,
              },
            }}
          />
        </Box>
      ))}
      <Box sx={{ mt: 2 }}>
        <Button
          type="submit"
          data-cursor="hover"
          sx={{
            border: '2px solid #FFFFFF',
            color: '#FFFFFF',
            px: 6,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            '&:hover': {
              bgcolor: accentColor,
              borderColor: accentColor,
            },
          }}
        >
          {submitLabel}
        </Button>
      </Box>
    </Box>
  );
}
