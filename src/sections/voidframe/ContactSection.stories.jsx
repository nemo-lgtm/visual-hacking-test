import { ContactSection } from './ContactSection';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import voidframeTheme from '../../styles/themes/voidframe';

export default {
  title: 'Section/Voidframe/ContactSection',
  component: ContactSection,
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
  render: () => <ContactSection />,
};
