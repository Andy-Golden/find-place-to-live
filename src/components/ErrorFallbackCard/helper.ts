import type { IErrorFallbackCard } from "./interfaces";

const useErrorFallbackCardPrepareHook = (): IErrorFallbackCard => {
  const reloadPage = (): void => {
    location.reload();
  };

  return {
    onReload: reloadPage,
  };
};

export { useErrorFallbackCardPrepareHook };
