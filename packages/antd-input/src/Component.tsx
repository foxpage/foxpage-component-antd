import React from 'react';
import { Input } from 'antd';
import { ComponentProps } from './typing';

const AntdInput: React.FC<ComponentProps> = ({ defaultValue, size, allowClear, bordered, attrs = {}, ...others }) => {
  const editorProps = {
    defaultValue,
    size,
    allowClear,
    bordered,
  };
  return <Input {...editorProps} {...attrs} {...others} />;
};

export default AntdInput;
