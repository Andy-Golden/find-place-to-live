import type { TFunction } from "i18next";

export interface IProfileDropdownPrepareHook {
  t: TFunction<"Translation", undefined>;
  isShow: boolean;
  onShowDropdown: () => void;
}
