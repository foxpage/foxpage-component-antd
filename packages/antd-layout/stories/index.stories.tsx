import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import { Layout, Menu } from 'antd';
import AntdLayout from '../src';
import Editor from '../editor';

const { Header, Content, Footer, Sider } = Layout;

export default {
  title: 'AntdLayout',
  component: AntdLayout,
  decorators: [withFoxpageEditor],
};

const TestContent: React.FC<{}> = () => {
  const tempStyleCode = `.test-demo-logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
  }
  .test-demo-site-layout .test-demo-site-layout-background {
    background: #fff;
  }`;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: tempStyleCode }} />
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="test-demo-logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon="XxX">
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon="XxX">
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon="XxX">
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon="XxX">
            nav 4
          </Menu.Item>
          <Menu.Item key="5" icon="XxX">
            nav 5
          </Menu.Item>
          <Menu.Item key="6" icon="XxX">
            nav 6
          </Menu.Item>
          <Menu.Item key="7" icon="XxX">
            nav 7
          </Menu.Item>
          <Menu.Item key="8" icon="XxX">
            nav 8
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="test-demo-site-layout" style={{ marginLeft: 200 }}>
        <Header className="test-demo-site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="test-demo-site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  );
};

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    attrs: {
      hasSider: true,
    },
  });
  return (
    <AntdLayout {...props}>
      <TestContent />
    </AntdLayout>
  );
};
