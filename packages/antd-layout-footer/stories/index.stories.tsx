import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import { Layout } from 'antd';
import AntdLayoutFooter from '../src';
import Editor from '../editor';

export default {
  title: 'AntdLayoutFooter',
  component: AntdLayoutFooter,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return (
    <Layout>
      <AntdLayoutFooter {...props}>footer</AntdLayoutFooter>
    </Layout>
  );
};
