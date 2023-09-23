import React, { useState, useEffect } from 'react';

import { Button, Modal, Label, Input } from '@goorm-dev/gds-challenge';

const Modal1 = ({ onClose, headerName }) => {
	// name
	const [name, setName] = useState('');

	// phone
	const [phone, setPhone] = useState('');

	// email
	const [email, setEmail] = useState('');

	// permissions
	const [allChecked, setAllChecked] = useState(true);
	const [privacyChecked, setPrivacyChecked] = useState(true);
	const [marketingChecked, setMarketingChecked] = useState(true);
	const [adChecked, setAdChecked] = useState(true);
	const [emailChecked, setEmailChecked] = useState(true);
	const [snsChecked, setSnsChecked] = useState(true);

	const handleNameChange = (e) => {
		const input = e.target.value;
		setName(input);
		console.log(name);
	};

	const handlePhoneChange = (e) => {
		const input = e.target.value;
		setPhone(input);
		console.log(phone);
	};

	// "이메일" 입력란에서 변경 사항을 처리하는 함수
	const handleEmailChange = (e) => {
		const input = e.target.value;
		setEmail(input);
		console.log(email);
	};

	useEffect(() => {
		setName(name);
		setPhone(phone);
		setEmail(email);
	}, [name, phone, email]);

	// 전체 동의
	const handleAllCheckboxChange = () => {
		const newState = !allChecked;
		setAllChecked(newState);
		setPrivacyChecked(newState);
		setMarketingChecked(newState);
		setAdChecked(newState);
		setEmailChecked(newState);
		setSnsChecked(newState);
	};

	// 개인정보처리방침
	const handleprivacyCheckedChange = () => {
		const newState = !privacyChecked;
		setAllChecked(false);
		setPrivacyChecked(newState);
	};

	// 마케팅 목적의 개인 정보 수집 및 이용
	const handlemarketingCheckedChange = () => {
		const newState = !marketingChecked;
		setAllChecked(false);
		setMarketingChecked(newState);
	};

	// 광고성 정보 수신
	const handleadCheckedChange = () => {
		const newState = !adChecked;
		setAllChecked(false);
		setAdChecked(newState);
		setEmailChecked(newState);
		setSnsChecked(newState);
	};

	// email 정보 수신
	const handleEmailChecked = () => {
		const newState = !emailChecked;
		setAllChecked(false);
		setAdChecked(newState);
		setEmailChecked(newState);
	};

	// SNS 정보 수신
	const handleSnsChecked = () => {
		const newState = !snsChecked;
		setAllChecked(false);
		setAdChecked(newState);
		setSnsChecked(newState);
	};

	return (
		<>
			<Modal.Header toggle={onClose}>{headerName}</Modal.Header>
			<Modal.Body>
				<div>
					{/* title & sub title */}
					<div>
						<div>참여자 정보를 입력해주세요.</div>
						<div>
							오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요.
						</div>
					</div>
					<Label required pointer>
						이름
					</Label>
					<Input
						type="text"
						placeholder="이름을 입력해주세요."
						value={name}
						onChange={handleNameChange}
					/>
					<Label required pointer>
						전화번호
					</Label>
					<Input
						type="tel"
						placeholder="ex.01012345678"
						value={phone}
						onChange={handlePhoneChange}
					/>
					<Label required pointer>
						이메일
					</Label>
					<Input
						type="email"
						placeholder="ex.goormee@goorm.io"
						value={email}
						onChange={handleEmailChange}
					/>
					<Input
						type="checkbox"
						label="전체 동의"
						block={false}
						checked={allChecked}
						onChange={handleAllCheckboxChange}
						disabled={false}
						invalid={false}
					/>
					<hr />
					<Input
						type="checkbox"
						label="(필수) 개인정보처리방침"
						block={false}
						checked={privacyChecked}
						onChange={handleprivacyCheckedChange}
						disabled={false}
						invalid={false}
					/>
					<Input
						type="checkbox"
						label="(선택) 마케팅 목적의 개인 정보 수집 및 이용"
						block={false}
						checked={marketingChecked}
						onChange={handlemarketingCheckedChange}
						disabled={false}
						invalid={false}
					/>
					<div>
						<Input
							type="checkbox"
							label="(선택) 광고성 정보 수신"
							block={false}
							checked={adChecked}
							onChange={handleadCheckedChange}
							disabled={false}
							invalid={false}
						/>
						<div>
							<Input
								type="checkbox"
								label="이메일"
								block={false}
								checked={emailChecked}
								onChange={handleEmailChecked}
								disabled={false}
								invalid={false}
							/>
							<Input
								type="checkbox"
								label="SNS"
								block={false}
								checked={snsChecked}
								onChange={handleSnsChecked}
								disabled={false}
								invalid={false}
							/>
						</div>
					</div>
					※ 광고성 정보 수신에 동의하시면 챌린지에 꾸준히 참여하실 수
					있도록 리마인드 알림을 보내드려요.
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button>다음</Button>
			</Modal.Footer>
		</>
	);
};

export default Modal1;
