var i = 1;

var testNum = {
  "1": {
    "title": "문제 1번",
    "description": "내일 첫 출근(새학기)이다. 내 속마음은?",
    "type": "EI",
    "A": "뭔지 모를 설레임. 새로운 환경과 사람들 만날 생각에 들뜬다.",
    "B": "뭔지 모를 걱정. 새로운 환경에 어떻게 적응할지 걱정된다."
  },
  "2": {
    "title": "문제 2번",
    "description": "모임에서 3시간동안 수다를 떨고온 나는?",
    "type": "EI",
    "A": "즐거웠다. 사람들 만나는 시간은 늘 새로워><",
    "B": "힘들었다. 얼른 집에가서 넷플릭스 보면서 쉬어야지!"
  },
  "3": {
    "title": "문제 3번",
    "description": "약속없는 주말 집에만 있는 나는?",
    "type": "EI",
    "A": "심심하다. 뭐라도 하러 나가고 싶다.",
    "B": "너무 좋다. 내 세상이로구나~!"
  },
  "4": {
    "title": "문제 4번",
    "description": "취직(이직) 전 내가 가장 기대하는 것은?",
    "type": "SN",
    "A": "입사하자마자 받게될 연봉. 직장은 돈버는 곳이지!",
    "B": "회사에서 쌓게될 나의 커리어. 나는 성장에 목말라!"
  },
  "5": {
    "title": "문제 5번",
    "description": "베스킨 라빈스에서 아이스크림을 고를 때 나는?",
    "type": "SN",
    "A": "늘 먹던걸로. 믿고 먹는 그맛!",
    "B": "안먹어본 메뉴. 저건 무슨 맛일지 너무 궁금!"
  },
  "6": {
    "title": "문제 6번",
    "description": "만약 좀비가 나타난다면 나는?",
    "type": "SN",
    "A": "쓸데없는 상상 금지. 그런 일 일어나지 않는다.",
    "B": "생존 전략 구상. 식량부터 챙기고 가족들에게 전화를..."
  },
  "7": {
    "title": "문제 7번",
    "description": "취준(이직)의 고충을 친구에게 털어놓았을 때 내가 바라는 것은?",
    "type": "TF",
    "A": "대안이나 해결책. 같이 고민해주는 사람이 필요해!",
    "B": "위로와 응원. 같이 공감해주는 사람이 필요해!"
  },
  "8": {
    "title": "문제 8번",
    "description": "친한 동료가 상사(교수)에게 까이고 있는 걸 본 나는?",
    "type": "TF",
    "A": "궁금하다. 무엇 때문에 까이는건지",
    "B": "걱정된다. 까이면서 기분이 어떨지"
  },
  "9": {
    "title": "문제 9번",
    "description": "친구가 나랑 성격이 안 맞는다고 한다면?",
    "type": "TF",
    "A": "이유가 궁금. 뭐가 안맞는거 같아?",
    "B": "일단 서운함. 내가 뭐 잘못했니? ㅜㅜ"
  },
  "10": {
    "title": "문제 10번",
    "description": "내 컴퓨터를 켰을 때 볼 수 있는 것은?",
    "type": "JP",
    "A": "주제별로 정리된 폴더. 지저분한건 못참지!",
    "B": "파일들의 대환장 파티. 정리를 왜 함? 나만 편하면 돼!"
  },
  "11": {
    "title": "문제 11번",
    "description": "내 폰에 쌓인 알림들을 봤을 때 나는?",
    "type": "JP",
    "A": "다 읽음처리. 알림아 이만 사라져줘...",
    "B": "신경안씀. 알림이 쌓였나?"
  },
  "12": {
    "title": "문제 12번",
    "description": "모처럼 쉬는날 내가 하는 일은?",
    "type": "JP",
    "A": "해야될 일 먼저. 밀린 집안일 먼저하고 편하게 쉰다.",
    "B": "하고싶은 일 먼저. 집안일이 밀렸지만 내가 쉬는게 더 중요하다."
  }
};

var result = {
  "INTJ": {
    "mbti": "INTJ",
    "job_name": "데이터 분석가",
    "img": "intj.jpeg",
    "explain": "INTJ인 당신은 체계적이고 분석적인 사고 능력이 발달한 분입니다.<br>문제를 해결하려는 욕구가 강하며 그 것도 최선의 합리적 해결책을 찾는데 누구보다 열성적입니다.<br><br>데이터 분석가는 수집되는 데이터를 기반으로 유의미한 사업적 인사이트를 도출하고 데이터에 기반한 의사결정을 내릴 수 있도록 돕는 직군입니다. 서비스에 필요로하는 데이터를 정의하고 수많은 데이터의 홍수 속에서 보석과 같은 인사이트를 찾기위해 끊임없이 가설을 검증하고 결론을 도출하는 과정을 반복합니다.<br><br>비효율적인 문제를 가만두지 못하는 당신은 가장 합리적인 해결책을 찾아 주는 최고의 비즈니스 서포터입니다."
  },
  "INTP": {
    "mbti": "INTP",
    "job_name": "머신러닝 개발자",
    "img": "intp.jpeg",
    "explain": "INTP인 당신은 논리적 사고와 정보 습득력이 발달한 분입니다.<br>어떠한 것이 갖고 있는 잠재력과 가능성에 집중하며 그 가능성을 발현하기 위해 끊임없는 호기심으로 탐구하고 학습합니다.<br><br>머신러닝 개발자는 알고리즘 설계를 통해 대량의 데이터를 스스로 학습하고 전처리하는 머신러닝 모델을 구축하는 기술자입니다. 머신러닝은 사람이 처리하기 힘든 대량의 데이터를 흡수해 패턴과 상관관계를 발견하고 최적의 의사결정을 예측하여 서비스를 한층 고도화하는데 필수요소입니다.<br><br>머신러닝 개발에는 데이터, 확률과 통계, 수학, 알고리즘에 대한 심도 높은 이해가 필요하므로 왕성한 지적 호기심으로 연구에 뛰어난 자질을 가진 당신만이 할수 있는 일일지도 모릅니다."
  },
  "ENTJ": {
    "mbti": "ENTJ",
    "job_name": "프로덕트 매니저",
    "img": "entj.jpeg",
    "explain": "ENTJ인 당신은 강단있는 지도력과 통솔력이 발달한 분입니다.<br>장기 계획과 거시적 비전을 제시하고 체계적으로 조직화하여 추진하는데 탁월한 능력을 보입니다.<br><br>프로덕트 매니저는 프로덕트가 고객에게 더나은 가치를 제공하고 탄탄한 비즈니스 모델을 탑재하여 지속적인 성장을 할 수 있도록 나아갈 방향을 설정하고 조직을 이끄는 역할입니다. 고객에 대한 이해, 활용 가능 자원, 비즈니스 목표를 고려하여 프로덕트의 요구사항과 우선순위를 정의하고 구성원이 수행해야할 미션과 목표를 제시합니다.<br><br>프로덕트의 시작과 끝을 책임지며 이에 필요한 모든 자원을 관리하기 위해선 당신이 지닌 추진력과 리더쉽이 꼭 필요한 직군입니다."
  },
  "ENTP": {
    "mbti": "ENTP",
    "job_name": "데브옵스 엔지니어",
    "img": "entp.jpeg",
    "explain": "ENTP인 당신은 자유로운 상상력과 논리적인 분석력이 발달한 분입니다.<br>본인이 구상하는 바를 실현시키고자 하는 혁명가적 기질이 강하며 다양한 관점에서 상황을 바라보는 능력이 뛰어납니다.<br><br>데브옵스 엔지니어는 운영 환경에서 개발 및 배포로 진행되는 프로세스를 개선하여 고품질의 서비스를 신속하게 제공하고 운영 대응력을 향상하는데 기여하는 직군입니다. 운영팀과 개발팀의 협업 간 발생하는 문제나 개선 여지를 발견하고 기술적인 해결책을 끊임없이 시도하고 제시합니다.<br><br>다양한 관점에서 조직 내 문제점을 바라보고 개선하기 위한 새로운 시도를 지속적으로 해야하는 이 직군은 당신의 혁명가적 성향이 기지를 발휘할 것 입니다."
  },
  "INFJ": {
    "mbti": "INFJ",
    "job_name": "서비스 기획자",
    "img": "infj.jpeg",
    "explain": "INFJ인 당신은 사람을 향한 직관력이 발달한 분입니다.<br>사람의 심리를 파악하고 이해하는데 뛰어나며, 미래에 대한 통찰력과 행동 및 권유를 통해 사람의 마음을 움직여 따르게 만드는 지도력이 있습니다.<br><br>서비스 기획자는 CEO 또는 전략 부서에서 요구하는 사업 방향성과 핵심 고객이 요구하는 가치를 파악하여 실제 서비스 구조를 설계하는 직군입니다. 또한 내가 설계한 서비스가 실제로 구현될 수 있도록 디자이너, 개발자들과도  끊임없이 소통해야하죠.<br><br>사람의 심리를 이해하고 통찰하는데 뛰어난 당신은 훌륭한 서비스 기획자가 될 가능성을 갖추었습니다."
  },
  "INFP": {
    "mbti": "INFP",
    "job_name": "콘텐츠 마케터",
    "img": "infp.jpeg",
    "explain": "INFP인 당신은 개방적 사고와 감수성이 발달한 분입니다.<br>유연한 사고와 감수성에 기인해 창의력이 발달하였으며, 인간 중심의 가치와 조화를 추구하려는 경향이 강합니다.<br><br>콘텐츠 마케터는 콘텐츠(글,그림,영상)로 잠재 고객의 공감대를 자극하고 유입을 만들어내는 직군입니다. 제공하고자하는 서비스의 가치를 한줄의 문장, 한장의 이미지, 한편의 영상으로 잠재 고객들의 눈과 귀를 사로잡아야 하죠.<br><br>사람의 정서를 이해하는 능력과 뛰어난 창의력을 가진 당신은 진정성을 겸비한 콘텐츠 마케터가 되기에 최적의 자질을 가졌습니다."
  },
  "ENFJ": {
    "mbti": "ENFJ",
    "job_name": "기술 영업 매니저",
    "img": "enfj.jpeg",
    "explain": "ENFJ인 당신은 인간관계에 대한 조화능력이 발달한 분입니다.<br>특유의 설득력 있는 응변 기술과 외교력으로 함께 추구해야 할 공통 목표를 설정하여 사람을 이끄는데 뛰어납니다.<br><br>기술 영업 매니저는 기업이 제공하고자 하는 서비스의 가치를 잠재 고객들에게 전달하고 공감을 만들어내는 직군입니다. 기업이 보유한 기술에 대한 이해를 바탕으로 잠재 고객들의 충족되지 못한 Pain Point를 파악하고 보유 기술의 가치와 비전을 전달하여 핵심 고객으로 만들어야하죠.<br><br>주변을 이끄는 카리스마와 언변이 뛰어난 당신은 타고난 세일즈 리더입니다."
  },
  "ENFP": {
    "mbti": "ENFP",
    "job_name": "브랜드 마케터",
    "img": "enfp.jpeg",
    "explain": "ENFP인 당신은 열정적 에너지와 풍부한 상상력이 발달한 분입니다.<br>상상력을 기반으로 끊임없이 새로운 시도를 하며 재빠르게 문제를 해결하는 능력이 뛰어나고 사람을 향한 통찰력으로 뛰어난 친화력이 강점입니다.<br><br>브랜드 마케터는 늘 사람의 중심에서 사람을 위한 일을 하는 직군입니다. 기업이 가지고 있는 비전과 가치를 최대한 많은 사람이 이해하고 공감할 수 있도록 다양한 마케팅 활동을 중심에서 펼치게 됩니다.<br><br>고객과 트렌드에 대한 이해와 통찰을 기반으로 늘 독창적이고 획기적인 마케팅 활동을 펼쳐야하는 브랜드 마케터는 당신에게 최적화된 직군입니다."
  },
  "ISTJ": {
    "mbti": "ISTJ",
    "job_name": "QA 엔지니어",
    "img": "istj.jpeg",
    "explain": "ISTJ인 당신은 체계적인 사고와 현실 감각이 발달한 분입니다.<br>구체적인 목적을 설정하고 체계적으로 일처리하는 방식은 타의 추종을 불허하며, 한치의 실수도 용납하지 않는 신중함과 책임감이 강점입니다.<br><br>QA 엔지니어는 개발된 서비스가 의도한대로 작동이 되는지, 잠재적 문제는 없는지 배포 직전 최후방을 책임지는 문지기같은 직군입니다. 디지털 프로덕트가 온전히 고객에게 제공될 수 있도록 프로덕트에서 발생할 수 있는 모든 테스트 케이스를 정의내리고 검수하며 문제점을 발견해냅니다.<br><br>빈틈을 용서하지않는 당신이 아닌 그 누구도 쉽게 해낼 수 없을겁니다."
  },
  "ISFJ": {
    "mbti": "ISFJ",
    "job_name": "CX 매니저",
    "img": "isfj.jpeg",
    "explain": "ISFJ인 당신은 감정 공감 능력과 인내력이 발달한 분입니다.<br>소중한 사람을 위해 헌신하는 열정과 매사에 차분하고 꼼꼼한 성격으로 똘똘 뭉친 당신은 늘 주변사람에게 온정과 신뢰를 느끼게 하는 강점이 있습니다.<br><br>CX 매니저는 서비스를 이용하는 고객의 이용 패턴, 문의 내역, 인터뷰를 통해 그들의 이용 만족도나 불편 사항을 포착하여 제품팀에 전달하는 메신저입니다. 조직 내에서 가장 고객과 가까이 있는 존재이며, 고객의 목소리를 대변하여 서비스가 고객이 만족할 수 있는 방향으로 개선될 수 있도록 서포트합니다.<br><br>사람에 대한 가득한 애정으로 고객을 케어하는 당신은 차갑고 이성적인 IT 조직에서 소금과 같은 존재입니다."
  },
  "ESTJ": {
    "mbti": "ESTJ",
    "job_name": "데이터 엔지니어",
    "img": "estj.jpeg",
    "explain": "ESTJ인 당신은 현실 감각과 의지력이 발달한 분입니다.<br>구체적이고 사실적인 목표 설정에 능하고 체계적으로 계획하고 추진하는 능력은 타의 추종을 불허합니다.<br><br>데이터 엔지니어는 빅데이터 환경에서 데이터 인프라를 구축하고 관리하는 데에 특화된 직군입니다. 조직 내 데이터를 필요로하는 다양한 구성원들과 끊임없이 소통하며 요구되는 데이터들이 잘 수집, 저장 될 수 있도록 데이터 파이프라인을 체계적으로 구축하고 관리하는 능력이 필요합니다.<br><br>이러한 데이터들은 서비스를 향상하거나 새로운 비즈니스 가치를 창출할 수 있는 밑바탕이 되기 때문에 구조적이고 체계화된 사고에 능한 당신이 역량을 발휘할 수 있는 직군입니다."
  },
  "ESFJ": {
    "mbti": "ESFJ",
    "job_name": "UX 디자이너",
    "img": "esfj.jpeg",
    "explain": "ESFJ인 당신은 사람에 대한 관찰력과 협동심이 발달한 분입니다.<br>사람을 다루고 행동을 요구하는데 능하며 공감하는 능력이 가장 발달한  타고난 협력자입니다.<br><br>UX 디자이너는 사람의 행동과 심리에 대한 이해를 바탕으로 고객에게 가장 최적화된 경험을 제공하는 서비스를 설계하는 직군입니다. 고객이 서비스를 이용하는 시간동안 의식적인 불편이나 피로감을 느끼지 않도록 유저의 행동 흐름을 끊임없이 추적하고 화면 구조나 User Flow를 개선해나갑니다.<br><br>이들은 유저 데이터 뿐만 아니라 인간의 행동심리적 측면이 중요한 판단 기준이 되기 때문에 사람의 감정을 능숙하게 파악할 수 있는 당신은 훌륭한 UX 디자이너가 될 자질을 갖추었습니다."
  },
  "ISTP": {
    "mbti": "ISTP",
    "job_name": "퍼포먼스 마케터",
    "img": "istp.jpeg",
    "explain": "ISTP인 당신은 논리적 분석력과 적응력이 발달한 분입니다.<br>상황 파악 능력과 도구를 다루는 능력이 뛰어나며 호기심이 많아 관찰하고 분석하는 것을 즐깁니다.<br><br>퍼포먼스 마케터는 디지털 매체에서 이루어지는 마케팅 캠페인을 관장하며 광고 집행을 통해 얻은 고객 데이터를 기반으로 마케팅 효율을 개선하는 디지털계의 연금술사 같은 직군입니다. 광고 소재 기획부터 광고 집행, 성과 분석 및 개선 등 디지털 광고의 A to Z를 담당하기에 다양한 툴 활용 능력 및 고객과 매체에 대한 통찰력이 필요합니다.<br><br>뛰어난 적응력과 분석 능력을 겸비한 당신은 타고난 퍼포먼스 마케터입니다."
  },
  "ISFP": {
    "mbti": "ISFP",
    "job_name": "UI 디자이너",
    "img": "isfp.jpeg",
    "explain": "ISFP인 당신은 호기심과 예술 감각이 발달한 분입니다.<br>틀에 묶여있지 않은 개방적 사고와 풍부한 감수성으로 내면의 가치를 끌어내는 것에 자질을 가지고 있습니다.<br><br>UI 디자이너는 디지털 프로덕트에서 시각적으로 보여지는 부분들을 책임지며 고객들에게 심미적인 만족도를 제공하는 직군입니다. 또한 기업이 담고 있는 스토리나 아이덴티티를 시각적 요소로 고객에게 전달해야 하기 때문에 도형이나 색을 배합하고 균형을 이룰 줄 아는 능력이 매우 중요합니다.<br><br>호기심 많고 예술가적 기질이 다분한 당신이 제일 잘 할 수 있는 분야입니다."
  },
  "ESTP": {
    "mbti": "ESTP",
    "job_name": "백엔드 개발자",
    "img": "estp.jpeg",
    "explain": "ESTP인 당신은 관용적이며 문제 해결 능력이 발달한 분입니다.<br>선입견이 없으며 강한 현실 감각을 지녀 타협책을 모색하고 해결 방안을 찾는 능력이 아주 뛰어납니다.<br><br>백엔드 개발자는 서비스가 운영되는데 필요한 데이터 베이스와 API 서버, 스토리지등 서버 인프라를 구축하고 운영하는 직군입니다. 서비스가 운영되고 성장하는 과정에서 발생하는 다양한 서버 문제 해결과 조직이 요구하는 사업적 가치와 기술적 현실 속에서 적절한 타협점을 찾아 해결하는 문제의 해결사들 입니다.<br><br>문제의 사실을 빠르게 파악하고 현실적인 해결책을 찾는 것에 능숙한 당신은 타고난 백엔드 엔지니어입니다."
  },
  "ESFP": {
    "mbti": "ESFP",
    "job_name": "프론트엔드 개발자",
    "img": "esfp.jpeg",
    "explain": "ESFP인 당신은 도전적이고 개발적이며 수용력이 발달한 분입니다.<br>변화에 적응하고 방향을 빠르게 전환하는데 능숙하며, 사람에 대한 관심이 많고 현실적 가치를 추구하는 편입니다.<br><br>프론트엔드 개발자는 고객이 실제로 접하는 서비스 인터페이스와 서버에서 가져온 데이터를 통한 비즈니스 로직을 구현하는 최전방 공격수입니다. 프론트엔드 개발은 새로운 기술과 트렌드의 변화가 빠른 분야이기에 더 나은 프로덕트를 제공하기 위해서 변화를 두려워하지 않고 계속해서 적응해나가야 합니다.<br><br>선천적으로 유행에 민감하고 도전을 두려워하지 않는 당신은 프론트엔드 개발자가 되기에 좋은 자질을 타고났습니다."
  }
};

//테스트 시작함수
var testStart = function() {
  document.querySelector('#main').style.display = "none";
  document.querySelector('#test').style.display = "block";
  next();
  dataLayer.push({
    'event':'start'
  });
}

document.querySelector('#start_btn').addEventListener('click', testStart);

//테스트 다시시작
var retry = function() {
  document.querySelector('#result').style.display = "none";
  document.querySelector('#test').style.display = "block";
  i = 1;
  EI.value = SN.value = TF.value = JP.value = 0;
  history.replaceState({}, null, location.pathname);
  next();
  dataLayer.push({
  'event': 'retry'
});
}

document.querySelector('#retry_btn').addEventListener('click', retry);

//타입 선택을 위한 함수
document.querySelector('#A').addEventListener('click', function() {
  var type = document.querySelector('#type').value;
  var preValue = document.querySelector('#' + type).value;
  document.querySelector('#' + type).value = preValue + 1;
  next();
  dataLayer.push({
  'event' : 'select_answer',
  'answer' : 'A'
});
})

document.querySelector('#B').addEventListener('click', function() {
  next();
  dataLayer.push({
  'event' : 'select_answer',
  'answer' : 'B'
});
})

//문제 넘기기 + 결과 도출 함수
var next = function() {
  if (i == 13) {
    document.querySelector('#test').style.display = "none";
    document.querySelector('#result').style.display = "block";
    var mbti = '';
    if (document.querySelector('#EI').value < 2) {
      mbti += 'I';
    } else {
      mbti += 'E';
    }
    if (document.querySelector('#SN').value < 2) {
      mbti += 'N';
    } else {
      mbti += 'S';
    }
    if (document.querySelector('#TF').value < 2) {
      mbti += 'F';
    } else {
      mbti += 'T';
    }
    if (document.querySelector('#JP').value < 2) {
      mbti += 'P';
    } else {
      mbti += 'J';
    }
    console.log(mbti);
    document.querySelector('#mymbti').innerHTML = result[mbti]['mbti'];
    document.querySelector('#explain').innerHTML = result[mbti]['explain'];
    document.querySelector('#job_name').innerHTML = result[mbti]['job_name'];
    document.querySelector('#result_img').setAttribute("src", 'img/result_img/' + result[mbti]['img']);
    history.replaceState({result: result}, '', '?result='+ mbti);
    dataLayer.push({
      'event':'test_complete',
      'mbti' : mbti,
      'result_name':result[mbti]['job_name']
    });
    // MBTI 결과 쿼리 파라미터 삽입
  } else {
    document.querySelector('#number').innerHTML = i + '/12';
    document.querySelector('#progress').style.width = (i / 12) * 100 + '%';
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#description').innerHTML = testNum[i]['description'];
    document.querySelector('#type').value = testNum[i]['type'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML = testNum[i]['B'];
    dataLayer.push({
  'event':'view_question',
  'question_no': i
});
    i++;
  }

}


// 쿼리 파라미터 값이 있을 경우 결과 페이지로 직접 이동
var shareParams = new URL(location.href).searchParams.get('result');
if (Object.keys(result).includes(shareParams) === true) {
  document.querySelector('#main').style.display = "none";
  document.querySelector('#result').style.display = "block";
  var mbti = shareParams;
  // 이 아래를 바꿔야 합니다
  document.querySelector('#explain').innerHTML = result[mbti]['explain'];
  document.querySelector("#result_img").setAttribute("src", 'img/' + result[mbti]['result_img']);
}

// 카카오 SDK 초기화
Kakao.init('02783a6e0acbf6751f48aba90cb006aa');
Kakao.isInitialized();



// 카톡 공유 실행 함수
var kakaoShare = function() {
  dataLayer.push({
  'event':'kakao_share'
});

  var title = document.querySelector('#mymbti').textContent;
  var desc = document.querySelector('#explain').textContent;
  var imgUrl = document.querySelector('#result_img').src;
  var mbti = new URL(location.href).searchParams.get('result');

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: title,
      description: desc,
      imageUrl: imgUrl,
      link: {
        mobileWebUrl: 'https://it-mbti.com?reslt=' + mbti,
      },
    },
    buttons: [{
        title: '결과 확인',
        link: {
          mobileWebUrl: 'https://it-mbti.com?result=' + mbti,
          webUrl: 'https://it-mbti.com?result=' + mbti,
        },
      },
      {
        title: '테스트하기',
        link: {
          mobileWebUrl: 'https://it-mbti.com',
          webUrl: 'https://it-mbti.com',
        },
      },
    ]
  });
}

document.querySelector('#share_btn').addEventListener('click', kakaoShare);
