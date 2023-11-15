import { useTranslation } from "react-i18next";

import type { IProfileDropdownPrepareHook } from "./interfaces";

const useProfileDropdownPrepareHook = (): IProfileDropdownPrepareHook => {
  const { t } = useTranslation();

  return {
    t,
  };
};

export { useProfileDropdownPrepareHook };
