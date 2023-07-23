import Button from '@/components/Button';
import { StyledP, StyledSection, StyledDiv, StyledSvg } from './MainStyle';

export default function Home() {
  return (
    <main>
      <StyledSection>
        <StyledDiv>
          <StyledP>ThemeProvider 테스트 중입니다</StyledP>
        </StyledDiv>
      </StyledSection>
      <Button width={22}>테스트</Button>
    </main>
  );
}
