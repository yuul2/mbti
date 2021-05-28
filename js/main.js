var num = 1;

var q = {
    1: {
        'step': 'step1',
        'title': 'Q1. 아무노래 챌린지가 유행할때',
        'type': 'EI',
        'A': '영상을 보고 한번쯤은 춤을 따라해 봤다.',
        'B': '해볼 생각은 전혀.. 저런건 연예인들이나..'
    },

    2: {
        'step': 'step2',
        'title': 'Q2. 내가 닌텐도 동물의 숲을 할 때(한다면)',
        'type': 'EI',
        'A': '숲에 집부터 짓고 노예처럼 일해서 빚을 갚는다.',
        'B': '숲에서 힐링이지~ 열매따고 동물친구들과 논다.',
    },
    3: {
        'step': 'step3',
        'title': 'Q3. 나는 사회적 거리두기를 할 때',
        'type': 'EI',
        'A': '집 안에서는 좀이 쑤셔서 죽을 것 같아!',
        'B': '사실 나는 원래 집순이,집돌이... 평소와 다를게 없..'
    },
    4: {
        'step': 'step4',
        'title': 'Q4. 동학개미운동이 활발할 때 나는',
        'type': 'SN',
        'A': '어떤 주식을 살지 공부 좀 해보고 산다.',
        'B': '친구가 벌써 N% 수익을 냇다고? 나도 당장 산다.'
    },
    5: {
        'step': 'step5',
        'title': 'Q5. 400번 저어 만드는 달고나 커피가 유행할 때',
        'type': 'SN',
        'A': '굳이... 유행인 건 알지만 해보진 않는다.',
        'B': '재밌겠군 한번쯤 따라해본다.'
    },
    6: {
        'step': 'step6',
        'title': 'Q6. 재난지원금이 들어온 날 나는',
        'type': 'SN',
        'A': '살 건 없지만 개이득 당장 플렉스하러 간다.',
        'B': '들어온 금액을 보고 어떻게 쓸 지 계획한다.'
    },
    7: {
        'step': 'step7',
        'title': 'Q7. 부부의 세계 사랑에 빠진게 죄는 아니잖아!를 들은 당신은',
        'type': 'TF',
        'A': '응 개소리 왈왈 하며 화를 내면서 봤다.',
        'B': '와.. 두 사람을 사랑하는건 뭘까? 하며 상상해봤다.'
    },
    8: {
        'step': 'step8',
        'title': 'Q8. 네고왕에서 파격적으로 협상된 할인 이벤트를 본 당신은',
        'type': 'TF',
        'A': '해당 이벤트 기간을 숙지하고 할인 받아서 구매했다.',
        'B': '내가 살 때 마침 이벤트를 하면 좋고 아님 말고'
    },
    9: {
        'step': 'step9',
        'title': 'Q9. 놀면 뭐하니 환불원정대 무대를 보면서',
        'type': 'TF',
        'A': '춤 연습을 얼마나 했을까 현역아이돌 같아',
        'B': '나중에 또 이런 그룹이 나온다면 누가 나올려나..'
    },
    10: {
        'step': 'step10',
        'title': 'Q10. Dynamite로 빌보드 1위를 차지한 BTS를 보면',
        'type': 'JP',
        'A': '와.. 국뽕이 차오른다 더 흥해라',
        'B': '와.. 몇 주 연속1위냐.. 빌딩 한 채씩은 뽑았겠네'
    },
    11: {
        'step': 'step11',
        'title': 'Q11. 당근마켓 직거래를 한다면',
        'type': 'JP',
        'A': '(이미 신나서 직거래중)',
        'B': '직거래? 조용히 다른 중고어플을 켜본다.'
    },
    12: {
        'step': 'step11',
        'title': 'Q12. 백신이 개발된다는 소식에',
        'type': 'JP',
        'A': '이제 곧 마스크도 벗고 해외여행도 가겠지? 같이 갈 사람 급구!',
        'B': '한동안 제약 주가가 상승하겠네.. 지금이라도 탑승해 볼까..'
    }
}


var x = {
    12: {
        'step': 'step11',
        'title': 'Q12. 백신이 개발된다는 소식에',
        'type': 'JP',
        'A': '이제 곧 마스크도 벗고 해외여행도 가겠지? 같이 갈 사람 급구!',
        'B': '한동안 제약 주가가 상승하겠네.. 지금이라도 탑승해 볼까..'
    },
    
    11: {
        'step': 'step11',
        'title': 'Q11. 당근마켓 직거래를 한다면',
        'type': 'JP',
        'A': '(이미 신나서 직거래중)',
        'B': '직거래? 조용히 다른 중고어플을 켜본다.'
        10: {
            'step': 'step10',
            'title': 'Q10. Dynamite로 빌보드 1위를 차지한 BTS를 보면',
            'type': 'JP',
            'A': '와.. 국뽕이 차오른다 더 흥해라',
            'B': '와.. 몇 주 연속1위냐.. 빌딩 한 채씩은 뽑았겠네'
        },
    },
    9: {
        'step': 'step9',
        'title': 'Q9. 놀면 뭐하니 환불원정대 무대를 보면서',
        'type': 'TF',
        'A': '춤 연습을 얼마나 했을까 현역아이돌 같아',
        'B': '나중에 또 이런 그룹이 나온다면 누가 나올려나..'
    },
    8: {
        'step': 'step8',
        'title': 'Q8. 네고왕에서 파격적으로 협상된 할인 이벤트를 본 당신은',
        'type': 'TF',
        'A': '해당 이벤트 기간을 숙지하고 할인 받아서 구매했다.',
        'B': '내가 살 때 마침 이벤트를 하면 좋고 아님 말고'
    },
    7: {
        'step': 'step7',
        'title': 'Q7. 부부의 세계 사랑에 빠진게 죄는 아니잖아!를 들은 당신은',
        'type': 'TF',
        'A': '응 개소리 왈왈 하며 화를 내면서 봤다.',
        'B': '와.. 두 사람을 사랑하는건 뭘까? 하며 상상해봤다.'
    },
    6: {
        'step': 'step6',
        'title': 'Q6. 재난지원금이 들어온 날 나는',
        'type': 'SN',
        'A': '살 건 없지만 개이득 당장 플렉스하러 간다.',
        'B': '들어온 금액을 보고 어떻게 쓸 지 계획한다.'
    },
    5: {
        'step': 'step5',
        'title': 'Q5. 400번 저어 만드는 달고나 커피가 유행할 때',
        'type': 'SN',
        'A': '굳이... 유행인 건 알지만 해보진 않는다.',
        'B': '재밌겠군 한번쯤 따라해본다.'
    },
    4: {
        'step': 'step4',
        'title': 'Q4. 동학개미운동이 활발할 때 나는',
        'type': 'SN',
        'A': '어떤 주식을 살지 공부 좀 해보고 산다.',
        'B': '친구가 벌써 N% 수익을 냇다고? 나도 당장 산다.'
    },
    3: {
        'step': 'step3',
        'title': 'Q3. 나는 사회적 거리두기를 할 때',
        'type': 'EI',
        'A': '집 안에서는 좀이 쑤셔서 죽을 것 같아!',
        'B': '사실 나는 원래 집순이,집돌이... 평소와 다를게 없..'
    },
    2: {
        'step': 'step2',
        'title': 'Q2. 내가 닌텐도 동물의 숲을 할 때(한다면)',
        'type': 'EI',
        'A': '숲에 집부터 짓고 노예처럼 일해서 빚을 갚는다.',
        'B': '숲에서 힐링이지~ 열매따고 동물친구들과 논다.',
    },
    1: {
        'step': 'step1',
        'title': 'Q1. 아무노래 챌린지가 유행할때',
        'type': 'EI',
        'A': '영상을 보고 한번쯤은 춤을 따라해 봤다.',
        'B': '해볼 생각은 전혀.. 저런건 연예인들이나..'
    }
}
var result = {
    'ISTJ': {
        'people': '꼼꼼하고 깐깐한 꼰대가르송 부자',
        'img': 'images/result_ISTJ.png',
        'explain': '"하지만  내 사람에겐 따뜻하겠지"',
        'result-ex': '조금은 딱딱하고 말투도 직설적이어서 가끔 꼰대가르송 같다는 이야기를 듣기도 하는 나!<br> 계획을 세우고 못 지키는 것, 원칙을 어기는 것에 스트레스 받습니다.<br> 돈도 꼭 필요한 곳에 쓰기 때문에 과소비는 거의 하지 않지만 의외로 내 사람들에게는 배포가 장난 아닌 편<br> 투자를 할 때도 안정성을 중요시하다 보니 은행 저축을 고집하거나, 리스크가 거의 0에 가까운 투자 상품을 좋아합니다.',
        'result-plan': '부자 행운을 높여줄 사람들이 몰려와 돈 길만 걷고 있는 군..',
        'result-bank': '75억',
        'result-tip': '늘 하던 방법 말고 새로운 방법을 찾아 보는 건~?',
        'result-good': '돈 뭉치를 향해 달려가는 불나방 부자',
        'result-bad': '돈보다 행복이 중요한 무소유 부자',
        'result-type': 'ISTJ'
    },
    'ISFJ': {
        'people': '티끌모아 대기만성형 부자',
        'img': 'images/result_ISFJ.png',
        'explain': '"쫌쫌따리.. 쫌쫌따리.."',
        'result-ex': '내향적인 사람 중에 가장 외향적인, 보수적인 사람 중 가장 개방적인.. 반전의 묘미를 갖고 있는 나!<br> 가끔 주변에서 안 심심해..?라고 물어보지만 혼자만의 재미를 잘 찾는 편<br> 소비 계획을 세우고 똑똑한 소비를 하는 나! 스트레스 받을 때도 플렉스~ 해버리기보다는 소확행을 즐기며 조절을 잘 합니다!<br> 작고 소박한 것에도 쉽게 만족하기 때문에 높은 수익성보단 가성비 좋은 투자상품에 큰 관심을 갖고 있습니다.',
        'result-plan': '꼼꼼한 소비계획과 투자로 통장에 0이 쫌쫌따리 늘어나 돈 길만 걷고 있는군...',
        'result-bank': '10억.. 그치만 더 모을 수 있어!',
        'result-tip': '한번쯤은 통 크게 플렉스를 하며 돈 쓰는 법을 잘 배워보기',
        'result-good': '돈 샐 틈 없는 은행 금고 부자',
        'result-bad': '어나더 DNA부자',
        'result-type': 'ISFJ'
    },
    'INFJ': {
        'people': '덤보 뺨치는 팔랑귀 부자',
        'img': 'images/result_INFJ.png',
        'explain': '태극기는 펄럭~ 내 귀는 팔랑~',
        'result-ex': '모든 사람들에게 부드럽고 다정다감한 당신! 타인의 감정을 한 번에 캐치하는 섬세함을 가졌습니다.<br> 가끔 나보다 남을 더 생각해서 피곤해하기도 합니다...<br> 꼼꼼하고 계획적이어서 물건을 살 때도 리뷰를 샅샅이 보고 구매하지만... 절친의 영업을 듣고 있으면 이미 내 손엔 영수증과 물건이?!?!? 무엇?<br> 돈에 큰 욕심은 없습니다. 있으면 있는 대로~ 없으면 없는 대로~<br> 친한 친구의 성향에 따라 유혹 받기 쉬운 타입이라 충동 투자로 이어지지 않게 조심하면 좋습니다.',
        'result-plan': '팔랑귀 부자에게 좋은 사람들만 가득해서 그들과 돈 길을 걷고 있는 모습이 보이는 군..',
        'result-bank': '18억',
        'result-tip': '나쁜 친구가 추천할 땐 꼭 두번 더 생각하자',
        'result-good': '인생 한탕주의 겜블러 부자',
        'result-bad': '모든 것이 계획대로 AI부자',
        'result-type': 'INFJ'
    },
    'INTJ': {
        'people': '브레이크 없는 급발진 부자',
        'img': 'images/result_INTJ.png',
        'explain': '나를 막을 수 있는 사람..?',
        'result-ex': '언제나 한결같이 주변에 무신경함으로 일관하는 나! 하고 싶은 말은 다~ 하는 편<br> 차가운 사람이라고 평가받기도 하지만, 꼰대들의 대항마라 당신을 좋아하는 사람도 꽤 많습니다.<br> 돈 관리에 있어서도 철두철미한 편이라 착실히 꼼꼼하게 저축 중!<br> 갑자기 스트레스를 받으면 급발진 하는 모습을 보이기도...<br> 흥미 없는 건 눈길도 안 주지만, 좋아하는 일에는 과몰입! 주식이든, 투자든 뭐든 관심만 가지면 내 것으로 만듭니다.',
        'result-plan': '급발진을 막아 줄 친구를 만나 돈 길만 걷고 있는 군..',
        'result-bank': '47억',
        'result-tip': '스트레스 받을 때 소비보다는 명상하기',
        'result-good': '이 구역의 에너자이저 부자',
        'result-bad': '작은 바람에도 휘청대는 갈대 부자',
        'result-type': 'INTJ'
    },
    'ISTP': {
        'people': '내가 가는 곳이 길 마이웨이 부자',
        'img': 'images/result_ISTP.png',
        'explain': '인생은 원래 마이웨이~',
        'result-ex': '누가 뭐라해도 자신이 하고 싶은대로 하는 모두에게 앞 뒤 똑같이 할 말 다아~~~하며 나만의 길을 걷는 나!<br> 사치를 하는 편은 아니지만, 내 취향과 재미에는 돈을 아끼지 않고 펑펑 씁니다.<br> 유행하는 것보다는 내가 끌리는 재밌는 사업이나 투자는 없는지 틈틈히 기회를 엿보는 성격<br> 머리속에는 늘 사업아이템이 무궁무진! 미래에는 사장님이 되어 있을 수도?',
        'result-plan': '나만의 더욱 탄탄한 길을 구축해서 돈 길만 걷고 있는군..',
        'result-bank': '35억',
        'result-tip': '가끔은 주변 사람들이 뭐 하는지 관찰도 해보기 ㅎㅎ',
        'result-good': '돈보다 행복이 중요한 무소유 부자',
        'result-bad': '돈 뭉치를 향해 달려가는 불나방 부자',
        'result-type': 'ISTP'
    },
    'ISFP': {
        'people': '유행에 몸을 맡기는 트렌디 부자',
        'img': 'images/result_ISFP.png',
        'explain': '나는 돈도 트렌디하게 쓰지',
        'result-ex': '원체 느긋하고 미루는 것을 좋아하는 나! 틀에 박힌 걸 싫어하는 편입니다.<br> 집순이인 탓에 소비를 자주 하진 않지만 어디선가 본 트렌디한 상품이나 음식점을 발견하면 꼭 가보는 타입!<br> 남들이 봤을 땐 뭔가 있어 보이는 분위기가.. 방구석 예술가느낌이 낭낭..<br> 예술적 감각이 뛰어난 당신은 미적인 것에 환장해요! 나중에 예쁜 예술품에 투자하고 있을 수도..?',
        'result-plan': '방구석에서도 트렌디하게 통장에 0을 늘리고 있는군..',
        'result-bank': '43억',
        'result-tip': '이제 트렌디하게 돈 버는 방법을 알아볼까나~',
        'result-good': '어나더 DNA부자',
        'result-bad': '돈 샐 틈 없는 은행 금고 부자',
        'result-type': 'ISFP'
    },
    'INFP': {
        'people': '조용한 사고뭉치 부자',
        'img': 'images/result_INFP.png',
        'explain': '"돈은 있다가도 없고 없다가도 있지"',
        'result-ex': '미래보다 현재의 삶을 즐기는 당신!<br> 나만의 가치관을 가지고 있어 나의 가치관을 존중하는 타인을 만나면 올인하는 성향을 가지고 있습니다.<br> 내가 좋아하는 물건이 생긴다면 뒤도 안 돌아보고 결제! 그렇지만 빨리 식는 타입이라 오래 좋아할지는 미지수..<br> 묻고 더블로 가! 세 살배기처럼 자신의 마음에 쏙 든 건 단 한번에 올인해버리는.. 한 번 더 생각해 보고 투자하는 것이 중요합니다.',
        'result-plan': '사고뭉치 부자님을 말려 줄 좋은 친구를 만나 돈 길을 걷고 있어보이는 군..',
        'result-bank': '13억',
        'result-tip': '적금 하나쯤은 있는 YOLO가 되자!',
        'result-good': '모든 것이 계획대로 AI부자',
        'result-bad': '인생 한탕주의 겜블러 부자',
        'result-type': 'INFP'
    },
    'INTP': {
        'people': '인간 굴삭기 한 우물 부자',
        'img': 'images/result_INTP.png',
        'explain': '난 한 우물만 파지...',
        'result-ex': '남들에게 첫인상은 딱딱한 로봇이라고 평가받지만 혼자만의 공상도 자주하고 의외로 감수성이 풍부합니다.<br> 남들에게 피해 주는 것은 극혐! 때문에 돈 한 푼 없어도 남에게 돈을 빌리는 일은 없습니다.<br> 귀차니즘으로 인해 강제 미니멀리스트의 삶을 사는 중<br> 생각은 많지만 추진력이 부족한 게으른 천재<br> 올 한해 주식 열풍이 불 때 머리속으로 "oo사야겠다.오르겠네"라고 생각만하고 실천은 왜 안했는지..ㅎㅎ',
        'result-plan': '귀차니즘을 극복하고 한 우물만 파서 우직하게 돈을 모으고 있는 군..',
        'result-bank': '20억',
        'result-tip': '돈을 모으려는 의지만 있어도 끌어 모을 수 있음!',
        'result-good': '작은 바람에도 휘청대는 갈대 부자',
        'result-bad': '이 구역의 에너자이저 부자',
        'result-type': 'INTP'
    },
    'ESTP': {
        'people': '인생 한탕주의 겜블러부자',
        'img': 'images/result_ESTP.png',
        'explain': '한번 사는 인생~ 니나노',
        'result-ex': '경쟁,내기,즉흥,번개 너무 좋아! 선입견도 별로 없고 개방적이어서 주변에 사람이 많습니다.<br> 깊게 생각하고 머리아픈거 싫어해서 별 생각 않고 충동구매를 할 때도 있습니다.<br> 의외로 환불원정대 대장처럼 환불은 잘 받는 성격입니다. 싸우는 걸 좋아하지 않지만...절대 안 지는 타입<br> 일을 잘 미루기도 하지만, 하고 싶은 건 꼭! 해야하는 성격이기 때문에 관심 가는 것은 이것저것 해보는 편<br> 재밌는 아이디어도 많아 창업을 할 수도..? 하지만 빨리 싫증이 나는 편이라 오래하진 않습니다.',
        'result-plan': '언젠가 승리의 여신이 겜블러의 손을 들어주었구나..돈길을 걷고 있는군..',
        'result-bank': '0원... 그리고..승리의 여신이 내편이 되어준다면 53억',
        'result-tip': '가끔은 안정적인걸 추구해보는건 어떤가 자네..',
        'result-good': '덤보 뺨치는 팔랑귀부자',
        'result-bad': '조용한 사고뭉치 부자',
        'result-type': 'ESTP'
    },
    'ESFP': {
        'people': '이 구역의 에너자이저 부자',
        'img': 'images/result_ESFP.png',
        'explain': '"돈이 스쳐간다는 것은.. 운명"',
        'result-ex': '사람들과 어울려 노는게 제일 재미있는 당신! 사교적이고 낙천적인 성격으로 모임에서 분위기 메이커를 담당하는군요!<br> 티는 안 나지만 은근히 충동적인 경향이 있어 어느 날 보면 머리부터 발끝까지 휘황찬란하게 오는 자신을 발견 할 수도 있습니다.<br> 돈을쓰는걸 좋아하는 만큼 돈을 버는 재주도 있습니다.<br> 생각하는 건 바로 실행에 옮기는 스타일 발 빠른 추진력으로 좋은 투자 상품이 있다면 재 빠르게 낚아채는 편!',
        'result-plan': '충동 소비를 버리고 계획 소비를 통해 돈 길만 걷고 있는 군..',
        'result-bank': '3,000원... 아 습관을 바꾼다면 44억!',
        'result-tip': '마음에 드는 물건이 있는데.. 혹시 집에 있는 물건은 아닌지?',
        'result-good': '브레이크 없는 급발진 부자',
        'result-bad': '인간 굴삭기 한 우물 부자',
        'result-type': 'ESFP'
    },
    'ENFP': {
        'people': '돈뭉치를 향해 달려가는 불나방 부자',
        'img': 'images/result_ENFP.png',
        'explain': '나는 뒤 따위 돌아보지 않는다',
        'result-ex': '항상 웃음과 긍정적인 마인드를 잃지 않는 당신! 어찌 보면 대에에에충 사는 것 같지만 은근히 철저한 모습이 있습니다.<br> 소비를 그다지 계획적으로 하지 않아요. 애초에 계획따위 세울 생각...(계획이 머지..?)<br> 호기심이 많아서 이곳저곳 기웃거리기 때문에 장바구니 한 가득! 맥시멀리스트에요. <br> 꽂힌 분야에 있어서 미친 듯이 파기 때문에 대박을 치기도! 주식을 살 때도 우주여행이 남들은 코 웃음을 칠 지라도 불나방에게는 고수익 아이템이라고 느껴질수도...?',
        'result-plan': '불나방의 흥미를 확! 끌만한 기회를 만나 돈 길을 걷고 있는 모습이 보이는 군..',
        'result-bank': '25억',
        'result-tip': '아무데나 뛰어들지 말기 들어간 곳이 요단강이 될 지 모릅니다.',
        'result-good': '꼼꼼하고 깐깐한 꼰대가르송 부자',
        'result-bad': '내가 가는 곳이 길 마이웨이부자',
        'result-type': 'ENFP'
    },
    'ENTP': {
        'people': '돈 샐 틈 없는 은행 금고 부자',
        'img': 'images/result_ENTP.png',
        'explain': '모든 것을 느긋하고 신중하게',
        'result-ex': '재미가 인생의 원동력! 완벽보다는 관대하고 느긋한 성향으로 혼자 있는게 제일 속 편하다고 생각합니다.<br> 남들도 다 아는 자기애 뿜뿜한 사람! 자신의 감정을 잘 케어하고 늘 자신감에 차있습니다.<br> 내 마음에 드는 물건이 있다면 자기합리화를 해서라도 구매하는 타입이지만, 과소비는 하지 않는 합리주의자!<br> 호기심이 많아 여기저기 기웃대며 깊고 넓은 지식을 갖고 있습니다.<br> 좋은 투자상품,금융상품을 많이 알아서 신중하게 합리적으로 투자하기도 합니다.',
        'result-plan': '돈 샐 틈 없는 튼튼한 소비습관으로 돈 길만 걷고 있는게 보이는 군..',
        'result-bank': '22억',
        'result-tip': '호기심 천국! 이곳 저곳 기웃대면 정보를 끌어모으자!',
        'result-good': '티끌모아 태산 대기만성형 부자',
        'result-bad': '유행에 몸을 맡기는 트렌디 부자',
        'result-type': 'ENTP'
    },
    'ESTJ': {
        'people': '어나더 DNA 부자',
        'img': 'images/result_ESTJ.png',
        'explain': '" 부자가 될 운명이었다 "',
        'result-ex': '불도저 같은 성격, 뛰어난 책임감을 가진 당신! DNA부터 타고난 훌륭한 리더입니다.<br> 남들에게 웃는 얼굴로 은근히 뼈 때리는 이야기를 많이 합니다.<br> 돈보다는 성공에 집착이 있어 돈이 알아서 굴러오는 타입<br> 애매모호한 것을 딱 싫어해서 소비할 때도 우유부단함은 제로! 마음에 드는 물건은 쿨하게 결제하는 찐 부자 같은 여유를 볼 수 있습니다.<br> 게다가 남다른 판다력, 추진력으로 돈 버는 실력도 수준급! 앞으로 성장할 아이템을 볼 수 있는 안목을 가졌습니다.',
        'result-plan': '더 큰 야망을 실현하며 돈 길만 걷고 있는게 보이는 군..',
        'result-bank': '100억',
        'result-tip': '이미 DNA이 다 해버렸지 뭐야? 하던대로 고고!',
        'result-good': '유행에 몸을 맡기는 트렌디 부자',
        'result-bad': '티끌모아 태산 대기만성형 부자',
        'result-type': 'ESTJ'
    },
    'ESFJ': {
        'people': '작은 바람에도 휘청대는 갈대부자',
        'img': 'images/result_ESFJ.png',
        'explain': '" 휘엉청 오늘따라 바람이 세네... "',
        'result-ex': '친구들과의 모임에서 타고난 분위기 메이커!<br> 새로운 사람을 만나서 노는 것도 좋아하고 고민 상담도 잘 들어주는 핵인싸 재질<br> 기분파 중에 기분파! 종종 부를 과시하고 싶다는 생각이 들면 쉽게 충동 소비를 하는 경향이 있어 조심해야합니다.<br> 생각보다 본인은 철저한 편이라고 생각하지만... 분위기에 따라 잘 휘청거리는 편이라 투자나 주식을 할 때 조심해야 합니다.',
        'result-plan': '나만의 계획에 맞는 소비습관대로 목표를 실현하며 돈 길만 걷고 있는 군...',
        'result-bank': '45억',
        'result-tip': '내가 짱! 나를 믿자!',
        'result-good': '인간 굴삭기 한 우물 부자',
        'result-bad': '브레이크 없는 급발진 부자',
        'result-type': 'ESFJ'
    },
    'ENFJ': {
        'people': '돈보다 행복이 중요한 무소유 부자',
        'img': 'images/result_ENFJ.png',
        'explain': '"행복은 돈에서 오는게 아니야.."',
        'result-ex': '다정함을 무기로 주변에 늘 사람이 많은 당신! 행복함을 나눠주는 부자님 덕에 늘 웃음이 끊이질 않네요!<br> 꼭 돈을 써야하나..? 소비에' +
                '서 오는 행복보다 다른 곳에서 행복을 더 느끼기 때문에 검소한 생활을 하는 부자입니다. <br> 구두쇠는 아닌데 가성비를 따지는 편! 돈을 ' +
                '얼마를 쓰던 쓴 만큼의 가치를 돌려받아야 함!(안 그러면 화가납니다..)<br> 돈을 모으고자 하는 의지만 생기면 자신만의 확고한 방법으로 ' +
                '은근히 꾸준하게 부를 축적하는 능력도 가지고 있습니다.',
        'result-plan': '완벽하게 계획을 실천하며 꽃 길만 걷고 있는게 보이는 군..',
        'result-bank': '32억',
        'result-tip': '이미 마음이 부자인데 뭐가 더 필요하리~~',
        'result-good': '내가 가는 곳이 길 마이웨이부자',
        'result-bad': '꼼꼼하고 깐깐한 꼰대가르송 부자',
        'result-type': 'ENFJ'
    },
    'ENTJ': {
        'people': '모든 것이 계획대로 AI부자',
        'img': 'images/result_ENTJ.png',
        'explain': '너는 다 계획이 있구나...',
        'result-ex': '목표를 정하면 한 우물만 파는 노력파! 현실적이고 이성적으로 행동하는 성향이라 감정에 치우쳐 행동하는 일은 거의 없습니다. <br> 규칙을 어기는 것을 싫어하기 때문에 계획에 맞춰 소비합니다. 그래서 자칫 짠돌이, 짠순이 이미지가 있을지도... 그렇지만 큰 금액도 계획만 해놨다면 플렉스!<br> 똑똑한 나 잘난 맛에 사는 편! 그래서 은근히 칭찬해주면 좋은 투자 내용도 잘 흘립니다.<br> 누구보다 신중해서 투자를 하면 수익을 얻을 확률이 높습니다. 다만 투자 빈도가 잦진 않습니다. AI를 만족 시키기란... 힘들기 때문...' ,
        'result-plan': '더 높은 계획을 세우고 실현할 수있는 기회가 찾아와 돈 길만 걷고 있는게 보이는 군..',
        'result-bank': '78억',
        'result-tip': '너무 계획대로 하기보다는 모험을 해보는 것도..?',
        'result-good': '조용한 사고뭉치 부자',
        'result-bad': '덤보 뺨치는 팔랑귀부자',
        'result-type': 'ENTJ'
    }

}

function start() {
    $(".start").hide();
    $(".question").show();
    next();
}

$('#A').click(function () {
    var type = $('#type').val();
    var preValue = $('#' + type).val();
    $('#' + type).val(parseInt(preValue) + 1);
    next();
})

$('#B').click(function () {
    next();
})

function next() {
    if (num === 13) {
        $('.question').hide();
        $('.result').show();
        var mbti = "";
        (
            $('#EI').val() < 2
                ? mbti += 'I'
                : mbti += 'E'
        );
        (
            $('#SN').val() < 2
                ? mbti += 'N'
                : mbti += 'S'
        );
        (
            $('#TF').val() < 2
                ? mbti += 'F'
                : mbti += 'T'
        );
        (
            $('#JP').val() < 2
                ? mbti += 'P'
                : mbti += 'J'
        );
        $('#result-type').html(result[mbti]['result-type']);
        $('#img').attr('src', result[mbti]['img']);
        $('#people').html(result[mbti]['people']);
        $('#explain').html(result[mbti]['explain']);
        $('#result-ex').html(result[mbti]['result-ex']);
        $('#result-plan').html(result[mbti]['result-plan']);
        $('#result-bank').html(result[mbti]['result-bank']);
        $('#result-tip').html(result[mbti]['result-tip']);
        $('#result-good').html(result[mbti]['result-good']);
        $('#result-bad').html(result[mbti]['result-bad']);

    } else {
        $('.progress-bar').attr('style', 'width: calc( 100/12*' + num + '%)');
        $('#step').html(q[num]['step']);
        $('#title').html(q[num]['title']);
        $('#type').val(q[num]['type']);
        $('#A').html(q[num]['A']);
        $('#B').html(q[num]['B']);
        $('#img-quest').html(q[num]['img-quest']);
        
        num++;
      
    }

    
   
}

    function prev (){
        $('.progress-bar').attr('style', 'width: calc( 100/12*' + num-1 + '%)');
        $('#step').html(q[num-1]['step']);
        $('#title').html(q[num-1]['title']);
        $('#type').val(q[num-1]['type']);
        $('#A').html(q[num-1]['A']);
        $('#B').html(q[num-1]['B']);
        $('#img-quest').html(q[num-1]['img-quest']);
        num--;
    // if (input_val >= 1) {

    }
    // console.log(num)
// }
$('#go-back').click(function(){
    
    var type2 = $('#type2').val();
    var preValue = $('#' + type2).val();
    $('#' + type2).val(parseInt(preValue) + 1);

    prev()
})
