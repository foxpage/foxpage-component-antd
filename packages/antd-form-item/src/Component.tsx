import React from 'react';
import { Form } from 'antd';
import { ComponentProps } from './typing';

const AntdFormItem: React.FC<ComponentProps> = ({ name, label, attrs = {}, children, ...others }) => {
  return (
    <Form.Item name={name} label={label} {...attrs} {...others}>
      {children}
    </Form.Item>
  );
};

export default AntdFormItem;
