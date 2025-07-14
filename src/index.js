import React, { useState } from 'react';
import { LoadingButton } from '@kne/button-group';
import { useFormContext, formUtils } from '@kne/react-form-antd';
import get from 'lodash/get';
import '@kne/button-group/dist/index.css';

const CaptchaSender = ({ children, target, onClick, duration = 60, ...props }) => {
  const { formState } = useFormContext();

  const targetField = formUtils.findField(formState, target);
  const [time, setTime] = useState(0);
  const setCountdown = time => {
    setTime(time);
    const timer = setInterval(() => {
      setTime(time => {
        if (time - 1 === 0) {
          clearInterval(timer);
        }
        return time - 1;
      });
    }, 1000);
  };

  return (
    <LoadingButton
      {...props}
      disabled={get(targetField, 'validate.status') !== 'PASS' || time > 0}
      onClick={async () => {
        const res = onClick && (await onClick());
        res !== false && setCountdown(duration);
      }}
    >
      {time === 0 ? children : `${time}s`}
    </LoadingButton>
  );
};

export default CaptchaSender;
