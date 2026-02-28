import { BigTypographyForm } from './BigTypographyForm';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import voidframeTheme from '../../styles/themes/voidframe';

export default {
  title: 'Custom Component/BigTypographyForm',
  component: BigTypographyForm,
  tags: ['autodocs'],
  argTypes: {
    submitLabel: { control: 'text', description: '제출 버튼 텍스트' },
    fontSize: { control: 'text', description: '인풋 폰트 크기' },
    accentColor: { control: 'color', description: '포커스 시 액센트 색상' },
    onSubmit: { action: 'submitted', description: '폼 제출 콜백' },
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

const sampleFields = [
  { name: 'name', placeholder: 'Your Name', label: 'NAME' },
  { name: 'company', placeholder: 'Company', label: 'COMPANY' },
  { name: 'email', placeholder: 'Email Address', type: 'email', label: 'EMAIL' },
  { name: 'message', placeholder: 'Tell us about your project...', multiline: true, label: 'PROJECT' },
];

export const Default = {
  args: {
    fields: sampleFields,
    submitLabel: 'SEND MESSAGE',
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    accentColor: '#D14836',
  },
  render: (args) => (
    <Box sx={{ bgcolor: '#000', p: { xs: 3, md: 8 }, minHeight: '80vh' }}>
      <BigTypographyForm {...args} />
    </Box>
  ),
};
