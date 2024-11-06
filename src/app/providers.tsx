'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '@/ui/theme/theme';
import StyledComponentsRegistry from './registry';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
}