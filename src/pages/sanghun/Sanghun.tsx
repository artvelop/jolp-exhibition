import React from "react";
import styled from "@emotion/styled";
import { Layout, TypoGraphy, Footer } from "./components";
import talkgod from "assets/images/talkgod.png";
const Sanghun = () => {
  return (
    <Layout>
      <ContentBox>
        <BookImage />
        <RightArea>
          <BookInfo>
            책설명"'토크계의 전설'에게 배우는 말하기의 모든 것" 데뷔 이래
            지금까지 5만 명 이상을 인터뷰한 '역사상 가장 독보적인 진행자',
            마법처럼 게스트의 진심을 이끌어내는 '대화의 신', 래리 킹이 직접
            전하는 대화법 책이다. 셀 수 없는 사람들을 인터뷰하며 도출해낸 자신의
            말하기의 노하우를 고스란히 담았다. 그는 대부분의 사람들의 가장 큰
            걱정을 짚어낸다. 어떤 말로 시작해야 할지, 어떻게 대화를 지속하고
            끝내야 할지, 정말 당신이 고민하고 있는 것이 무엇인지. 말하기의
            고수란 결국 관계의 고수다. 속된 말로 '주변머리'라고 하는, 살면서
            유용한 기술을 아직 터득하지 못한 이들에게 자연스러우면서도 성공적인
            말하기 가이드, 관계의 해법을 제시한다. 특히 그가 강조하는 '진심 어린
            경청'과 '솔직함'을 무기로 상황별로 적용할 수 있는 대화의 기술을
            구체적으로 풀어놓았다. '질문만 잘해도 대화는 끊기지 않는다', '가장
            잘 아는 것을 말하라', '사람들 많은 곳에서는 1:1로 공략한다' 등
            저자가 알려주는 명확하고 단순한 솔루션과 기본 마인드에 대한 위트가
            묻어나는 조언들, 풍부한 경험을 바탕으로 아무렇지도 않은 듯 섞여
            나오는 흥미로운 사례들이 보기 좋게 어우러져 있다. 정말로 대화를
            즐긴다는 것은 무엇인지, 한 분야의 대가만이 가질 수 있는 격과 여유를
            그대로 느끼고 배울 수 있을 것이다.
          </BookInfo>
          <MyOpinion>
            나의 의견 책설명"'토크계의 전설'에게 배우는 말하기의 모든 것" 데뷔
            이래 지금까지 5만 명 이상을 인터뷰한 '역사상 가장 독보적인 진행자',
            마법처럼 게스트의 진심을 이끌어내는 '대화의 신', 래리 킹이 직접
            전하는 대화법 책이다. 셀 수 없는 사람들을 인터뷰하며 도출해낸 자신의
            말하기의 노하우를 고스란히 담았다. 그는 대부분의 사람들의 가장 큰
            걱정을 짚어낸다. 어떤 말로 시작해야 할지, 어떻게 대화를 지속하고
            끝내야 할지, 정말 당신이 고민하고 있는 것이 무엇인지. 말하기의
            고수란 결국 관계의 고수다. 속된 말로 '주변머리'라고 하는, 살면서
            유용한 기술을 아직 터득하지 못한 이들에게 자연스러우면서도 성공적인
            말하기 가이드, 관계의 해법을 제시한다. 특히 그가 강조하는 '진심 어린
            경청'과 '솔직함'을 무기로 상황별로 적용할 수 있는 대화의 기술을
            구체적으로 풀어놓았다. '질문만 잘해도 대화는 끊기지 않는다', '가장
            잘 아는 것을 말하라', '사람들 많은 곳에서는 1:1로 공략한다' 등
            저자가 알려주는 명확하고 단순한 솔루션과 기본 마인드에 대한 위트가
            묻어나는 조언들, 풍부한 경험을 바탕으로 아무렇지도 않은 듯 섞여
            나오는 흥미로운 사례들이 보기 좋게 어우러져 있다. 정말로 대화를
            즐긴다는 것은 무엇인지, 한 분야의 대가만이 가질 수 있는 격과 여유를
            그대로 느끼고 배울 수 있을 것이다.
          </MyOpinion>
        </RightArea>
      </ContentBox>
      <Slider />
    </Layout>
  );
};

const ContentBox = styled.div`
  width: 1178px;
  height: 1800px;
  background-color: green;
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 50px;
`;

type StyleProp = {
  bookSrc?: string;
  width?: string;
};

const BookImage = styled.image<StyleProp>`
  width: 400px;
  height: 480px;
  background-color: orange;
  /* width: ${(props) => props.width}px; */
  background: url("/sanghun/img/talkgod.png");
`;

const BookInfo = styled.div`
  width: 700px;
  height: auto;
  background-color: yellow;
`;

const MyOpinion = styled.div`
  width: 700px;
  background-color: blue;
`;

const RightArea = styled.div`
  width: 700px;
  height: 480px;
  background-color: white;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Slider = styled.div`
  width: 1000px;
  height: 80px;
  background-color: pink;
  margin-top: 10px;
`;
export default Sanghun;
