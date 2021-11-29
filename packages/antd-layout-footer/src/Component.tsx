import React from 'react';
import { Layout } from 'antd';
import { ComponentProps } from './typing';

const AntdLayoutFooter: React.FC<ComponentProps> = ({ attrs = {}, children }) => {
  return <Layout.Footer {...attrs}>{children}</Layout.Footer>;
};

export default AntdLayoutFooter;
