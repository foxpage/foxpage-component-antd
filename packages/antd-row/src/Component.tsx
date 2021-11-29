import React from 'react';
import { Row } from 'antd';
import { ComponentProps } from './typing';

const AntdRow: React.FC<ComponentProps> = props => {
  const { align, justify, attrs = {}, children } = props;
  return (
    <Row align={align} justify={justify} {...attrs}>
      {children}
    </Row>
  );
};

export default AntdRow;
