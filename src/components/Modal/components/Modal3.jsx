// GDS 컴포넌트
// alias (src/* === @/*)
// import { Card } from '@/components';
import { useState } from 'react';

import useModalContext from '@/components/Context/formProvider';

import {
	Button,
	CarouselIndicators,
	Modal,
	Typography,
} from '@goorm-dev/gds-challenge';
// GDS 아이콘
import { ChevronDoubleLeftIcon } from '@goorm-dev/gds-icons';

const Modal3 = ({ isOpen, toggle }) => {
	const { form, updateForm, modalIndex, updateModalIndex, resetForm } =
		useModalContext();

	const [expect, setExpect] = useState();

	const handleBtnClick = (e) => {
		const num = e.target.value;
		setExpect(num);
	};

	const moveIndex = (index) => {
		updateForm('expect', expect);
		updateModalIndex(index);
	};
	return (
		<Modal isOpen={isOpen} toggle={toggle}>
			<Modal.Header toggle={toggle}>
				<Typography color="dark" weight={700} block token="h3">
					오프라인 팀 챌린지에 가장 기대하는 점은 무엇인가요?
				</Typography>
				<Typography color="hint" weight={400} block token="h3">
					더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
				</Typography>
			</Modal.Header>
			<Modal.Body>
				<Button
					size="lg"
					content="start"
					block
					outline={false}
					color="basic"
					active={false}
					onClick={updateForm('expect', 0)}
				>
					(0) 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
				</Button>
				<Button
					size="lg"
					content="start"
					block
					outline={false}
					color="basic"
					active={false}
					onClick={updateForm('expect', 1)}
				>
					(1) 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
				</Button>
				<Button
					size="lg"
					content="start"
					block
					outline={false}
					color="basic"
					active={false}
					onClick={updateForm('expect', 1)}
				>
					(2) 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
				</Button>
				<Button
					size="lg"
					content="start"
					block
					outline={false}
					color="basic"
					active={false}
					onClick={updateForm('expect', 1)}
				>
					(3) 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
				</Button>
			</Modal.Body>
			<Modal.Footer
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<CarouselIndicators
					length={4}
					onClickWithIndex={(index) => {
						return moveIndex(index);
					}}
					activeIndex={modalIndex}
				/>

				<div>
					<Button
						onClick={() => {
							moveIndex(modalIndex - 1);
							console.log(form);
						}}
						color="link"
					>
						이전
					</Button>
					<Button onClick={console.log(form)} color="primary">
						다음
					</Button>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default Modal3;
