// GDS 컴포넌트
// alias (src/* === @/*)
// import { Card } from '@/components';

import {
	Button,
	CarouselIndicators,
	Modal,
	Typography,
} from '@goorm-dev/gds-challenge';
// GDS 아이콘
import { ChevronDoubleLeftIcon } from '@goorm-dev/gds-icons';

const Modal2 = ({ isOpen, toggle }) => {
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
				>
					(예시) 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
				</Button>
				<Button
					size="lg"
					content="start"
					block
					outline={false}
					color="basic"
					active={false}
				>
					(예시) 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
				</Button>
				<Button
					size="lg"
					content="start"
					block
					outline={false}
					color="basic"
					active={false}
				>
					(예시) 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
				</Button>
				<Button
					size="lg"
					content="start"
					block
					outline={false}
					color="basic"
					active={false}
				>
					(예시) 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
				</Button>
			</Modal.Body>
			<Modal.Footer>
				<CarouselIndicators length={4} activeIndex={2} />
				<Button color="basic">이전</Button>
				<Button color="primary" active={false} block={false}>
					다음
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Modal2;
