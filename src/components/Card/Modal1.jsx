import React from 'react';

import { Label, Input } from '@goorm-dev/gds-challenge';

const Modal1 = () => {
	return (
		<div>
			{/* title & sub title */}
			<div>
				<div>참여자 정보를 입력해주세요.</div>
				<div>오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요.</div>
			</div>
			<Label required pointer>
				이름
			</Label>
			<Input type="text" placeholder="이름을 입력해주세요." />
			<Label required pointer>
				전화번호
			</Label>
			<Input type="tel" placeholder="ex.01012345678" />
			<Label required pointer>
				이메일
			</Label>
			<Input type="email" placeholder="ex.goormee@goorm.io" />
			<Input
				type="checkbox"
				label="전체 동의"
				block={false}
				checked
				disabled={false}
				invalid={false}
			/>
			<hr />
			<Input
				type="checkbox"
				label="(필수) 개인정보처리방침"
				block={false}
				checked
				disabled={false}
				invalid={false}
			/>
			<Input
				type="checkbox"
				label="(필수) 마케팅 목적의 개인 정보 수집 및 이용"
				block={false}
				checked
				disabled={false}
				invalid={false}
			/>
			<Input
				type="checkbox"
				label="(필수) 광고성 정보 수신"
				block={false}
				checked
				disabled={false}
				invalid={false}
			/>
			<Input
				type="checkbox"
				label="이메일"
				block={false}
				checked
				disabled={false}
				invalid={false}
			/>
			<Input
				type="checkbox"
				label="SNS"
				block={false}
				checked
				disabled={false}
				invalid={false}
			/>
			※ 광고성 정보 수신에 동의하시면 챌린지에 꾸준히 참여하실 수 있도록
			리마인드 알림을 보내드려요.
		</div>
	);
};

export default Modal1;
