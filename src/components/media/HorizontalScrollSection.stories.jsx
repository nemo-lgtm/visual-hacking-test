import { HorizontalScrollSection, HorizontalPanel } from './HorizontalScrollSection';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography } from '@mui/material';
import voidframeTheme from '../../styles/themes/voidframe';

export default {
  title: 'Custom Component/HorizontalScrollSection',
  component: HorizontalScrollSection,
  tags: ['autodocs'],
  argTypes: {
    panelCount: { control: { type: 'number', min: 2, max: 8 }, description: '패널 수' },
    height: { control: 'text', description: '각 패널 높이' },
    snap: { control: 'boolean', description: '스냅 스크롤 활성화' },
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

const panelColors = ['#111', '#1a1a1a', '#222', '#D14836'];

export const Default = {
  args: {
    panelCount: 4,
    height: '100vh',
    snap: false,
  },
  render: (args) => (
    <Box>
      <Box sx={{ height: '50vh', bgcolor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3" sx={{ color: '#FFF' }}>Scroll down to enter horizontal section</Typography>
      </Box>
      <HorizontalScrollSection {...args}>
        {panelColors.map((color, i) => (
          <HorizontalPanel key={i} sx={{ bgcolor: color }}>
            <Typography variant="h2" sx={{ color: '#FFF' }}>
              Panel {i + 1}
            </Typography>
          </HorizontalPanel>
        ))}
      </HorizontalScrollSection>
      <Box sx={{ height: '50vh', bgcolor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3" sx={{ color: '#FFF' }}>After horizontal section</Typography>
      </Box>
    </Box>
  ),
};
