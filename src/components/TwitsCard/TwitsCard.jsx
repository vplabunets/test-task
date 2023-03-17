import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import { UserInfo } from '../UserInfo/UserInfo';
import {
  TwitCardItem,
  BackgroundImage,
  Container,
  Logo,
  LogoImage,
  Container1,
} from './TwitsCard.styled';
import logo from '../../images/logo.png';

export const TwitsCard = ({ user, changeUser }) => {
  const { id, avatar, tweets, followers, status } = user;

  return (
    <Container1>
      <TwitCardItem>
        <Container>
          <BackgroundImage>
            <Logo>
              <LogoImage src={logo} alt="logo" />
            </Logo>
            <Avatar avatar={avatar} />
            <UserInfo
              status={status}
              id={id}
              tweets={tweets}
              followers={followers}
              changeUser={changeUser}
            />
          </BackgroundImage>
        </Container>
      </TwitCardItem>
    </Container1>
  );
};
