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
