import type React from "react";

export interface ISelectPrepareHook {
  lang: string;
  onSwitchLang: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
