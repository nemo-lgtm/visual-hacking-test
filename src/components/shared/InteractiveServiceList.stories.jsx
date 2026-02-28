import { InteractiveServiceList } from './InteractiveServiceList';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import voidframeTheme from '../../styles/themes/voidframe';

export default {
  title: 'Custom Component/InteractiveServiceList',
  component: InteractiveServiceList,
  tags: ['autodocs'],
  argTypes: {
    fontSize: { control: 'text', description: '폰트 크기' },
    hoverEffect: {
      control: 'select',
      options: ['underline', 'spray'],
      description: '호버 이펙트 종류',
    },
    accentColor: { control: 'color', description: '호버 시 액센트 색상' },
    hasNumber: { control: 'boolean', description: '번호 표시 여부' },
    hasDivider: { control: 'boolean', description: '항목 사이 구분선 여부' },
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

const sampleItems = [
  'Film Production',
  'Commercial Video',
  'Motion Design',
  'Brand Films',
  'Music Videos',
  'Post Production',
];

export const Default = {
  args: {
    items: sampleItems,
    fontSize: 'clamp(2rem, 6vw, 5rem)',
    hoverEffect: 'underline',
    accentColor: '#D14836',
    hasNumber: true,
    hasDivider: true,
  },
  render: (args) => (
    <Box sx={{ bgcolor: '#000', p: { xs: 2, md: 6 }, minHeight: '80vh' }}>
      <InteractiveServiceList {...args} />
    </Box>
  ),
};
