import React, { useEffect, useState } from "react";

interface DelayRenderProps {
  children: React.ReactNode;
  delay: number;
}

const DelayRender = (props: DelayRenderProps) => {
  const { children, delay } = props;
  const [render, setRender] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRender(true)
    }, delay);

    return () => {
      clearTimeout(timeout);
      setRender(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return <>{render ? children : null}</>;
};

export default DelayRender;
