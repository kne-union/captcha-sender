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
