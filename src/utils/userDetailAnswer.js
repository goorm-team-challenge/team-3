import { expectChallenge, goormServices } from "@/constants/UserDeatilList";

export const userDetailAnswer = (answer, userInfo) => {
    
    if (['swMajored', 'groomUsed'].includes(answer)) {
        return answer ? '예' : '아니요';
    }

    if (answer === 'groomService') {
        const userGoormService = Object
            .keys(goormServices)
            .filter((key) => userInfo.groomService[key])
            .map((key) => goormServices[key]);
            
        return userGoormService.length > 0 ? userGoormService.join(', ') : '-';
    }

    if (answer === 'expect') {
        return expectChallenge[userInfo.expect];
    }

    return userInfo[answer] || '-';
};