import { Button, Collapse } from '@goorm-dev/gds-challenge';
import { ChevronDoubleLeftIcon, ChevronUpIcon } from '@goorm-dev/gds-icons';
import { Card } from '@/components';

const ListView = ({ users }) => {

    return (
        <>
            {users.map((user, idx) => (
                <div key={user.name}>
                    <Button size='lg' color='basic' iconSize='left'>참여자 { + 1}. {user.name}</Button>
                    <Collapse isOpen={false}>
                        <Card style={{ borderTop: 0 }} flat="both">1</Card>
                    </Collapse>
                </div>
            ))}
        </>
    )
};

export default ListView;