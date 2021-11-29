import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, Label, JSONEditor } = props.widgets;

  return (
    <div>
      <Group>
        <Title>
          Antd Layout.Header (
          <a href="https://ant.design/components/layout-cn/#API" target="_blank" rel="noreferrer">
            docs
          </a>
          )
        </Title>
        <Field>
          <Label>Custom Component Props:</Label>
          <JSONEditor propKey="attrs" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
