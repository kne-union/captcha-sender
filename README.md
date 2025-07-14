
# captcha-sender


### 描述

用于实现一个发送验证码按钮


### 安装

```shell
npm i --save @kne/captcha-sender
```


### 概述

`CaptchaSender` 是一个用于发送验证码的 React 组件，它提供了以下功能：

- 与表单系统集成，可以根据表单字段的验证状态控制按钮的可用性
- 发送验证码后自动开始倒计时
- 在倒计时期间禁用按钮，并显示剩余时间
- 支持自定义倒计时时长
- 支持自定义按钮文本和样式

### 何时使用

当你需要在表单中添加发送验证码功能时，例如：

- 用户注册或登录时发送手机验证码
- 重置密码时发送邮箱验证码
- 需要二次验证的操作

### 基本用法

```jsx
import CaptchaSender from '@kne/captcha-sender';
import Form, { Input } from '@kne/react-form-antd';

const MyForm = () => {
  return (
    <Form>
      <Input name="email" label="邮箱" realtime rule="REQ EMAIL" />
      <CaptchaSender
        target={{ name: 'email' }}
        onClick={async () => {
          // 发送验证码的异步操作
          await sendVerificationCode();
        }}
      >
        发送验证码
      </CaptchaSender>
      <Input name="verificationCode" label="验证码" rule="REQ" />
    </Form>
  );
};
```

### 注意事项

- `target` 属性用于指定要验证的表单字段，通常是手机号或邮箱字段
- `onClick` 回调函数应返回一个 Promise，如果返回 `false`，则不会开始倒计时
- 默认倒计时时长为 60 秒，可通过 `duration` 属性自定义


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
- _CaptchaSender(@kne/current-lib_captcha-sender)[import * as _CaptchaSender from "@kne/captcha-sender"],ReactForm(@kne/react-form-antd),(@kne/react-form-antd/dist/index.css),antd(antd)

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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 按钮的内容 | ReactNode | - |
| target | 目标表单字段，用于验证字段是否有效 | { name: string } \| { names: string[] } | - |
| onClick | 点击按钮时的回调函数，如果返回 false 则不会开始倒计时 | () => Promise\<any\> \| false | - |
| duration | 倒计时时长（秒） | number | 60 |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |
| loadingProps | LoadingButton 的属性 | LoadingButtonProps | - |

### 说明

1. `target` 属性用于指定要验证的表单字段，可以是单个字段名或多个字段名的数组。组件会检查这些字段是否通过验证，如果没有通过验证，按钮将被禁用。

2. `onClick` 回调函数应返回一个 Promise，表示验证码发送操作。如果返回 `false`，则不会开始倒计时。

3. 当点击按钮并且 `onClick` 回调成功执行后，组件会自动开始倒计时，在倒计时期间按钮将被禁用，并显示剩余时间。

4. 组件继承了 `LoadingButton` 的所有属性，因此可以通过 `loadingProps` 传递 `LoadingButton` 的属性。
