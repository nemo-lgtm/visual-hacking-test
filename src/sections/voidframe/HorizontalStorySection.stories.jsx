import { HorizontalStorySection } from './HorizontalStorySection';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography } from '@mui/material';
import voidframeTheme from '../../styles/themes/voidframe';

export default {
  title: 'Section/Voidframe/HorizontalStorySection',
  component: HorizontalStorySection,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
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
  render: () => (
    <Box>
      <Box sx={{ height: '50vh', bgcolor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ color: '#FFF' }}>Scroll down</Typography>
      </Box>
      <HorizontalStorySection />
      <Box sx={{ height: '50vh', bgcolor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ color: '#FFF' }}>After section</Typography>
      </Box>
    </Box>
  ),
};
