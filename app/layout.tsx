import ThemeProviderContainer from '@/app/lib/ThemeProviderContainer';
import theme from '../theme/theme';
import StyledComponentsRegistry from './lib/registry';
import { StyledLayoutContainer, StyledLayout } from './LayoutStyle';
import LayoutStatusBar from '@/components/layout/LayoutStatusBar';
import Provider from './lib/Provider';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: '얼리오더',
  description: 'Early Order',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <script
          type='text/javascript'
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_CLIENTID}&callback=initMap`}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProviderContainer theme={theme}>
            <Provider>
              <StyledLayoutContainer>
                <StyledLayout>
                  <LayoutStatusBar />
                  {children}
                  <Footer />
                </StyledLayout>
              </StyledLayoutContainer>
            </Provider>
          </ThemeProviderContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
