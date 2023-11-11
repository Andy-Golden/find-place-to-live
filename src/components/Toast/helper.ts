import { useState } from "react";

import type { IToastPrepareHook } from "./interfaces";

const useToastPrepareHook = (visible: boolean): IToastPrepareHook => {
  const [isDisplay, setIsDisplay] = useState(visible);

  const handleHideToast = (): void => {
    setIsDisplay(false);
  };

  return {
    isDisplay,
    onHideToast: handleHideToast,
  };
};

export { useToastPrepareHook };
