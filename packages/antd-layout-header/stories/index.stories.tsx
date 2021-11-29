import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import { Layout } from 'antd';
import AntdLayoutHeader from '../src';
import Editor from '../editor';

export default {
  title: 'AntdLayoutHeader',
  component: AntdLayoutHeader,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    attrs: {
      style: {
        color: 'white',
      },
    },
  });
  return (
    <Layout>
      <AntdLayoutHeader {...props}>header</AntdLayoutHeader>
    </Layout>
  );
};
