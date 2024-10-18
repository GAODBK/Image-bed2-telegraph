import React from "react";

const TooltipItem = ({ children, tooltipsText, position }) => {
  const baseTooltipClass = `absolute bg-slate-200 z-20 whitespace-nowrap rounded bg-primary px-4 py-[6px] text-sm font-semibold opacity-0 group-hover:opacity-100`;
  const baseArrowClass = `absolute -z-10 h-2 w-2 rotate-45 rounded-sm bg-primary`;

  let positionTooltipClass = '';
  let positionArrowClass = '';

  switch (position) {
    case "right":
      positionTooltipClass = 'left-full top-1/2 ml-3 -translate-y-1/2';
      positionArrowClass = 'left-[-3px] top-1/2 -translate-y-1/2';
      break;
    case "top":
      positionTooltipClass = 'bottom-full left-1/2 mb-3 -translate-x-1/2';
      positionArrowClass = 'bottom-[-3px] left-1/2 -translate-x-1/2';
      break;
    case "left":
      positionTooltipClass = 'right-full top-1/2 mr-3 -translate-y-1/2';
      positionArrowClass = 'right-[-3px] top-1/2 -translate-y-1/2';
      break;
    case "bottom":
      positionTooltipClass = 'left-1/2 top-full mt-3 -translate-x-1/2';
      positionArrowClass = 'left-1/2 top-[-3px] -translate-x-1/2';
      break;
    default:
      break; // 或者根据需要设置一个默认值
  }

  return (
    <div className="relative inline-block">
      <button className="inline-flex rounded">
        {children}
      </button>
      <div className={`${baseTooltipClass} ${positionTooltipClass}`}>
        <span className={`${baseArrowClass} ${positionArrowClass}`}></span>
        {tooltipsText}
      </div>
    </div>
  );
};

export default TooltipItem;
