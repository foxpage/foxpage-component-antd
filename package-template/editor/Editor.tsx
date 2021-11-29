import React from 'react';
import { EditorFC, EditorWidgets } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, Label, JSONEditor } = props.widgets as EditorWidgets;

  return (
    <div>
      <Group>
        <Title>
          Antd *** (
          <a href="https://ant.design/components/grid-cn/#Row" target="_blank" rel="noreferrer">
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
