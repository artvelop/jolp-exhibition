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
            <Content>
              <TypoGraphy type="h1" fontWeight="bold">
                제목 : {philosophy.name}
              </TypoGraphy>
            </Content>
            <Content>
              <TypoGraphy type="h1" fontWeight="bold">
                주제 : {philosophy.subject}
              </TypoGraphy>
            </Content>
            <Content>
              <TypoGraphy type="h1" fontWeight="bold">
                저자 소개 : {philosophy.author}
              </TypoGraphy>
              <Gap />
              <TypoGraphy type="h3" fontHeight="24px">
                {philosophy.authorInfo}
              </TypoGraphy>
            </Content>
            <Content>
              <TypoGraphy type="h1" fontWeight="bold">
                줄거리
              </TypoGraphy>
              <Gap />
              <TypoGraphy type="h3" fontHeight="24px">
                {philosophy.summary}
              </TypoGraphy>
            </Content>
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
const Content = styled.div`
  margin-bottom: 2%;
  border: 1px solid black;
  padding: 2%;
`;

export default PhilosophyBook;
