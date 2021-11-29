import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import AntdFormItem from '@fox-design/antd-form-item';
import AntdInput from '@fox-design/antd-input';
import AntdButton from '@fox-design/antd-button';
import AntdForm from '../src';
import Editor from '../editor';

export default {
  title: 'AntdForm',
  component: AntdForm,
  decorators: [withFoxpageEditor],
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <AntdForm {...props} attrs={{ onFinish }}>
      <AntdFormItem
        label="Username"
        name="username"
        attrs={{
          rules: [{ required: true, message: 'Please input your username!' }],
        }}
      >
        <AntdInput />
      </AntdFormItem>

      <AntdFormItem
        label="Password"
        name="password"
        attrs={{
          rules: [{ required: true, message: 'Please input your password!' }],
        }}
      >
        <AntdInput />
      </AntdFormItem>

      {/* <AntdFormItem name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </AntdFormItem> */}

      <AntdFormItem
        attrs={{
          wrapperCol: { offset: 8, span: 16 },
        }}
      >
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
