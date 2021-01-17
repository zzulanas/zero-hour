
import React from "react";
import classnames from "classnames";

function Button ({size, value, bgColor, textColor, children}) {
    return (
        <button className={classnames(`bg-${bgColor}-100 text-${textColor} hover:text-xs font-bold py-2 px-4 rounded mt-20 transition-colors hover:bg-${bgColor}-900`, {
    "text-xs": size === 'sm',
    "text-xl": size === 'lg',
    })}>
        {children}
    </button>
    )
};
export default Button;