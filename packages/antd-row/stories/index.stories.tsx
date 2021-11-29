import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import { Col } from 'antd';
import AntdRow from '../src';
import Editor from '../editor';

export default {
  title: 'AntdRow',
  component: AntdRow,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    align: 'top',
    justify: 'center',
    attrs: {
      gutter: [40, 24],
    },
  });
  const bgStyle = {
    backgroundColor: '#eee',
  };
  return (
    <AntdRow {...props}>
      <Col span={8}>
        <div
          style={{
            ...bgStyle,
            height: 40,
          }}
        >
          111
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            ...bgStyle,
            height: 20,
          }}
        >
          222
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            ...bgStyle,
            height: 30,
          }}
        >
          333
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            ...bgStyle,
            height: 20,
          }}
        >
          444
        </div>
      </Col>
    </AntdRow>
  );
};
