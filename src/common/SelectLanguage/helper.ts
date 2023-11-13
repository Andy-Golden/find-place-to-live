import type React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store";
import { switchLang } from "store/slices";

import { Lang } from "@enums";

import type { ISelectPrepareHook } from "./interfaces";

const useSelectLanguagePrepareHook = (): ISelectPrepareHook => {
  const { i18n } = useTranslation();

  const lang = useSelector((state: RootState) => state.langReducer.lang);

  const dispatch = useDispatch();

  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng");
    dispatch(switchLang(lang ?? Lang.EN));
  }, []);

  const handleSwitchLang = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    void i18n.changeLanguage(e.target.value);
    dispatch(switchLang(e.target.value));
  };

  return {
    lang,
    onSwitchLang: handleSwitchLang,
  };
};

export { useSelectLanguagePrepareHook };
