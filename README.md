# TL LAB

김태린의 개인 연구·창작 포트폴리오 웹사이트입니다.

방송작가, 그림책 작가, 연구자로서의 작업과  
KAIST 과학저널리즘, 구상나무 데이터 소니피케이션 연구,  
그리고 코딩 학습 과정을 한 공간에 담는 것을 목표로 제작했습니다.

---

## Features

- 반응형 웹 디자인
- 모바일 햄버거 메뉴
- 부드러운 스크롤
- 스크롤 탑 버튼
- 스크롤 시 헤더 스타일 변경
- 다크 모드
- 다크 모드 설정 localStorage 저장
- Intersection Observer 기반 스크롤 애니메이션
- GitHub API 연동
- GitHub 저장소 카드 자동 렌더링
- API 로딩 / 에러 / 빈 상태 처리
- Contact 폼 유효성 검사
- 이메일 형식 검사
- 폼 에러 / 성공 메시지 표시

---

## Sections

- Hero
- About
- Research
- Works
- Skills
- Projects
- Contact
- Footer

---

## Research

### Korean Fir Sonification

기후변화에 따른 구상나무 숲의 변화를  
데이터와 소리를 통해 탐구하는 연구를 진행하고 있습니다.

---

## Works

- Picture Books
- Illustration
- Broadcast & Documentary

---

## Technologies

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub API
- GitHub Pages

---

## JavaScript Concepts

이 프로젝트에서는 다음과 같은 JavaScript 기능을 사용했습니다.

- `querySelector`
- `querySelectorAll`
- `addEventListener`
- `classList`
- `localStorage`
- `fetch`
- `async / await`
- `try / catch`
- `map`
- 구조분해 할당
- 템플릿 리터럴
- Intersection Observer

---

## State → Render Examples

### Dark Mode

사용자 클릭  
→ 테마 상태 변경  
→ `data-theme` 변경  
→ 화면 색상 변경  
→ localStorage 저장

### GitHub Projects

API 요청  
→ Loading  
→ Success / Error / Empty  
→ Projects UI 변경

### Contact Form

사용자 입력  
→ 유효성 검사  
→ Valid / Invalid 상태 변경  
→ 에러 또는 성공 메시지 표시

---

## Interaction Settings

- Scroll Top Button: `300px`
- Header Style Change: `60px`
- Intersection Observer Threshold: `0.2`

---

## Responsive Breakpoints

- Mobile First
- Tablet: `768px`
- Desktop: `1024px`

---

## GitHub API

GitHub REST API를 사용하여 GitHub 저장소 목록을 불러옵니다.

Endpoint: `https://api.github.com/users/taelinnkim/repos`

인증 없이 사용하는 GitHub API는 시간당 요청 횟수 제한이 있으므로  
짧은 시간 내 반복적인 새로고침은 피하는 것이 좋습니다.

---

## Deployment

GitHub Pages를 사용하여 배포했습니다.

### Live Site

https://taelinnkim.github.io/tl-lab/

---

## Screenshots

### Desktop

![TL LAB Desktop](images/screenshots/desktop.png)

### Mobile

![TL LAB Mobile](images/screenshots/mobile.png)

### Dark Mode

![TL LAB Dark Mode](images/screenshots/dark-mode.png)

---

## Author

**Taelinn Kim**

Writer · Picture Book Author · Researcher

TL LAB