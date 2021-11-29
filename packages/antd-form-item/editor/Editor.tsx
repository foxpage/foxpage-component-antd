import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, FlexCol2, Label, Input, JSONEditor } = props.widgets;

  return (
    <div>
      <Group>
        <Title>
          Antd *** (
          <a href="https://ant.design/components/form-cn/#Form.Item" target="_blank" rel="noreferrer">
            docs
          </a>
          )
        </Title>
        <FlexCol2>
          <Field>
            <Label>name: (表单字段名)</Label>
            <Input propKey="name" />
          </Field>
          <Field>
            <Label>label: (label 标签的文本)</Label>
            <Input propKey="label" />
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
