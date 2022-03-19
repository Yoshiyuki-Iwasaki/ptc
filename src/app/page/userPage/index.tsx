import React from 'react';
import Profile from '../../components/organisms/profile';
import { HeadBlock } from '../../components/organisms/head';

const User: React.FC = () => {
  return (
    <>
      <HeadBlock
        title="ユーザーページのタイトルです"
        description="ユーザーページの説明文です"
        path="user"
      />
      <Profile />
    </>
  );
};

export default User;
