import { FunctionComponent } from "react";

export type TabsMaskType = {
  className?: string;
};

const TabsMask: FunctionComponent<TabsMaskType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_0.3px_0px_rgba(60,_60,_67,_0.29)] bg-gray-300 flex flex-col items-end justify-start pt-0 px-0 pb-[7px] box-border gap-1 top-[0] z-[99] sticky max-w-full text-center text-sm text-whitesmoke font-sf-pro-text ${className}`}
    >
      <div className="self-stretch h-[132px] relative shadow-[0px_0.3px_0px_rgba(60,_60,_67,_0.29)] bg-gray-300 hidden" />
      <header className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-3.5 pb-3 pl-[21px] pr-[15px] relative gap-5 z-[4] text-center text-mini text-white font-sf-pro-text">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <div className="w-[54px] relative tracking-[-0.3px] font-semibold inline-block shrink-0 z-[1]">
          9:41
        </div>
        <div className="w-[66.6px] flex flex-col items-start justify-start pt-[3.3px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
            <img
              className="h-[10.7px] w-[17px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/cellular-connection.svg"
            />
            <img
              className="h-[11px] w-[15.3px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/wifi.svg"
            />
            <div className="h-[11.3px] w-[24.3px] relative z-[1]">
              <div className="absolute top-[0px] right-[2.3px] rounded-[2.67px] border-white border-[1px] border-solid box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal" />
              <img
                className="absolute top-[3.7px] right-[0px] w-[1.3px] h-1 mix-blend-normal"
                loading="lazy"
                alt=""
                src="/cap.svg"
              />
              <div className="absolute top-[2px] right-[4.3px] rounded-[1.33px] bg-white w-[18px] h-[7.3px] z-[1]" />
            </div>
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pl-2 pr-0 box-border gap-[9px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-2.5 box-border gap-2.5 max-w-full">
          <div className="flex-1 rounded-3xs bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-1.5 px-[11px] pb-2 box-border gap-[9px] max-w-full z-[4]">
            <div className="h-9 w-[327px] relative rounded-3xs bg-gray-200 hidden max-w-full" />
            <div className="flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0">
              <img
                className="w-[13.7px] h-[13.7px] relative object-cover z-[1]"
                alt=""
                src="/search-icon@2x.png"
              />
            </div>
            <input
              className="w-[51px] [border:none] [outline:none] font-sf-pro-text text-base bg-[transparent] h-[22px] relative tracking-[-0.3px] leading-[22px] text-gray-100 text-left inline-block p-0 z-[1]"
              placeholder="Search"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <img
              className="w-5 h-5 relative object-cover z-[4]"
              alt=""
              src="/live@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-1.5">
          <button className="cursor-pointer border-gray-400 border-[1px] border-solid pt-1.5 pb-[5px] pl-3 pr-2 bg-black flex-1 rounded-md overflow-hidden flex flex-row items-start justify-start gap-[5px] z-[2]">
            <div className="h-8 w-[75px] relative rounded-md bg-black border-gray-400 border-[1px] border-solid box-border hidden" />
            <img
              className="h-[14.8px] w-[12.5px] relative object-cover z-[1]"
              alt=""
              src="/icon@2x.png"
            />
            <a className="[text-decoration:none] relative text-sm tracking-[-0.2px] font-semibold font-sf-pro-text text-whitesmoke text-left inline-block min-w-[35px] z-[1]">
              IGTV
            </a>
          </button>
          <button className="cursor-pointer border-gray-400 border-[1px] border-solid pt-1.5 pb-[5px] pl-[11px] pr-2.5 bg-black flex-1 rounded-md overflow-hidden flex flex-row items-start justify-start gap-[6.5px] z-[2]">
            <div className="h-8 w-[77px] relative rounded-md bg-black border-gray-400 border-[1px] border-solid box-border hidden" />
            <img
              className="h-[14.5px] w-[12.5px] relative object-cover z-[1]"
              alt=""
              src="/icon-1@2x.png"
            />
            <a className="[text-decoration:none] relative text-sm tracking-[-0.2px] font-semibold font-sf-pro-text text-whitesmoke text-left inline-block min-w-[35px] z-[1]">
              Shop
            </a>
          </button>
          <div className="w-14 rounded-md bg-black border-gray-400 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-1.5 pb-[5px] pl-2.5 pr-[9px] z-[2]">
            <div className="h-8 w-14 relative rounded-md bg-black border-gray-400 border-[1px] border-solid box-border hidden" />
            <a className="[text-decoration:none] w-[35px] relative tracking-[-0.2px] font-semibold text-[inherit] inline-block min-w-[35px] z-[1]">
              Style
            </a>
          </div>
          <div className="flex-1 rounded-md bg-black border-gray-400 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-1.5 px-2.5 pb-[5px] z-[2]">
            <div className="h-8 w-[68px] relative rounded-md bg-black border-gray-400 border-[1px] border-solid box-border hidden" />
            <a className="[text-decoration:none] w-[46px] relative font-semibold text-[inherit] inline-block z-[1]">
              Sports
            </a>
          </div>
          <div className="w-[53px] rounded-md bg-black border-gray-400 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-1.5 pb-[5px] pl-2.5 pr-[9px] z-[2]">
            <div className="h-8 w-[53px] relative rounded-md bg-black border-gray-400 border-[1px] border-solid box-border hidden" />
            <a className="[text-decoration:none] w-8 relative tracking-[-0.2px] font-semibold text-[inherit] inline-block min-w-[32px] z-[1]">
              Auto
            </a>
          </div>
          <div className="h-8 w-2 relative">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-black border-darkslategray border-[1px] border-solid box-border w-[62px] h-8 z-[2]" />
            <a className="[text-decoration:none] absolute top-[8px] left-[11px] tracking-[-0.2px] font-semibold text-[inherit] z-[3]">
              Music
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsMask;
