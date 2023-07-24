import Search from '@/components/search/Search';
import { StyledP, StyledSection, StyledDiv, StyledSvg } from './MainStyle';
import HomeSelected from '@/components/navigation/HomeSelected';

export default function Home() {
  return (
    <main>
      <StyledSection>
        <StyledDiv>
          <StyledP>ThemeProvider 테스트 중입니다</StyledP>
          <Search />
        </StyledDiv>
      </StyledSection>
    </main>
  );
}
