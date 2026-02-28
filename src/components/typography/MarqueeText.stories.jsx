import { MarqueeText } from './MarqueeText';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import voidframeTheme from '../../styles/themes/voidframe';

export default {
  title: 'Custom Component/MarqueeText',
  component: MarqueeText,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: '스크롤할 텍스트' },
    speed: { control: { type: 'number', min: 5, max: 60 }, description: '한 사이클 시간 (초)' },
    direction: { control: 'select', options: ['left', 'right'], description: '스크롤 방향' },
    separator: { control: 'text', description: '텍스트 사이 구분자' },
    fontSize: { control: 'text', description: '폰트 크기' },
    fontWeight: { control: { type: 'number', min: 100, max: 900 }, description: '폰트 굵기' },
    repeat: { control: { type: 'number', min: 3, max: 12 }, description: '텍스트 반복 횟수' },
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
    text: 'VOIDFRAME',
    speed: 20,
    direction: 'left',
    separator: ' \u2014 ',
    fontSize: 'clamp(3rem, 10vw, 8rem)',
    fontWeight: 900,
    repeat: 6,
  },
  render: (args) => (
    <Box sx={{ bgcolor: '#000', py: 4, overflow: 'hidden' }}>
      <MarqueeText {...args} sx={{ color: '#FFF' }} />
    </Box>
  ),
};

export const Variants = {
  render: () => (
    <Box sx={{ bgcolor: '#000', py: 6, display: 'flex', flexDirection: 'column', gap: 4, overflow: 'hidden' }}>
      <MarqueeText text="COLLABORATE" direction="left" sx={{ color: '#FFF' }} />
      <MarqueeText text="CREATE TOGETHER" direction="right" sx={{ color: '#D14836' }} speed={15} />
      <MarqueeText
        text="VOIDFRAME"
        direction="left"
        sx={{ color: 'rgba(255,255,255,0.1)' }}
        speed={30}
      />
    </Box>
  ),
};
