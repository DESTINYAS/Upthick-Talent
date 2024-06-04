import React from "react";

const Button = (props: {
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div>
      <button className=" p-2 sm:px-5 sm:py-4  text-lg font-semibold sm:h-14 rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
