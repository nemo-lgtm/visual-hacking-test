import { LoadingAnimation } from './LoadingAnimation';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import voidframeTheme from '../../styles/themes/voidframe';

export default {
  title: 'Custom Component/LoadingAnimation',
  component: LoadingAnimation,
  tags: ['autodocs'],
  argTypes: {
    brandName: { control: 'text', description: '브랜드명 텍스트' },
    tagline: { control: 'text', description: '태그라인 텍스트' },
    duration: { control: { type: 'number', min: 1, max: 5 }, description: '전체 애니메이션 소요 시간 (초)' },
    isSkippable: { control: 'boolean', description: '클릭으로 스킵 가능 여부' },
    onComplete: { action: 'completed', description: '애니메이션 완료 콜백' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={voidframeTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Default = {
  args: {
    brandName: 'VOIDFRAME',
    tagline: 'WE FRAME THE VOID',
    duration: 2.5,
    isSkippable: true,
  },
  render: (args) => (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh' }}>
      <LoadingAnimation {...args} />
    </Box>
  ),
};
