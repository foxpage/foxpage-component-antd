import React from 'react';
import { Col } from 'antd';
import { ComponentProps } from './typing';

const AntdCol: React.FC<ComponentProps> = props => {
  const { span, offset, order, pull, push, flex, attrs = {}, _decorator = {}, children } = props;
  return (
    <Col {..._decorator} span={span} offset={offset} order={order} pull={pull} push={push} flex={flex} {...attrs}>
      {children}
    </Col>
  );
};

export default AntdCol;
