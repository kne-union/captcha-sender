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