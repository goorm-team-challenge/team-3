import { Button, Collapse, Typography } from '@goorm-dev/gds-challenge';
import { ChevronDownIcon, ChevronUpIcon } from '@goorm-dev/gds-icons';
import { Card } from '@/components';
import { useState } from 'react';
import { userDetailAnswer } from '@/utils/userDetailAnswer';
import { userDetailQuestion, userDetailTitle } from '@/constants/UserDeatilList';

const UserDetails = ({ user, idx, total }) => {
    const [toggle, setToggle] = useState(false);
    const titles = Object.keys(userDetailTitle);

    return (
        <>
            <Card flat={total - 1 === idx ? 'top' : 'both'} between onClick={() => setToggle(!toggle)}>
                <Typography>참여자 {total - idx}. {user.name}</Typography>
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