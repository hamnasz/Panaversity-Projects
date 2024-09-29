import { FunctionComponent } from "react";
import TabsMask from "../components/TabsMask";

const InstagramSearch: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start gap-[22px] leading-[normal] tracking-[normal]">
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <TabsMask />
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/photos@2x.png"
        />
      </main>
      <img
        className="w-full h-[81px] absolute !m-[0] right-[0px] bottom-[-2px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/tab-bar@2x.png"
      />
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-center pt-5 pb-[9px] pl-[21px] pr-5 relative z-[2]">
        <footer className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <div className="h-[5px] w-[134px] relative rounded-[100px] bg-white z-[1]" />
      </div>
    </div>
  );
};

export default InstagramSearch;
