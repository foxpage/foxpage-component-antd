import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import { Row } from 'antd';
import AntdCol from '../src';
import Editor from '../editor';

export default {
  title: 'AntdCol',
  component: AntdCol,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    span: 8,
    attrs: {
      style: {
        color: 'red',
        textAlign: 'center',
      },
    },
  });
  const otherColProps = {
    span: 8,
    attrs: {
      style: {
        textAlign: 'center',
      },
    },
  };
  const bgStyle = {
    backgroundColor: '#eee',
  };
  return (
    <Row gutter={[12, 12]}>
      <AntdCol {...otherColProps}>
        <div style={bgStyle}>111</div>
      </AntdCol>
      <AntdCol {...props}>
        <div style={bgStyle}>I am target</div>
      </AntdCol>
      <AntdCol {...otherColProps}>
        <div style={bgStyle}>333</div>
      </AntdCol>
      <AntdCol {...otherColProps}>
        <div style={bgStyle}>444</div>
      </AntdCol>
      <AntdCol {...otherColProps}>
        <div style={bgStyle}>555</div>
      </AntdCol>
      <AntdCol {...otherColProps}>
        <div style={bgStyle}>666</div>
      </AntdCol>
    </Row>
  );
};
