import React from "react";

import { SelectMenu } from "@components";
import { langOptions } from "@constants";

import { useSelectLanguagePrepareHook } from "./helper";

const SelectLanguage = (): JSX.Element => {
  const { lang, onSwitchLang } = useSelectLanguagePrepareHook();
  return (
    <SelectMenu
      defaultValue={lang}
      options={langOptions}
      onChange={onSwitchLang}
    />
  );
};

export default SelectLanguage;
