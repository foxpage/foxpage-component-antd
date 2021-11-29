import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, FlexCol2, Label, Input, Select, NumericInput, JSONEditor } = props.widgets;

  return (
    <div>
      <Group>
        <Title>
          Antd Row (
          <a href="https://ant.design/components/grid-cn/#Row" target="_blank" rel="noreferrer">
            docs
          </a>
          )
        </Title>
        <Field>
          <Label>Align:</Label>
          <Select propKey="align">
            <Select.Option value="top">top</Select.Option>
            <Select.Option value="middle">middle</Select.Option>
            <Select.Option value="bottom">bottom</Select.Option>
            <Select.Option value="stretch">stretch</Select.Option>
          </Select>
        </Field>
        <Field>
          <Label>Justify:</Label>
          <Select propKey="justify">
            <Select.Option value="start">start</Select.Option>
            <Select.Option value="end">end</Select.Option>
            <Select.Option value="center">center</Select.Option>
            <Select.Option value="space-around">space-around</Select.Option>
            <Select.Option value="space-between">space-between</Select.Option>
          </Select>
        </Field>
        <Field>
          <Label>Custom Row Props:</Label>
          <JSONEditor propKey="attrs" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
