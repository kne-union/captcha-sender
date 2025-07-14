
# captcha-sender


### 描述

用于实现一个发送验证码按钮


### 安装

```shell
npm i --save @kne/captcha-sender
```

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _CaptchaSender(@kne/current-lib_captcha-sender)[import * as _CaptchaSender from "@kne/captcha-sender"],(@kne/current-lib_captcha-sender/dist/index.css),ReactForm(@kne/react-form-antd),(@kne/react-form-antd/dist/index.css),antd(antd)

```jsx
const { default: CaptchaSender } = _CaptchaSender;
const { default: Form, Input } = ReactForm;
const { App, Flex } = antd;
const BaseExample = () => {
  const { message } = App.useApp();
  return (
    <Form>
      <Flex align="top" gap={10}>
        <Input name="email" label="Email" realtime rule="REQ EMAIL" />
        <CaptchaSender
          target={{ name: 'email' }}
          onClick={async () => {
            await new Promise(resolve => {
              setTimeout(() => {
                message.success('发送验证码');
                resolve();
              }, 1000);
            });
          }}>
          Send
        </CaptchaSender>
      </Flex>
    </Form>
  );
};

render(<BaseExample />);

```


### API

| 属性 | 类型 | 默认值 | 说明 |
|----|----|-----|----|
|    |    |     |    |
