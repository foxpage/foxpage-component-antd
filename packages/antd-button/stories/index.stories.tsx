import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import AntdButton from '../src';
import Editor from '../editor';

export default {
  title: 'AntdButton',
  component: AntdButton,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    textChildren: 'Primary Button',
    type: 'primary',
    attrs: {},
  });
  return <AntdButton {...props} />;
};
