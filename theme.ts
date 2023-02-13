import { extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

const {
    Select,
    Tabs,
    Spinner,
    Popover,
    Progress,
    NumberInput,
    PinInput,
    Menu,
    Modal,
    Link,
    Form,
    FormError,
    FormLabel,
    Heading,
    Button,
    Input,
    Checkbox,
    Skeleton,
    Drawer,
    Container,
    Divider,
    CloseButton,
    Alert,
    Avatar,
    Textarea
} = chakraTheme.components;

const fonts = {
    heading: `'Outfit', sans-serif`,
    body: `'Outfit', sans-serif`,
    mono: `'Outfit', sans-serif`,
};

const components = {
    Container,
    Button,
    Spinner,
    Select,
    Drawer,
    Divider,
    CloseButton,
    Alert,
    Avatar,
    Tabs,
    // Spinner,
    Popover,
    Progress,
    NumberInput,
    PinInput,
    Menu,
    Modal,
    Link,
    Form,
    FormError,
    FormLabel,
    Heading,
    Input,
    Checkbox,
    Skeleton,
    Textarea,
    // Text: {
    //     baseStyle: {
    //         color: '#001430',
    //     },
    // },
    // Spinner: mergeThemeOverride(Spinner, {
    //     sizes: {
    //         '2xl': {
    //             width: '12rem',
    //             height: '12rem',
    //         },
    //     },
    // }),
    // Button: mergeThemeOverride(Button, {
    //     baseStyle: {
    //         fontWeight: 700,
    //     },
    //     sizes: {
    //         lg: {
    //             // height: 'auto',
    //             py: 5,
    //             px: 8,
    //             fontSize: 16,
    //         },
    //         xl: {
    //             py: 5,
    //             px: 10,
    //             height: 'auto',
    //             fontSize: 18,
    //         },
    //     },
    // }),
    // Container: mergeThemeOverride(Container, {
    //     defaultProps: {
    //         size: 'md',
    //     },
    //     sizes: {
    //         sm: {
    //             maxWidth: 'sm',
    //         },
    //         md: {
    //             maxWidth: 'lg',
    //         },
    //         lg: {
    //             maxWidth: 'xl',
    //         },
    //         xl: {
    //             maxWidth: '2xl',
    //         },
    //         '2xl': {
    //             maxWidth: '3xl',
    //         },
    //         '3xl': {
    //             maxWidth: '4xl',
    //         },
    //         '4xl': {
    //             maxWidth: '5xl',
    //         },
    //         '5xl': {
    //             maxWidth: '6xl',
    //         },
    //         '6xl': {
    //             maxWidth: '7xl',
    //         },
    //     },
    // }),
};

export const theme = extendBaseTheme({
    components,
    // colors,
    fonts,
});