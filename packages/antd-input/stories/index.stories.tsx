import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import AntdInput from '../src';
import Editor from '../editor';

export default {
  title: 'AntdInput',
  component: AntdInput,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    defaultValue: 'test value',
  });
  return <AntdInput {...props} />;
};
