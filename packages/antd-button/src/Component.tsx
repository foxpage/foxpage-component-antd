import React from 'react';
import { Button } from 'antd';
import { ComponentProps } from './typing';

const AntdButton: React.FC<ComponentProps> = ({ textChildren, shape, size, type, attrs = {}, children, ...others }) => {
  const editorProps = {
    shape,
    size,
    type,
  };
  return (
    <Button {...editorProps} {...attrs} {...others}>
      {textChildren || attrs.children || children}
    </Button>
  );
};

export default AntdButton;
