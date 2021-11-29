import React from 'react';
import { Layout } from 'antd';
import { ComponentProps } from './typing';

const AntdLayoutContent: React.FC<ComponentProps> = ({ attrs = {}, children }) => {
  return <Layout.Content {...attrs}>{children}</Layout.Content>;
};

export default AntdLayoutContent;
