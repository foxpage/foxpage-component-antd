import React from 'react';
import { Form } from 'antd';
import { ComponentProps } from './typing';

const AntdForm: React.FC<ComponentProps> = ({ attrs = {}, children }) => {
  return <Form {...attrs}>{children}</Form>;
};

export default AntdForm;
