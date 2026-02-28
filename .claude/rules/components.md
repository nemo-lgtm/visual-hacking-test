# Components

---

## Starter-Kit (범용)

브랜드 독립적인 재사용 가능한 기본 UI 컴포넌트. 어떤 프로젝트에서도 확장/재사용 가능.

### Layout

- PhiSplit: 황금비 분할 레이아웃 (`components/layout/PhiSplit.jsx`)
- SplitScreen: 좌우 분할 레이아웃. ratio, stackAt, stackOrder 지원 (`components/layout/SplitScreen.jsx`)
- HeroStack: 수직 레이아웃. Hero(중앙) + Footer(하단) flex-grow 패턴 (`components/layout/HeroStack.jsx`)
- LineGrid: 그리드 아이템 사이 1px 라인 자동 삽입 (`components/layout/LineGrid.jsx`)
- CenteredAsideLayout: 중앙 + 사이드 레이아웃 (`components/layout/CenteredAsideLayout.jsx`)
- BentoGrid: 벤토 그리드 레이아웃 (`components/layout/BentoGrid.jsx`)
- RatioContainer: 비율 기반 컨테이너 (`components/layout/RatioContainer.jsx`)
- FullPageContainer: 전체 페이지 컨테이너 (`components/layout/FullPageContainer.jsx`)
- StickyBackground: 고정 배경 + 콘텐츠 스크롤 레이아웃. 배경 고정 상태로 콘텐츠 스크롤 후 전체 섹션 스크롤. framer-motion useScroll/useTransform (`components/layout/StickyBackground.jsx`)
- BrokenGridGallery: 브로큰 그리드 갤러리. 비정형 산개 레이아웃 + MouseParallax 내장. items, height, imageScale, spread, zIndex 기반 깊이감 (`components/layout/BrokenGridGallery.jsx`)

### Container

- PageContainer: 반응형 페이지 컨테이너. PC maxWidth 고정, 모바일 100% (`components/container/PageContainer.jsx`)
- SectionContainer: 페이지 섹션 컨테이너. MUI Container 기반. maxWidth, disableGutters, disablePadding, fullHeight, bgcolor, spacing 지원 (`components/container/SectionContainer.jsx`)
- ContentArea: 반응형 콘텐츠 영역. 섹션 내부에서 콘텐츠 maxWidth 제한 및 중앙 정렬. maxWidth, disableGutters 지원 (`components/container/ContentArea.jsx`)
- CarouselContainer: 캐로셀 컨테이너 (`components/container/CarouselContainer.jsx`)

### Card

- CardContainer: 카드 기본 컨테이너. variant, padding, elevation (`components/card/CardContainer.jsx`)
- CustomCard: 미디어+콘텐츠 카드. vertical/horizontal/overlay 레이아웃 (`components/card/CustomCard.jsx`)

### Input

- FileDropzone: 파일 드래그&드롭 영역 (`components/input/FileDropzone.jsx`)
- SearchBar: 검색 입력 바 (`components/input/SearchBar.jsx`)
- TagInput: 태그 입력 필드 (`components/input/TagInput.jsx`)
- BigTypographyForm: 대형 타이포그래피 기반 연락처 폼. MUI Input + 밑줄 스타일. fields, submitLabel, fontSize, accentColor 지원 (`components/input/BigTypographyForm.jsx`)
- UnderlineInput: 밑줄만 있는 텍스트 인풋. size(small/medium/large) (`components/shared/UnderlineInput.jsx`)
- UnderlineSelect: 밑줄만 있는 셀렉트. MUI Select 기반 (`components/shared/UnderlineSelect.jsx`)

### Media

- AspectMedia: 비율 기반 미디어 컨테이너 (`components/media/AspectMedia.jsx`)
- ImageCarousel: 이미지 캐로셀 (`components/media/ImageCarousel.jsx`)
- ImageTransition: 이미지 트랜지션 효과 (`components/media/ImageTransition.jsx`)
- VideoScrubbing: 비디오 스크러빙 (`components/media/VideoScrubbing.jsx`)
- VideoSlide: 가로 스크롤용 비디오 슬라이드. HorizontalScroll 내부에서 세로 스크롤 진행도 기반 비디오 스크러빙. slideIndex, totalSlides 지원 (`components/media/VideoSlide.jsx`)
- CarouselIndicator: 캐로셀 인디케이터 (`components/media/CarouselIndicator.jsx`)
- HorizontalScroll: 세로 스크롤 → 가로 이동 변환 컨테이너. framer-motion 사용 (`components/media/HorizontalScroll.jsx`)
- MaskRevealSection: 스크롤 기반 마스킹 전환. 원형 마스크 확장 + 핫스팟. framer-motion useScroll/useTransform (`components/media/MaskRevealSection.jsx`)
- HorizontalScrollSection: GSAP ScrollTrigger 기반 가로 스크롤 섹션. pin + scrub. panelCount, snap, onProgress 지원 (`components/media/HorizontalScrollSection.jsx`)

### Navigation

- NavMenu: 네비게이션 메뉴 (`components/navigation/NavMenu.jsx`)
- CategoryTab: 카테고리 탭 (`components/navigation/CategoryTab.jsx`)
- GNB: 반응형 글로벌 네비게이션 바. 데스크탑 메뉴 / 모바일 Drawer (`components/navigation/GNB.jsx`)
- AppShell: 반응형 앱 셸. GNB + 메인 콘텐츠 영역 (`components/navigation/AppShell.jsx`)

### Typography

- FitText: 컨테이너에 맞춤 텍스트 (`components/typography/FitText.jsx`)
- HighlightedTypography: 하이라이트 타이포그래피 (`components/typography/HighlightedTypography.jsx`)
- InlineTypography: 인라인 타이포그래피 (`components/typography/InlineTypography.jsx`)
- StretchedHeadline: 스트레치 헤드라인 (`components/typography/StretchedHeadline.jsx`)
- StyledParagraph: 스타일드 문단 (`components/typography/StyledParagraph.jsx`)
- Title: 타이틀 컴포넌트 (`components/typography/Title.jsx`)
- QuotedContainer: 인용 컨테이너 (`components/typography/QuotedContainer.jsx`)
- SectionTitle: 섹션 타이틀. Adamina 세리프, 중앙 정렬, 반응형 폰트 사이즈 (`components/typography/SectionTitle.jsx`)
- MarqueeText: CSS keyframes 기반 무한 수평 스크롤 텍스트. text, speed, direction, separator, repeat 지원 (`components/typography/MarqueeText.jsx`)

### Shared (범용)

- QuantitySelector: 수량 선택기. - / + 버튼과 숫자 표시 (`components/shared/QuantitySelector.jsx`)
- SelectField: 드롭다운 선택 필드. 라벨 + 선택값 + 화살표 (`components/shared/SelectField.jsx`)
- Breadcrumb: 네비게이션 경로 표시 (`components/shared/Breadcrumb.jsx`)
- ArrowLink: 화살표 링크. → 아이콘 + 텍스트 (`components/shared/ArrowLink.jsx`)
- InteractiveHotspot: 이미지 위 핫스팟. 호버 시 툴팁 노출. position, label, description, tooltipPosition, variant (`components/shared/InteractiveHotspot.jsx`)
- CustomCursor: 커스텀 마우스 커서. GSAP 기반 부드러운 추적. data-cursor="hover" 요소 위에서 확대/색상 변경. 터치 디바이스 자동 비활성화 (`components/shared/CustomCursor.jsx`)
- AudioToggle: 글로벌 오디오 토글 버튼. useAudio 훅 연동. lucide-react Volume2/VolumeX 아이콘 (`components/shared/AudioToggle.jsx`)
- LoadingAnimation: 인트로 로딩 애니메이션. GSAP Timeline 기반 브랜드명 문자 분할 stagger + 슬라이드 아웃 (`components/shared/LoadingAnimation.jsx`)
- InteractiveServiceList: 인터랙티브 서비스 리스트. GSAP 호버 스케일/색상 전환. hasNumber, hasDivider, accentColor 지원 (`components/shared/InteractiveServiceList.jsx`)

### Hooks

- useAudio: 글로벌 오디오 상태 관리 훅 + AudioProvider. Howler.js 기반 배경음악 토글, 효과음 재생 (`hooks/useAudio.jsx`)

### Pages

- Page1: 샘플 페이지 1 (`pages/Page1.jsx`)
- Page2: 샘플 페이지 2 (`pages/Page2.jsx`)
- Page3: 샘플 페이지 3 (`pages/Page3.jsx`)
- VoidframeLanding: VOIDFRAME 스튜디오 랜딩 페이지. 브루탈리즘 + 에디토리얼. GSAP 가로 스크롤, 커스텀 커서, 마키 텍스트 (`pages/VoidframeLanding.jsx`)

### Sections (Voidframe)

- HeroSection: 히어로 섹션. 대형 브랜드명 + 태그라인 + 스크롤 안내 (`sections/voidframe/HeroSection.jsx`)
- HorizontalStorySection: 가로 스크롤 스토리 섹션. 4패널 (통계/철학/접근방식/전환) (`sections/voidframe/HorizontalStorySection.jsx`)
- ServiceListSection: 서비스 리스트 섹션. InteractiveServiceList 활용 (`sections/voidframe/ServiceListSection.jsx`)
- MarqueeSection: 마키 텍스트 섹션. 3줄 무한 스크롤 텍스트 (`sections/voidframe/MarqueeSection.jsx`)
- ContactSection: 연락처 섹션. BigTypographyForm + 연락처 정보 + 푸터 (`sections/voidframe/ContactSection.jsx`)
