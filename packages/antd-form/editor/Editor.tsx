import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, FlexCol2, Label, JSONEditor, Select } = props.widgets;

  return (
    <div>
      <Group>
        <Title>
          Antd *** (
          <a href="https://ant.design/components/form-cn/#API" target="_blank" rel="noreferrer">
            docs
          </a>
          )
        </Title>
        <FlexCol2>
          <Field>
            <Label>layout: (表单布局)</Label>
            <Select propKey="layout">
              <Select.Option value="horizontal">horizontal</Select.Option>
              <Select.Option value="vertical">vertical</Select.Option>
              <Select.Option value="inline">inline</Select.Option>
            </Select>
          </Field>
          <Field>
            <Label>size: (设置字段组件的尺寸（仅限 antd 组件）)</Label>
            <Select propKey="size">
              <Select.Option value="large">large</Select.Option>
              <Select.Option value="middle">middle</Select.Option>
              <Select.Option value="small">small</Select.Option>
            </Select>
          </Field>
        </FlexCol2>
        <Field>
          <Label>Custom Component Props:</Label>
          <JSONEditor propKey="attrs" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
