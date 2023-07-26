import { StyledP, StyledSection, StyledDiv } from './MainStyle';
import { ButtonTest } from '@/components/testPages/ButtonTest';

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
