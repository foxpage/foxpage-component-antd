import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import AntdAffix from '../src';
import Editor from '../editor';

export default {
  title: 'AntdAffix',
  component: AntdAffix,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    target: '#test-001',
    offsetTop: -10,
  });
  return (
    <div
      id="test-001"
      style={{
        height: 100,
        margin: 30,
        background: '#eee',
        overflow: 'auto',
      }}
    >
      <AntdAffix {...props}>
        <div>111</div>
      </AntdAffix>
      <div style={{ height: 1000 }}>other content...</div>
    </div>
  );
};
