var i = 1;

var testNum = {
  1: {
    title: "문제 1번",
    description: "내일 첫 출근(새학기)이다. 내 속마음은?",
    type: "EI",
    A: "뭔지 모를 설레임. 새로운 환경과 사람들 만날 생각에 들뜬다.",
    B: "뭔지 모를 걱정. 새로운 환경에 어떻게 적응할지 걱정된다.",
  },
  2: {
    title: "문제 2번",
    description: "모임에서 3시간동안 수다를 떨고온 나는?",
    type: "EI",
    A: "즐거웠다. 사람들 만나는 시간은 늘 새로워><",
    B: "힘들었다. 얼른 집에가서 넷플릭스 보면서 쉬어야지!",
  },
  3: {
    title: "문제 3번",
    description: "약속없는 주말 집에만 있는 나는?",
    type: "EI",
    A: "심심하다. 뭐라도 하러 나가고 싶다.",
    B: "너무 좋다. 내 세상이로구나~!",
  },
  4: {
    title: "문제 4번",
    description: "취직(이직) 전 내가 가장 기대하는 것은?",
    type: "SN",
    A: "입사하자마자 받게될 연봉. 직장은 돈버는 곳이지!",
    B: "회사에서 쌓게될 나의 커리어. 나는 성장에 목말라!",
  },
  5: {
    title: "문제 5번",
    description: "베스킨 라빈스에서 아이스크림을 고를 때 나는?",
    type: "SN",
    A: "늘 먹던걸로. 믿고 먹는 그맛!",
    B: "안먹어본 메뉴. 저건 무슨 맛일지 너무 궁금!",
  },
  6: {
    title: "문제 6번",
    description: "만약 좀비가 나타난다면 나는?",
    type: "SN",
    A: "쓸데없는 상상 금지. 그런 일 일어나지 않는다.",
    B: "생존 전략 구상. 식량부터 챙기고 가족들에게 전화를...",
  },
  7: {
    title: "문제 7번",
    description: "친구에게 고민을 털어놓았을 때 내가 바라는 것은?",
    type: "TF",
    A: "대안이나 해결책. 같이 고민해주는 사람이 필요해!",
    B: "위로와 응원. 같이 공감해주는 사람이 필요해!",
  },
  8: {
    title: "문제 8번",
    description: "친한 동료가 상사(교수)에게 까이고 있는 걸 본 나는?",
    type: "TF",
    A: "궁금하다. 무엇 때문에 까이는건지",
    B: "걱정된다. 까이면서 기분이 어떨지",
  },
  9: {
    title: "문제 9번",
    description: "친구가 나랑 성격이 안 맞는다고 한다면?",
    type: "TF",
    A: "이유가 궁금. 뭐가 안맞는거 같아?",
    B: "일단 서운함. 내가 뭐 잘못했니? ㅜㅜ",
  },
  10: {
    title: "문제 10번",
    description: "내 컴퓨터를 켰을 때 볼 수 있는 것은?",
    type: "JP",
    A: "주제별로 정리된 폴더. 지저분한건 못참지!",
    B: "파일들의 대환장 파티. 정리를 왜 함? 나만 편하면 돼!",
  },
  11: {
    title: "문제 11번",
    description: "내 폰에 쌓인 알림들을 봤을 때 나는?",
    type: "JP",
    A: "다 읽음처리. 알림아 이만 사라져줘...",
    B: "신경안씀. 알림이 쌓였나?",
  },
  12: {
    title: "문제 12번",
    description: "모처럼 쉬는날 내가 하는 일은?",
    type: "JP",
    A: "해야될 일 먼저. 밀린 집안일 먼저하고 편하게 쉰다.",
    B: "하고싶은 일 먼저. 집안일이 밀렸지만 쉬는게 더 중요하다.",
  },
};

var result = {
  INTJ: {
    img: "intj.jpeg",
    mbti: "INTJ",
    job_slogan: "'반박 불가 팩트 폭격기'",
    job_name: "데이터 분석가",
    job_explain:
      "데이터 분석가는 데이터 분석을 통해 사업적 인사이트를 도출하고 합리적인 의사결정을 내릴 수 있도록 돕는 직군입니다. 조직에 필요한 데이터를 정의하고 수많은 데이터의 홍수 속에서 보석과 같은 인사이트를 찾고자 끊임없이 분석하죠.<br><br>INTJ인 당신은 체계적이고 분석적이며, 최선의 해결책을 찾는데 누구보다 열성적입니다. 비효율적인 문제를 가만두지 못하는 당신은 데이터 분석가가 되기에 최적의 자질을 가졌습니다.",
    list1: "기초 데이터베이스 지식 : SQL",
    list2: "데이터 분석을 위한 통계적 지식",
    list3: "분석 툴 활용 능력 : Python, R",
    list4: "비즈니스, 도메인 지식",
  },
  INTP: {
    img: "intp.jpeg",
    mbti: "INTP",
    job_slogan: "'4차 산업 혁명의 주역'",
    job_name: "인공지능 개발자",
    job_explain:
      "인공지능 개발자는 대량의 데이터를 스스로 학습하고 처리할 수 있는 인공지능을 구현하는 기술자입니다. 인공지능은 사람이 할 수 없는 대량의 데이터를 처리하고 최적의 의사결정을 예측하여 서비스를 고도화하는데 꼭 필요합니다. <br><br>INTP인 당신은 뛰어난 정보 습득력이 왕성한 지적 호기심을 가졌습니다. 데이터, 확률과 통계, 수학, 등 심도 높은 이해가 필요한 인공지능 개발은 어쩌면 당신만이 할수 있는 일일지도 모릅니다.",
    list1: "딥러닝에 대한 이해",
    list2: "전산학, 수학 지식",
    list3: "프로그래밍 역량 : Python 등",
    list4: "딥러닝 도구 활용 : TensorFlow, PyTorch 등",
  },
  ENTJ: {
    img: "entj.jpeg",
    mbti: "ENTJ",
    job_slogan: "'스티브 잡스의 후예들'",
    job_name: "프로덕트 오너",
    job_explain:
      "프로덕트 오너는 프로덕트가 지속적인 성장을 할 수 있도록 나아갈 방향을 제시하고 조직을 이끄는 리더입니다. 고객과 조직, 비즈니스 목표를 고려하여 프로덕트의 요구사항과 우선순위를 정의하고 프로젝트의 모든 과정을 주도합니다.<br><br>ENTJ인 당신은 거시적인 비전을 제시하고 조직을 통솔하고 추진하는데 탁월한 능력을 보입니다. 프로덕트의 시작과 끝을 책임지며 이에 필요한 모든 자원을 관리하기 위해선 당신이 지닌 리더쉽이 꼭 필요한 직군입니다.",
    list1: "사업에 대한 이해 : 비즈니스 모델, 도메인 지식 등",
    list2: "프로젝트 관리 능력 : 조직, 일정, 예산",
    list3: "데이터 활용 능력 : GA, Tableau, Amplitude 등",
    list4: "비즈니스 커뮤니케이션 역량 (경영진, 개발팀, 고객 등)",
  },
  ENTP: {
    img: "entp.jpeg",
    mbti: "ENTP",
    job_slogan: "'개발과 운영 체계를 혁신하는'",
    job_name: "데브옵스 엔지니어",
    job_explain:
      "데브옵스 엔지니어는 ‘개발 - 배포 - 운영’에 이르는 프로세스를 개선하여 고품질의 서비스를 신속하게 제공하고 운영 대응력을 향상시킵니다. 개발 환경에서의 문제점이나 개선 여지를 발견하고 끊임없이 기술적인 해결책을 제시하고 시도해야 합니다.<br><br>ENTP인 당신은 구상한 것을 실현시키고자 하는 혁명가적 기질과 다양한 관점에서 상황을 바라보는 성향을 가지고 있어 뛰어난 데브옵스 엔지니어가 될 자질을 가졌습니다.",
    list1: "CI/CD 개념에 대한 이해",
    list2: "자동화 프로그래밍 역량",
    list3: "코드를 통한 인프라 관리 : Terraform, Packer 등",
    list4: "AWS Devops 서비스 경험",
  },
  INFJ: {
    img: "infj.jpeg",
    mbti: "INFJ",
    job_slogan: "'모든 서비스는 나에게서 시작된다.'",
    job_name: "서비스 기획자",
    job_explain:
      "서비스 기획자는 경영진 또는 고객의 요구사항을 파악하고 이를 반영하여 실제 서비스 구조를 설계하는 직군입니다. 서비스가 구현을 넘어 실제 운영될 수 있도록 설계하고 개발이 되기까지 다양한 이해 관계자와 끊임없이 소통해야하죠.<br><br>INFJ인 당신은 사람의 심리를 파악하고 이해하는 통찰력이 발달했습니다. 행동과 권유를 통해 사람을 따르게 만드는 지도력을 갖춘 당신은 다양한 이해 관계자를 이끌 수 있는 서비스 기획자가 될 것 입니다.",
    list1: "화면 설계서(Story Board) 작성 능력",
    list2: "주변 사람을 논리적으로 설득할 수 있는 커뮤니케이션 능력",
    list3: "데이터에 기반한 논리적 사고력",
    list4: "기술과 IT 서비스에 대한 이해",
  },
  INFP: {
    img: "infp.jpeg",
    mbti: "INFP",
    job_slogan: "'고객의 눈과 귀를 사로집는 그들'",
    job_name: "콘텐츠 마케터",
    job_explain:
      "콘텐츠 마케터는 공감대를 자극하는 콘텐츠(글, 그림, 영상)로 잠재 고객을 고객으로 만들어내는 직군입니다. 제공하는 서비스의 가치를 한 줄의 문장, 한 장의 이미지, 한편의 영상으로 잠재 고객들의 눈과 귀를 사로잡아야 하죠.<br><br>INFP인 당신은 유연한 사고와 누구보다 풍부한 감수성을 가졌습니다. 당신의 뛰어난 창의력과 정서적 공감 능력은 진정성 있는 콘텐츠를 만들고 고객들의 공감을 이끌어내는데 가장 필요한 역량입니다.",
    list1: "카피라이팅 능력",
    list2: "제작 툴 활용 : 포토샵, 프리미어, 일러스트 등",
    list3: "트렌드 파악 능력 : SNS, 콘텐츠, 소비 등",
    list4: "SEO에 대한 이해",
  },
  ENFJ: {
    img: "enfj.jpeg",
    mbti: "ENFJ",
    job_slogan: "'회사는 내가 먹여살린다!'",
    job_name: "기술 영업 매니저",
    job_explain:
      "기술 영업 매니저는 기업이 제공하는 제품의 가치를 잠재고객들에게 전달하여 구매를 이끌어내는 직군입니다. 기술에 대한 이해를 바탕으로 고객들의 Pain Point를 파악하고 제품의 가치와 비전을 전달하여 핵심 고객으로 만들어야하죠.<br><br> ENFJ인 당신은 특유의 설득력 있는 언변과 외교력으로 사람을 이끄는데 뛰어난 기지를 발휘합니다. 이러한 카리스마와 커뮤니케이션 능력을 갖춘 당신은 타고난 세일즈 리더입니다.",
    list1: "내가 판매하는 제품에 대한 이해",
    list2: "인싸력과 설득력을 겸비한 커뮤니케이션 역량",
    list3: "상황 대처 능력 : 임기 응변, 리스크 관리",
    list4: "외국어 능력",
  },
  ENFP: {
    img: "enfp.jpeg",
    mbti: "ENFP",
    job_slogan: "'고객을 팬으로 바꾸는 그들'",
    job_name: "브랜드 마케터",
    job_explain:
      "브랜드 마케터는 늘 사람의 중심에서 사람을 위한 일을 합니다. 기업이 가지고 있는 비전과 가치를 최대한 많은 사람이 이해하고 공감할 수 있도록 하는 다양한 마케팅 활동이 그들을 중심으로 펼쳐집니다. 늘 고객과 시장 트렌드에 밝아야 하죠.<br><br>ENFP인 당신은 천성적으로 열정적인 에너지와 풍부한 상상력을 가진 분입니다. 끊임없이 새로운 시도를 하고 재빠르게 문제를 해결하는 당신은 분명 타고난 브랜드 마케터일 것입니다.",
    list1: "시장(고객, 경쟁사) 조사 및 분석 능력",
    list2: "트렌드를 놓치지 않는 인싸력",
    list3: "미디어 및 광고 시장에 대한 이해",
    list4: "커뮤니케이션 역량",
  },
  ISTJ: {
    img: "istj.jpeg",
    mbti: "ISTJ",
    job_slogan: "'빈틈없는 버그 살인마'",
    job_name: "QA 엔지니어",
    job_explain:
      "QA 엔지니어는 개발된 프로덕트가 제대로 작동하는지, 오류나 버그는 없는지 찾아내는 최후방 문지기들입니다. 프로덕트가 온전한 상태로 고객에게 제공될 수 있도록, 발생할 수 있는 모든 케이스를 정의하고 검수하여 문제점을 발견해냅니다.<br><br>ISTJ인 당신은 구체적으로 목표를 설정하고 체계적으로 일하는 성향을 가졌습니다.  한치의 실수도 용납하지 않는 신중함과 책임감으로 똘똘 뭉친 당신은 누구보다 뛰어난 QA 엔지니어가 될 수 있습니다.",
    list1: "테스트 설계 및 테스트 케이스 개발 역량",
    list2: "검증 프로세스에 대한 이해",
    list3: "QA 관련 자격증 : ISTQB, CSTS",
    list4: "APP, Web의 동작 원리, 네트워크 환경에 대한 이해",
  },
  ISFJ: {
    img: "isfj.jpeg",
    mbti: "ISFJ",
    job_slogan: "'고객들의 수호천사'",
    job_name: "CX 매니저",
    job_explain:
      "CX 매니저는 고객의 이용 내역을 추적하여 그들의 만족도나 불편 사항을 포착하고 고객 경험을 개선하는 직군입니다. 조직 내에서 가장 고객과 가까이 있는 존재이며, 고객의 목소리를 대변하여 서비스가 고객이 만족할 수 있는 방향으로 개선될 수 있도록 서포트합니다.<br><br>ISFJ인 당신은 감정 공감 능력과 인내심이 그 누구보다 뛰어납니다. 소중한 사람을 위해 헌신할 수 있는 용기를 지녔기에 냉철한 조직에 맞서 고객의 편에서는 든든한 수호천사입니다.",
    list1: "고객 커뮤니케이션 역량",
    list2: "응대 메뉴얼 및 정책 수립 역량",
    list3: "공감 능력과 문제 해결 능력",
    list4: "고객 경험 설계에 대한 이해",
  },
  ESTJ: {
    img: "estj.jpeg",
    mbti: "ESTJ",
    job_slogan: "'데이터 세상의 조물주'",
    job_name: "데이터 엔지니어",
    job_explain:
      "데이터 엔지니어는 빅데이터 환경을 위해 데이터 인프라를 구축하고 관리하는 직군입니다. 조직 내 데이터를 필요로하는 다양한 동료들과 소통하며 요구되는 데이터들이 잘 수집, 저장 될 수 있도록 파이프라인과 저장소를 구축하고 관리합니다.<br><br>ESTJ인 당신은 구체적인 목표를 설정하고 계획을 추진하는 능력은 타의 추종을 불허하며, 구조적이고 체계화된 사고에 능한 당신의 역량이 최고로  발휘될 수 있는 직군입니다.",
    list1: "기초 데이터베이스 이해 : SQL",
    list2: "DBMS 개발 및 운영 능력",
    list3: "빅데이터 플랫폼 역량 : Hadoop, Spark 등",
    list4: "프로그래밍 역량 : Python, java 등",
  },
  ESFJ: {
    img: "esfj.jpeg",
    mbti: "ESFJ",
    job_slogan: "'고객의 행복을 디자인한다.'",
    job_name: "UX 디자이너",
    job_explain:
      "UX 디자이너는 사람의 행동과 심리에 대한 이해를 바탕으로 고객에게 최고의 사용 경험을 제공할 수 있는 서비스를 설계하는 직군입니다. 고객이 서비스를 이용하는 동안 불편을 느끼지 않도록 고객의 행동 패턴을 끊임없이 추적하고 개선합니다.<br><br>ESFJ인 당신은 사람에 대한 관찰력과 공감 능력이 발달한 타고난 협력자입니다. 기본적으로 사람의 심리를 능숙하게 파악할 수 있는 당신은 UX 디자이너가 되기에 좋은 조건을 가졌습니다.",
    list1: "고객과 경쟁 제품에 대한 분석 능력",
    list2: "디자인 툴 활용 능력 : 피그마, 프로토파이, XD 등",
    list3: "그래픽 디자인 역량",
    list4: "와이어프레임, 프로토타입 제작 역량",
  },
  ISTP: {
    img: "istp.jpeg",
    mbti: "ISTP",
    job_slogan: "'성공은 숫자로 입증한다.'",
    job_name: "퍼포먼스 마케터",
    job_explain:
      "퍼포먼스 마케터는 디지털 매체에서 이루어지는 마케팅을 주도하며 데이터를 기반으로 마케팅 효율을 개선하는 마케팅계의 연금술사입니다. 광고 소재 기획부터 광고 집행, 성과 분석 및 개선 등 디지털 광고의 A to Z를 담당하기에 다양한 툴 활용 능력 및 고객과 매체에 대한 통찰력이 필요합니다.<br><br>ISTP인 당신은 다양한 도구를 수월하게 사용하는 뛰어난 적응력과 논리적인 분석력을 겸비하였기에 퍼포먼스 마케터로 좋은 역량을 가졌습니다.",
    list1: "광고 매체 운용 능력 : 구글, 페이스북, 네이버",
    list2: "디지털 광고 생태계에 대한 이해",
    list3: "BI 툴 활용 : 앱스플라이어, GA 등",
    list4: "분석 및 문제 해결 능력",
  },
  ISFP: {
    img: "isfp.jpeg",
    mbti: "ISFP",
    job_slogan: "'기술에 감성을 더한다.'",
    job_name: "UI 디자이너",
    job_explain:
      "UI 디자이너는 디지털 프로덕트에서 시각적으로 보여지는 부분들을 책임지며 고객들에게 심미적인 만족도를 제공하는 직군입니다. 또한 기업의 아이덴티티를 시각적 요소로 고객에게 전달해야 하기 때문에 도형이나 색을 배합하고 균형을 이룰 줄 아는 능력이 매우 중요합니다.<br><br>ISFP인 당신은 틀에 묶이지 않은 개방적 사고와 풍부한 감수성으로 예술가적 기질이 충만한 분입니다. 그렇기에 UI 디자인은 당신이 제일 잘 할 수 있는 분야입니다.",
    list1: "그래픽 디자인 역량",
    list2: "디자인 트렌드 파악 능력",
    list3: "디자인 툴 활용 능력 : 피그마, 스케치, XD 등",
    list4: "와이어프레임, 프로토타입 제작 역량",
  },
  ESTP: {
    img: "estp.jpeg",
    mbti: "ESTP",
    job_slogan: "'IT 산업의 빛과 소금'",
    job_name: "백엔드 개발자",
    job_explain:
      "백엔드 개발자는 데이터 베이스, 서버 등 서비스가 운영되는데 필요한 인프라를 구축하고 운영합니다. 서비스가 운영되는 과정에서 발생하는 다양한 서버 문제를 해결하고 기업의 요구사항과 기술적 현실 속에 적절한 타협점을 찾아 해결하는 문제의 해결사들 입니다.<br><br>ESTP인 당신은 강한 현실 감각을 지녀 타협책을 모색하고 해결책을 찾는 능력이 아주 뛰어납니다. 그렇기에 백엔드 개발자는 당신이 가장 잘할 수 있는 직군입니다.",
    list1: "백엔드 개발 및 운영 역량",
    list2: "백엔드 개발 언어 : NodeJS, Django, Ruby 등",
    list3: "AWS 등 클라우드 환경에 대한 이해",
    list4: "데이터 베이스에 대한 이해",
  },
  ESFP: {
    img: "esfp.jpeg",
    mbti: "ESFP",
    job_slogan: "'개발 조직의 최전방 공격수'",
    job_name: "프론트엔드 개발자",
    job_explain:
      "프론트엔드 개발자는 고객이 실제로 접하는 서비스 인터페이스와 백엔드에서 가져오는 데이터의 입출력을 구현하는 최전방 개발자입니다. 프론트엔드 개발은 새로운 기술과 트렌드의 변화가 빠른 분야이기에 더 나은 프로덕트를 제공하기 위해서 변화에 계속해서 적응해나가야 합니다.<br><br>ESFP인 당신은 변화에 빠르게 적응하며 도전을 두려워하지 않는 성격입니다. 선천적으로 유행에도 민감하기에 프론트엔드 개발에 적합합니다.",
    list1: "프론트엔드 개발 언어 : Kotlin, Swift, Javascript 등",
    list2: "UX에 대한 이해",
    list3: "기술 트렌드 파악",
    list4: "커뮤니케이션 역량 (디자이너, 기획자 등)",
  },
};

//테스트 시작함수
var testStart = function () {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#test").style.display = "block";
  next();
  dataLayer.push({
    event: "start",
  });
};

document.querySelector("#start_btn").addEventListener("click", testStart);

//테스트 다시시작
var retry = function () {
  document.querySelector("#result").style.display = "none";
  document.querySelector("#main").style.display = "block";
  i = 1;
  EI.value = SN.value = TF.value = JP.value = 0;
  history.replaceState({}, null, location.pathname);
  next();
  dataLayer.push({
    event: "retry",
  });
};

document.querySelector("#retry_btn").addEventListener("click", retry);

//타입 선택을 위한 함수
document.querySelector("#A").addEventListener("click", function () {
  var type = document.querySelector("#type").value;
  var preValue = document.querySelector("#" + type).value;
  document.querySelector("#" + type).value = preValue + 1;
  next();
  dataLayer.push({
    event: "select_answer",
    answer: "A",
  });
});

document.querySelector("#B").addEventListener("click", function () {
  next();
  dataLayer.push({
    event: "select_answer",
    answer: "B",
  });
});

//문제 넘기기 + 결과 도출 함수
var next = function () {
  if (i == 13) {
    document.querySelector("#test").style.display = "none";
    document.querySelector("#result").style.display = "block";
    var mbti = "";
    if (document.querySelector("#EI").value < 2) {
      mbti += "I";
    } else {
      mbti += "E";
    }
    if (document.querySelector("#SN").value < 2) {
      mbti += "N";
    } else {
      mbti += "S";
    }
    if (document.querySelector("#TF").value < 2) {
      mbti += "F";
    } else {
      mbti += "T";
    }
    if (document.querySelector("#JP").value < 2) {
      mbti += "P";
    } else {
      mbti += "J";
    }
    console.log(mbti);
    document.querySelector("#mymbti").innerHTML = result[mbti]["mbti"];
    document
      .querySelector("#result_img")
      .setAttribute("src", "img/result_img/" + result[mbti]["img"]);
    document.querySelector("#job_slogan").innerHTML =
      result[mbti]["job_slogan"];
    document.querySelector("#job_name").innerHTML = result[mbti]["job_name"];
    document.querySelector("#job_explain").innerHTML =
      result[mbti]["job_explain"];
    document.querySelector("#list1").innerHTML = result[mbti]["list1"];
    document.querySelector("#list2").innerHTML = result[mbti]["list2"];
    document.querySelector("#list3").innerHTML = result[mbti]["list3"];
    document.querySelector("#list4").innerHTML = result[mbti]["list4"];
    history.replaceState(
      {
        result: result,
      },
      "",
      "?result=" + mbti
    );
    dataLayer.push({
      event: "test_complete",
      mbti: mbti,
      result_name: result[mbti]["job_name"],
    });
    // MBTI 결과 쿼리 파라미터 삽입
  } else {
    document.querySelector("#number").innerHTML = i + "/12";
    document.querySelector("#progress").style.width = (i / 12) * 100 + "%";
    document.querySelector("#title").innerHTML = testNum[i]["title"];
    document.querySelector("#description").innerHTML =
      testNum[i]["description"];
    document.querySelector("#type").value = testNum[i]["type"];
    document.querySelector("#A").innerHTML = testNum[i]["A"];
    document.querySelector("#B").innerHTML = testNum[i]["B"];
    dataLayer.push({
      event: "view_question",
      question_no: i,
    });
    i++;
  }
};

// 쿼리 파라미터 값이 있을 경우 결과 페이지로 직접 이동
var shareParams = new URL(location.href).searchParams.get("result");
if (Object.keys(result).includes(shareParams) === true) {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#result").style.display = "block";
  var mbti = shareParams;
  // 이 아래를 바꿔야 합니다
  document.querySelector("#job_explain").innerHTML =
    result[mbti]["job_explain"];
  document
    .querySelector("#result_img")
    .setAttribute("src", "img/result_img/" + result[mbti]["img"]);
}

// 카카오 SDK 초기화
Kakao.init("02783a6e0acbf6751f48aba90cb006aa");
Kakao.isInitialized();

// 카톡 공유 실행 함수
var kakaoShare = function () {
  dataLayer.push({
    event: "kakao_share",
  });

  var title = document.querySelector("#mymbti").textContent;
  var desc = document.querySelector("#job_explain").textContent;
  var imgUrl = document.querySelector("#result_img").src;
  var mbti = new URL(location.href).searchParams.get("result");

  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: title,
      description: desc,
      imageUrl: imgUrl,
      link: {
        mobileWebUrl: "https://it-mbti.com?reslt=" + mbti,
      },
    },
    buttons: [
      {
        title: "결과 확인",
        link: {
          mobileWebUrl: "https://it-mbti.com?result=" + mbti,
          webUrl: "https://it-mbti.com?result=" + mbti,
        },
      },
      {
        title: "테스트하기",
        link: {
          mobileWebUrl: "https://it-mbti.com",
          webUrl: "https://it-mbti.com",
        },
      },
    ],
  });
};

document.querySelector("#share_btn").addEventListener("click", kakaoShare);

// 결과 링크 복사 함수
function clip() {
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("링크가 복사되었습니다. 테스트 결과를 친구들에게 공유해보세요:)");
  dataLayer.push({
    event: "link_copy",
  });
}
