import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, FlexCol2, Label, Input, NumericInput, JSONEditor } = props.widgets;

  return (
    <div>
      <Group>
        <Title>
          Antd Col (
          <a href="https://ant.design/components/grid-cn/#Col" target="_blank" rel="noreferrer">
            docs
          </a>
          )
        </Title>
        <FlexCol2>
          <Field>
            <Label>span: (栅格占位格数，为 0 时相当于 display: none)</Label>
            <NumericInput placeholder="span" propKey="span" />
          </Field>
          <Field>
            <Label>offset: (栅格左侧的间隔格数，间隔内不可以有栅格)</Label>
            <NumericInput placeholder="offset" propKey="offset" />
          </Field>
          <Field>
            <Label>order: (栅格顺序)</Label>
            <NumericInput placeholder="order" propKey="order" />
          </Field>
          <Field>
            <Label>pull: (栅格向左移动格数)</Label>
            <NumericInput placeholder="pull" propKey="pull" />
          </Field>
          <Field>
            <Label>push: (栅格向右移动格数)</Label>
            <NumericInput placeholder="push" propKey="push" />
          </Field>
          <Field>
            <Label>flex: (flex 布局属性)</Label>
            <Input placeholder="flex" propKey="flex" />
          </Field>
        </FlexCol2>
        <Field>
          <Label>Custom Col Props:</Label>
          <JSONEditor propKey="attrs" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
