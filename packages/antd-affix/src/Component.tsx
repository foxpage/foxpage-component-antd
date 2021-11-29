import React, { useState, useEffect } from 'react';
import { Affix } from 'antd';
import { ComponentProps } from './typing';

const AntdAffix: React.FC<ComponentProps> = props => {
  const { offsetTop, offsetBottom, target, attrs = {}, children } = props;
  const [getTarget, setGetTarget] = useState<(() => HTMLElement) | undefined>(undefined);
  useEffect(() => {
    if (target) {
      const tar = document.querySelector(target) as HTMLElement;
      if (tar) {
        setGetTarget(() => () => tar);
        return;
      }
    }
    setGetTarget(undefined);
  }, [target]);
  return (
    <Affix offsetTop={offsetTop} offsetBottom={offsetBottom} target={getTarget} {...attrs}>
      {children as React.ReactElement}
    </Affix>
  );
};

export default AntdAffix;
