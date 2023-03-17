import React from 'react';
import { Button } from '../UI/Button';
import {
  DividerBox,
  DividerLeft,
  DividerRight,
  UserInfoContainer,
  UserInfoItem,
  UserInfoList,
} from './UserInfo.styled';

export const UserInfo = ({ id, tweets, followers, changeUser, status }) => {
  return (
    <UserInfoContainer>
      <DividerBox>
        <DividerLeft />
        <DividerRight />
      </DividerBox>
      <UserInfoList>
        <UserInfoItem>{tweets} TWEETS</UserInfoItem>
        <UserInfoItem>FOLLOWERS {followers}</UserInfoItem>
      </UserInfoList>
      <Button id={id} changeUser={changeUser} status={status} />
    </UserInfoContainer>
  );
};
