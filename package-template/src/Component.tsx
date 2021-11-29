import React from 'react';
import { Button } from 'antd';
import { ComponentProps } from './typing';

const ___ComponentName___: React.FC<ComponentProps> = ({
  attrs = {},
  children,
})=> {
  return (<Button {...attrs}>{children}</Button>);
};

export default ___ComponentName___;
