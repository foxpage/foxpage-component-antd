import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import { Layout } from 'antd';
import AntdLayoutContent from '../src';
import Editor from '../editor';

export default {
  title: 'AntdLayoutContent',
  component: AntdLayoutContent,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return (
    <Layout>
      <AntdLayoutContent {...props}>content</AntdLayoutContent>
    </Layout>
  );
};
