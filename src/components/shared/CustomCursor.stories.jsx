import { CustomCursor } from './CustomCursor';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography } from '@mui/material';
import voidframeTheme from '../../styles/themes/voidframe';

export default {
  title: 'Custom Component/CustomCursor',
  component: CustomCursor,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 8, max: 60 }, description: '커서 기본 크기 (px)' },
    color: { control: 'color', description: '커서 기본 색상' },
    hoverScale: { control: { type: 'number', min: 1, max: 6 }, description: '호버 시 확대 비율' },
    hoverColor: { control: 'color', description: '호버 시 색상' },
    mixBlendMode: {
      control: 'select',
      options: ['difference', 'normal', 'multiply', 'screen'],
      description: '블렌드 모드',
    },
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
    size: 20,
    color: '#FFFFFF',
    hoverScale: 3,
    hoverColor: '#D14836',
    mixBlendMode: 'difference',
  },
  render: (args) => (
    <Box sx={{ bgcolor: '#000', minHeight: '60vh', p: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <CustomCursor {...args} />
      <Typography variant="h3" sx={{ color: '#FFF' }}>
        Move your cursor around
      </Typography>
      <Box
        data-cursor="hover"
        sx={{
          border: '2px solid #FFF',
          p: 4,
          display: 'inline-block',
          width: 'fit-content',
        }}
      >
        <Typography sx={{ color: '#FFF' }}>Hover me (data-cursor=&quot;hover&quot;)</Typography>
      </Box>
    </Box>
  ),
};
