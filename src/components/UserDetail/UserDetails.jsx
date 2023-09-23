import { Button, Collapse, Typography } from '@goorm-dev/gds-challenge';
import { ChevronDownIcon, ChevronUpIcon } from '@goorm-dev/gds-icons';
import { Card } from '@/components';
import cn from 'classnames';
import styles from './UserDetail.module.scss';
import { useState } from 'react';
import { userDetailTitle, userDetailQuestion } from '../../constants/UserDeatilList';
import { userDetailAnswer } from '../../constants/UserDeatilList';

const UserDetails = ({ user, idx, total }) => {
    const [toggle, setToggle] = useState(false);
    const titles = Object.keys(userDetailTitle);

    console.log(user);

    return (
        <>
            <Card flat={total - 1 === idx ? 'top' : 'both'} between onClick={() => setToggle(!toggle)} className={cn(styles.selectBtn)}>
                <Typography>참여자 {idx}. {user.name}</Typography>
                <ChevronDownIcon />
            </Card>
            <Collapse isOpen={toggle}>
                {titles.map((title) => (
                    ['name', 'email', 'phone'].includes(title)
                        ? (
                            <Card
                            style={{ borderTop: 0 }}
                            flat='both'
                            title={userDetailTitle[title]}
                            type='content'
                            >
                                <Typography>{user[title]}</Typography>
                            </Card>
                        )
                        :(
                            <Card
                                style={{ borderTop: 0 }}
                                flat='both'
                                title={userDetailTitle[title]}
                                type='content'
                            >
                                <Typography>{userDetailQuestion[title]}</Typography>
                                <Typography>A. {userDetailAnswer(title, user)}</Typography>
                            </Card>
                    )
                ))}
            </Collapse>
        </>
    )
};

export default UserDetails;