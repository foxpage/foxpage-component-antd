import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, FlexCol2, Label, JSONEditor, Input, Select } = props.widgets;

  return (
    <div>
      <Group>
        <Title>
          Antd *** (
          <a href="https://ant.design/components/button-cn/#API" target="_blank" rel="noreferrer">
            docs
          </a>
          )
        </Title>
        <FlexCol2>
          <Field>
            <Label>textChildren: (button 文案，会替换 children 属性)</Label>
            <Input propKey="textChildren" />
          </Field>
          <Field>
            <Label>shape: (设置按钮形状)</Label>
            <Select propKey="shape">
              <Select.Option value="circle">circle</Select.Option>
              <Select.Option value="round">round</Select.Option>
            </Select>
          </Field>
          <Field>
            <Label>size: (设置按钮大小)</Label>
            <Select propKey="size">
              <Select.Option value="large">large</Select.Option>
              <Select.Option value="middle">middle</Select.Option>
              <Select.Option value="small">small</Select.Option>
            </Select>
          </Field>
          <Field>
            <Label>type: (设置按钮类型)</Label>
            <Select propKey="type">
              <Select.Option value="default">default</Select.Option>
              <Select.Option value="primary">primary</Select.Option>
              <Select.Option value="ghost">ghost</Select.Option>
              <Select.Option value="dashed">dashed</Select.Option>
              <Select.Option value="link">link</Select.Option>
              <Select.Option value="text">text</Select.Option>
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
