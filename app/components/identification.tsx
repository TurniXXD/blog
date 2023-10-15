import type ICommon from "~/data/locales/common/types";

export default function Identification({
  t,
  isDesktop
}: {
  t: ICommon;
  isDesktop?: boolean;
}) {
  return (
    <div className={`${!isDesktop && 'lg:hidden'} identification-wrapper absolute bottom-0 w-full`}>
      <div className="border-t-2 border-t-sky-400 mt-3 w-full flex justify-center lg:items-center">
        <span className="identification-btn p-2 lg:py-4 flex">{t.identification.btn}</span>
        <span className="identification-content p-2 lg:p-4 text-xs leading-5">{t.identification.content}</span>
      </div>
    </div>
  );
}
