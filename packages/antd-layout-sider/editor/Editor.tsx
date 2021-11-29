import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, FlexCol2, Label, JSONEditor, NumericInput, Select, Radio } = props.widgets;

  return (
    <div>
      <Group>
        <Title>
          Antd Layout.Sider (
          <a href="https://ant.design/components/layout-cn/#Layout.Sider" target="_blank" rel="noreferrer">
            docs
          </a>
          )
        </Title>
        <FlexCol2>
          <Field>
            <Label>width: (宽度)</Label>
            <NumericInput propKey="width" addonAfter="px" />
          </Field>
          <Field>
            <Label>theme: (主题颜色)</Label>
            <Select propKey="theme">
              <Select.Option value="light">light</Select.Option>
              <Select.Option value="dark">dark</Select.Option>
            </Select>
          </Field>
          <Field>
            <Label>collapsible: (是否可收起)</Label>
            <Radio.Group propKey="collapsible">
              <Radio value>true</Radio>
              <Radio value={false}>false</Radio>
            </Radio.Group>
          </Field>
          <Field>
            <Label>defaultCollapsed: (是否默认收起)</Label>
            <Radio.Group propKey="defaultCollapsed">
              <Radio value>true</Radio>
              <Radio value={false}>false</Radio>
            </Radio.Group>
          </Field>
          <Field>
            <Label>collapsedWidth: (收缩宽度，设置为 0 会出现特殊 trigger)</Label>
            <NumericInput propKey="collapsedWidth" addonAfter="px" />
          </Field>
          <Field>
            <Label>breakpoint: (触发响应式布局的断点)</Label>
            <Select propKey="breakpoint">
              <Select.Option value="xs">xs</Select.Option>
              <Select.Option value="sm">sm</Select.Option>
              <Select.Option value="md">md</Select.Option>
              <Select.Option value="lg">lg</Select.Option>
              <Select.Option value="xl">xl</Select.Option>
              <Select.Option value="xxl">xxl</Select.Option>
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
