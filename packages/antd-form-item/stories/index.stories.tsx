import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import AntdForm from '@fox-design/antd-form';
import AntdInput from '@fox-design/antd-input';
import AntdButton from '@fox-design/antd-button';
import AntdFormItem from '../src';
import Editor from '../editor';

export default {
  title: 'AntdFormItem',
  component: AntdFormItem,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    name: 'text',
    label: 'text',
    attrs: {
      rules: [{ required: true, message: 'Please input text!' }],
    },
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <AntdForm
      attrs={{
        onFinish,
      }}
    >
      <AntdFormItem {...props}>
        <AntdInput />
      </AntdFormItem>
      <AntdFormItem>
        <AntdButton
          textChildren="Submit"
          type="primary"
          attrs={{
            htmlType: 'submit',
          }}
        />
      </AntdFormItem>
    </AntdForm>
  );
};
