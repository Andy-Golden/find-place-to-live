import { useState } from "react";
import { useTranslation } from "react-i18next";

import type { IProfileDropdownPrepareHook } from "./interfaces";

const useProfileDropdownPrepareHook = (): IProfileDropdownPrepareHook => {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(false);

  const handleShowDropDown = (): void => {
    setIsShow(!isShow);
  };

  return {
    t,
    isShow,
    onShowDropdown: handleShowDropDown,
  };
};

export { useProfileDropdownPrepareHook };
