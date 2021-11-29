import React from 'react';
import { Layout } from 'antd';
import { ComponentProps } from './typing';

const AntdLayout: React.FC<ComponentProps> = ({ attrs = {}, children }) => {
  return <Layout {...attrs}>{children}</Layout>;
};

export default AntdLayout;
