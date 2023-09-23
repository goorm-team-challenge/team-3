export const userDetailTitle = {
    name: '이름',
    phone: '전화번호',
    email: '이메일',
    swMajored: '질문 1',
    groomUsed: '질문 2',
    groomService: '질문 2-1',
    groomWhy: '질문 2-2',
    expect: '질문 3',
    freeMessage: '질문 4',
};

export const userDetailQuestion = {
    swMajored: 'Q. SW 관련 학과를 전공하셨나요? (객관식)',
    groomUsed: 'Q. 구름 서비스를 사용해보신 적 있나요? (객관식)',
    groomService: 'Q. 사용 경험이 있는 서비스를 선택해주세요. (객관식, 복수 선택 가능)',
    groomWhy: 'Q. 해당 서비스를 사용하게 된 이유는 무엇인가요? (주관식)',
    expect: 'Q. 오프라인 팀 챌린지에 가장 기대하는 점은 무엇인가요? (객관식)',
    freeMessage: 'Q. 구름톤 챌린지에 전달하고 싶은 말을 적어주세요. (주관식)',
};

export const userDetailAnswer = (answer, userInfo) => {
    console.log('answer', answer);
    console.log('userInfo', userInfo);
    
    if (['swMajored', 'groomUsed'].includes(answer)) {
        return answer ? '예' : '아니요';
    }

    if (answer === 'groomService') {
        return Object
            .keys(goormServices)
            .filter((key) => {
                console.log(key);
                return userInfo.groomService[key]
            })
            .map((key) => goormServices[key])
            .join(', ');
    }

    if (answer === 'expect') {
        return expectChallenge[userInfo.expect];
    }

    return userInfo[answer];
};

const goormServices = {
    edu: '구름EDU',
    level: '구름LEVEL',
    devth: '구름DEVTH',
    ide: '구름IDE',
    exp: '구름EXP',
};

const expectChallenge = [
    '정해진 시간 내에 오프라인 팀 챌린지 과제를 수행, 1번 수행',
    '정해진 시간 내에 오프라인 팀 챌린지 과제를 수행, 2번 수행',
    '정해진 시간 내에 오프라인 팀 챌린지 과제를 수행, 3번 수행',
    '정해진 시간 내에 오프라인 팀 챌린지 과제를 수행, 4번 수행'
];