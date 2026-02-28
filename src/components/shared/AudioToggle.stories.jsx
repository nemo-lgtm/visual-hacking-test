import { AudioToggle } from './AudioToggle';
import { AudioProvider } from '../../hooks/useAudio';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import voidframeTheme from '../../styles/themes/voidframe';

export default {
  title: 'Custom Component/AudioToggle',
  component: AudioToggle,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '재생 중 라벨' },
    labelOff: { control: 'text', description: '음소거 라벨' },
    audioSrc: { control: 'text', description: '배경음악 파일 경로' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={voidframeTheme}>
        <CssBaseline />
        <AudioProvider>
          <Story />
        </AudioProvider>
      </ThemeProvider>
    ),
  ],
};

export const Default = {
  args: {
    label: 'SOUND ON',
    labelOff: 'SOUND OFF',
  },
  render: (args) => (
    <Box sx={{ bgcolor: '#000', minHeight: '30vh', position: 'relative' }}>
      <AudioToggle {...args} position={{ top: 24, right: 24 }} />
    </Box>
  ),
};
