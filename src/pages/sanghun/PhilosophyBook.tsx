import React from "react";
import styled from "@emotion/styled";
import { Layout, TypoGraphy } from "./components";
import { philosophy } from "./dummy/books";

const PhilosophyBook: React.FC = () => {
  return (
    <Layout>
      <Wrapper>
        <TopBox>
          <Img src={philosophy.imgSrc} />
          <TopContent>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                제목 : 프로그래머 철학을 만나다
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                주제 : 철학
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                저자 소개 : 유석문
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h3">
                한때는 개발자의 끝이 통닭집이 아님을 증명하겠다며 의기양양하게
                살았고 지금은 "그 돈이나 모을 수 있으려나?" 걱정하며 살고 있다.
                하지만 대기업, 벤처, SI, 포털 서비스를 거치며 "소프트웨어 개발은
                정말 재밌다"는 사실에 늘 감동하고 있다. 회사에 근무하는 일 외에
                소프트웨어마에스트로 멘토로 활동 중이며 그간의 실패담을 공유하여
                다른 분의 성공 가능성을 높이는 일에 흥미를 느끼고 있다. 오픈소스
                NTAF 개발에 참여 중이며 저서로 『소프트웨어 품질 관리: NHN은
                이렇게 한다!』(공저, 위키북스, 2010), 『프로그래머로 산다는
                것』(공저, 로드북, 2012)이 있다.
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                줄거리
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h3">
                기술적으로 뛰어난 인재를 갖추고도 소프트웨어 개발은 실패할 수
                있습니다. 바로 ‘사람’이 관여하고 있기 때문입니다. 사람이 함께
                함으로써 발생되는 문제들, 이것은 결코 기술적인 지식만으로 해결할
                수 없습니다. 이 책은 철학이라는 프레임을 통해 소프트웨어 개발
                현장을 들여다보고 그 속에서 발생되는 문제들이 사람이기 때문에
                일어날 수 있다는 사실을 알려주고 있습니다. 그리고 그 문제에 대해
                실천적인 지혜를 제시합니다. 개발자뿐만이 아니라 소프트웨어
                개발에 참여하는 모든 사람들이 쉽게 읽어볼 수 있는 책입니다. 이
                책을 통해 팍팍한 우리의 삶이 조금이나마 편해지고 행복해지면
                좋겠습니다. (이 책의 저작권료는 전액 초록우산 어린이재단에
                기부됩니다) **대상 독자** 소프트웨어 개발 현장에서 발생하는
                기술적 문제 외에 실패, 좌절, 불안, 불협화음, 무력감 등의 문제를
                겪고 있는 모든 소프트웨어 개발 종사자 **실천적 지혜는 결국
                ‘사람’을 이해하는 것이다** 소프트웨어 개발에서 언제나 우리를
                괴롭히는 것은 기술이 아니라 일정한 입력에 일정한 응답을 제공하지
                않는 ‘사람’이다. 때로는 협업의 적이 되기도 하고 화를 불러 조직을
                무너뜨리기도 하며 서로의 공격으로 자존감을 손상시켜 무력감을
                주기도 한다. 우리가 사람이기 때문에 일어나는 일들이다. 이 책은
                바로 이러한 문제들을 어떻게 풀 것인가에 대한 실천적 해답을
                찾고자 하였다. 그리고 이 책에서 사용한 프레임은 ‘철학’이다.
                철학을 통해 소프트웨어 개발 환경을 들여다보고 실천적 지혜를
                찾아본다. “그 동안 잘못되었다고, 이해할 수 없다고 생각했던 모든
                일이 사람이기 때문에 일어나는 것이고 필자 또한 그 안에 속해
                있음을 처음으로 인정할 수 있었다. 나는 맞고, 남들은 틀렸다”는
                전제를 가지고 세상을 보고 있었고, 그로 인해 협업이 아닌 계몽이란
                허황된 꿈을 꾸고 있었음을 알게 된 것이다. 불행 중 다행히도
                잘못을 인정하고 받아들여야 한다는 점과 실수를 했다고 가치 없는
                사람이 아니라는 사실을 방금 읽은 스토아 철학을 통해 배운 덕에
                자책하느라 시간 낭비를 하지는 않았다. 이 책은 이러한 필자의
                경험이 담겨있다.”
              </TypoGraphy>
            </Gap>
          </TopContent>
        </TopBox>
        {/* 여기임 */}
        <Gap></Gap>
        <Gap>
          <ContentBox>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                제목 : 프로그래머 철학을 만나다
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                주제 : 철학
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                저자 소개 : 유석문
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h3">
                한때는 개발자의 끝이 통닭집이 아님을 증명하겠다며 의기양양하게
                살았고 지금은 "그 돈이나 모을 수 있으려나?" 걱정하며 살고 있다.
                하지만 대기업, 벤처, SI, 포털 서비스를 거치며 "소프트웨어 개발은
                정말 재밌다"는 사실에 늘 감동하고 있다. 회사에 근무하는 일 외에
                소프트웨어마에스트로 멘토로 활동 중이며 그간의 실패담을 공유하여
                다른 분의 성공 가능성을 높이는 일에 흥미를 느끼고 있다. 오픈소스
                NTAF 개발에 참여 중이며 저서로 『소프트웨어 품질 관리: NHN은
                이렇게 한다!』(공저, 위키북스, 2010), 『프로그래머로 산다는
                것』(공저, 로드북, 2012)이 있다.
              </TypoGraphy>
            </Gap>
          </ContentBox>
          <Gap></Gap>

          <ContentBox>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                제목 : 프로그래머 철학을 만나다
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                주제 : 철학
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                저자 소개 : 유석문
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h3">
                한때는 개발자의 끝이 통닭집이 아님을 증명하겠다며 의기양양하게
                살았고 지금은 "그 돈이나 모을 수 있으려나?" 걱정하며 살고 있다.
                하지만 대기업, 벤처, SI, 포털 서비스를 거치며 "소프트웨어 개발은
                정말 재밌다"는 사실에 늘 감동하고 있다. 회사에 근무하는 일 외에
                소프트웨어마에스트로 멘토로 활동 중이며 그간의 실패담을 공유하여
                다른 분의 성공 가능성을 높이는 일에 흥미를 느끼고 있다. 오픈소스
                NTAF 개발에 참여 중이며 저서로 『소프트웨어 품질 관리: NHN은
                이렇게 한다!』(공저, 위키북스, 2010), 『프로그래머로 산다는
                것』(공저, 로드북, 2012)이 있다.
              </TypoGraphy>
            </Gap>
          </ContentBox>
          <Gap></Gap>

          <ContentBox>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                제목 : 프로그래머 철학을 만나다
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                주제 : 철학
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                저자 소개 : 유석문
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h3">
                한때는 개발자의 끝이 통닭집이 아님을 증명하겠다며 의기양양하게
                살았고 지금은 "그 돈이나 모을 수 있으려나?" 걱정하며 살고 있다.
                하지만 대기업, 벤처, SI, 포털 서비스를 거치며 "소프트웨어 개발은
                정말 재밌다"는 사실에 늘 감동하고 있다. 회사에 근무하는 일 외에
                소프트웨어마에스트로 멘토로 활동 중이며 그간의 실패담을 공유하여
                다른 분의 성공 가능성을 높이는 일에 흥미를 느끼고 있다. 오픈소스
                NTAF 개발에 참여 중이며 저서로 『소프트웨어 품질 관리: NHN은
                이렇게 한다!』(공저, 위키북스, 2010), 『프로그래머로 산다는
                것』(공저, 로드북, 2012)이 있다.
              </TypoGraphy>
            </Gap>
          </ContentBox>
          <Gap></Gap>

          <ContentBox>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                제목 : 프로그래머 철학을 만나다
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                주제 : 철학
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h1" fontWeight="bold">
                저자 소개 : 유석문
              </TypoGraphy>
            </Gap>
            <Gap>
              <TypoGraphy type="h3">
                한때는 개발자의 끝이 통닭집이 아님을 증명하겠다며 의기양양하게
                살았고 지금은 "그 돈이나 모을 수 있으려나?" 걱정하며 살고 있다.
                하지만 대기업, 벤처, SI, 포털 서비스를 거치며 "소프트웨어 개발은
                정말 재밌다"는 사실에 늘 감동하고 있다. 회사에 근무하는 일 외에
                소프트웨어마에스트로 멘토로 활동 중이며 그간의 실패담을 공유하여
                다른 분의 성공 가능성을 높이는 일에 흥미를 느끼고 있다. 오픈소스
                NTAF 개발에 참여 중이며 저서로 『소프트웨어 품질 관리: NHN은
                이렇게 한다!』(공저, 위키북스, 2010), 『프로그래머로 산다는
                것』(공저, 로드북, 2012)이 있다.
              </TypoGraphy>
            </Gap>
          </ContentBox>
        </Gap>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
`;
const TopBox = styled.div`
  display: flex;
  gap: 2%;
  height: 100vh;
`;
const Img = styled.img`
  flex: 1.2;
`;
const TopContent = styled.div`
  flex: 2;
  background-color: white;
  padding: 2%;
  border: 1px solid black;
`;

const ContentBox = styled.div`
  background-color: white;
  padding: 2%;
  border: 1px solid black;
`;

const Gap = styled.div`
  margin-bottom: 2%;
`;
export default PhilosophyBook;
