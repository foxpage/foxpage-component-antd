import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, FlexCol2, Label, Input, NumericInput, JSONEditor } = props.widgets;

  return (
    <div>
      <Group>
        <Title>
          Antd Affix (
          <a href="https://ant.design/components/affix-cn/#API" target="_blank" rel="noreferrer">
            docs
          </a>
          )
        </Title>
        <FlexCol2>
          <Field>
            <Label>Offset Top</Label>
            <NumericInput placeholder="offsetTop" propKey="offsetTop" />
          </Field>
          <Field>
            <Label>Offset Bottom</Label>
            <NumericInput placeholder="offsetBottom" propKey="offsetBottom" />
          </Field>
          <Field>
            <Label>Target</Label>
            <Input placeholder="querySelector string" propKey="target" />
          </Field>
        </FlexCol2>
        <Field>
          <Label>Customer Attributes</Label>
          <JSONEditor propKey="attrs" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
