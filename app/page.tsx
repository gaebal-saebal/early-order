import { ButtonTest } from '@/components/testPages/ButtonTest';
import { StyledP, StyledSection, StyledDiv, StyledSvg } from './MainStyle';

export default function Home() {
  return (
    <main>
      <StyledSection>
        <StyledDiv>
          <StyledP>ThemeProvider 테스트 중입니다</StyledP>
        </StyledDiv>
      </StyledSection>
      <ButtonTest />
    </main>
  );
}
