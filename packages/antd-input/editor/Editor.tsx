import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, FlexCol2, Label, JSONEditor, Input, Select, Radio } = props.widgets;

  return (
    <div>
      <Group>
        <Title>
          Antd *** (
          <a href="https://ant.design/components/input-cn/#Input" target="_blank" rel="noreferrer">
            docs
          </a>
          )
        </Title>
        <FlexCol2>
          <Field>
            <Label>defaultValue: (输入框默认内容)</Label>
            <Input propKey="defaultValue" />
          </Field>
          <Field>
            <Label>size: (控件大小。注：标准表单内的输入框大小限制为 large)</Label>
            <Select propKey="size">
              <Select.Option value="large">large</Select.Option>
              <Select.Option value="middle">middle</Select.Option>
              <Select.Option value="small">small</Select.Option>
            </Select>
          </Field>
          <Field>
            <Label>bordered: (是否有边框)</Label>
            <Radio.Group propKey="bordered">
              <Radio value>true</Radio>
              <Radio value={false}>false</Radio>
            </Radio.Group>
          </Field>
          <Field>
            <Label>allowClear: (可以点击清除图标删除内容)</Label>
            <Radio.Group propKey="allowClear">
              <Radio value>true</Radio>
              <Radio value={false}>false</Radio>
            </Radio.Group>
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
