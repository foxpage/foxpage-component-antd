import React from 'react';
import { Layout } from 'antd';
import { ComponentProps } from './typing';

const AntdLayoutHeader: React.FC<ComponentProps> = ({ attrs = {}, children }) => {
  return <Layout.Header {...attrs}>{children}</Layout.Header>;
};

export default AntdLayoutHeader;
