import React, { useState } from "react";

interface BlockProps {
  value: string | null;
  onClick?: () => void;
}

const Block: React.FC<BlockProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="flex justify-center items-center font-medium text-4xl border-2 border-solid h-25 w-25 cursor-pointer"
    >
      {props.value}
    </div>
  );
};

export default Block;
