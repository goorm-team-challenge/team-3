import UserDetails from '../UserDetail/UserDetails';
import { Typography } from '@goorm-dev/gds-challenge';
import cn from 'classnames';
import styles from './UserDetail.module.scss';
import { Card } from '@/components';
import React from 'react';

const ListView = ({ users }) => {

    return (
        <Card padding='none' className={cn(styles.container)}>
            <Card title='title' flat='bottom' className={cn(styles.titleWrap)}>
                <Typography>응답한 참여자</Typography>{" "}
                <Typography color='primary'>{users.length}</Typography>
            </Card>
            {users.map((user, idx) => (
                <React.Fragment key={user.name}>
                    <UserDetails user={user} idx={idx} total={users.length} />
                </React.Fragment>
            ))}
        </Card>
    )
};

export default ListView;