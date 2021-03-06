## [주의] dev 브랜치에 모든 작업이 이뤄지고 있습니다:)

[Wiki 방문하기 ( 시나리오, 시퀀스 다이어그램이 있어요~ )](https://github.com/seonjakim/OneBasket/wiki)

[하나의 장바구니 방문하기](http://onebasket.kro.kr/)

[트렐로 방문하기 ( 개발 일정과 브랜치 머지과정이 담겨있어요~ )](https://trello.com/b/rn6i7mHz/onebasket)

# Stack

![](https://images.velog.io/images/seonja/post/0a4676a0-bca5-434b-b714-9b64533f0a50/image.png)

# 목차

[최적화](#최적화)

- [React.lazy()](<#React.lazy()>)
- [Background image base64 encode](#Background-image-base64-encode)

[배포](#배포과정에서의-어려움)

<br>

# 하나의 장바구니

얼마 전 장을 보고 오던 길에 비틀거리면서 길을 가던 청년을 보고 어떻게 도와줘야 할지를 몰라 그 분이 시야에서 사라질 때까지 고민만하다 집으로 돌아왔습니다.

<br>

[![빈곤에 시달리는 프랑스 대학생, 먹거리 공유 앱의 희망](https://img.youtube.com/vi/vwxq4T479_M/0.jpg)](https://www.youtube.com/watch?v=vwxq4T479_M&ab_channel=%EC%84%B8%EA%B3%84%EB%8A%94%EC%A7%80%EA%B8%88)

<br>

그 일이 머리에서 떠나지 않던 차에 위의 다큐를 통해 독립을 일찍하는 프랑스에서는 아르바이트 자리가 없어지면서 생활이 어려운 학생들을 대상으로 식료품을 지원해 줄 수 있는 동네분들을 연결해주는 단체가 있다는 것을 알게 되었습니다.

[한 명의 학생을 위한 하나의 장바구니](https://1cabaspour1etudiant.fr/)

<br>

다른 나라의 얼굴 모르는 아이를 지원하는 것이 아니라 내 주변의 이웃을 돕는 커뮤니티가 인상 깊었고, 우리나라에도 적용이 가능한 것인지 고민하게 되었습니다. 식료품 지원 사이트뿐만 아니라 음식점이 운영 시간이 끝나고 남은 음식을 기부할 수 있는 단체가 있고 해당 단체로 남은 음식을 전달해주는 봉사자 앱 등 주변의 이웃을 돕기 위해 프랑스에서는 다양한 활동을 일반인들께서 실천하고 있었습니다.

<br>

# 프로젝트 시작

## 이슈트래킹

프론트엔드 관련 개발만 해왔던 저는 백엔드, 배포까지 한번 실습해보는 과정을 거쳐 전체적인 사이클을 돌아본 후에 사이트를 디테일하게 구상해보는 방식으로 빠른 사이클 회전이 가능하도록 계획하였습니다.

## MVP

매칭기능이 있으므로 LBS(location based service)형식으로 구현해야겠지만 우선은 빠르게 구현하여 시장이 원하는 것인지 보는 것이 중요하다고 생각하여 장바구니가 필요한 사람과 지원하고 싶은 사람을 **등록하는 페이지**와 **해당 프로젝트에 대한 설명이 포함되어 있는 페이지** 이렇게 2 페이지가 가장 주요한 기능이라고 생각하였습니다.

<br>

## 기획

![reference](https://images.velog.io/images/seonja/post/d0ac1c33-b0e0-43d7-af38-a6594a8b0ece/image.png)

![project plan](https://images.velog.io/images/seonja/post/0109e3d7-3c07-4716-8b50-d46378ebc1c5/Screen%20Shot%202021-09-22%20at%2013.31.37.png)

[Dribbble](https://dribbble.com/)의 디자인을 참고하여 디자인툴인 Figma에서 Form 형식과 Home 페이지의 틀을 대략적으로 구상하였습니다.

<br>

# 최적화

페이지 로딩시간이 너무 길어 로딩시간을 줄이기 위해 여러 가설을 가지고 최적화 방식을 적용해보았습니다.

## React.lazy()

![](https://images.velog.io/images/seonja/post/f53050d1-a9f5-472b-a68c-4504ffe5016e/image.png)

![](https://images.velog.io/images/seonja/post/960dd20d-d853-483d-bcbc-a908174ebee3/image.png)

사이트에 접속시 화면이 너무 느리게 뜨는 문제점이 있어 상대적으로 많은 코드를 담고 있는 Register 컴포넌트를 동적으로 import했습니다. 코드 자체의 변화는 적었지만 화면이 이전보다 빠르게 접속되고 퍼포먼스 또한 다소 향상된 모습을 확인할 수 있었습니다.

## Background image base64 encode

![](https://images.velog.io/images/seonja/post/2325845d-33e4-4e90-9706-423a5212761e/image.png)

[참고자료](https://bunny.net/blog/why-optimizing-your-images-with-base64-is-almost-always-a-bad-idea/)

이미지를 최적화하는 방법 중 base64로 인코딩하여 적용할 수 있다는 글을 읽은 적이 있어 base64로 인코딩하여 백그라운드 이미지에 적용해보았습니다. 이미지 자체를 가져오는 시간은 줄었지만 퍼포먼스가 낮아졌고 First Contentful Paint도 길어진 것을 확인할 수 있었습니다.

1. 다운로드 사이즈 증가

   base64로 인코딩할 경우 파일 사이즈가 25% 이상 증가한다고 합니다.

1. CPU Overhead

   브라우저가 base64로 인코딩된 이미지를 디코딩해야 하므로 불필요한 연산이 필요하게 됩니다.

1. Caching Issues

   일반 이미지의 경우 브라우저가 캐싱하여 다시 방문할 경우 빠르게 접속할 수 있는 반면 base64로 인코딩된 이미지의 경우 브라우저가 저장할 수 없습니다.

결과적으로 base64로 인코딩하는 방법은 적당하지 않다고 판단하였습니다.
