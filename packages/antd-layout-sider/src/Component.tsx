import React from 'react';
import { Layout } from 'antd';
import { ComponentProps } from './typing';

const AntdLayoutSider: React.FC<ComponentProps> = props => {
  const { attrs = {}, children, ...other } = props;
  return (
    <Layout.Sider {...other} {...attrs}>
      {children}
    </Layout.Sider>
  );
};

export default AntdLayoutSider;
