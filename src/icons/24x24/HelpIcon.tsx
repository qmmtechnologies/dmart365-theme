import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const HelpIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          d="M9.5 9.5A2.5 2.5 0 1 1 12 12v0a.5.5 0 0 0-.5.5v1"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          d="M12.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 21h-.75c0 .414.336.75.75.75V21Zm.75 0v-9h-1.5v9h1.5Zm8.25-.75H3v1.5h9v-1.5ZM20.25 12A8.25 8.25 0 0 1 12 20.25v1.5A9.75 9.75 0 0 0 21.75 12h-1.5ZM12 3.75A8.25 8.25 0 0 1 20.25 12h1.5A9.75 9.75 0 0 0 12 2.25v1.5ZM3.75 12A8.25 8.25 0 0 1 12 3.75v-1.5A9.75 9.75 0 0 0 2.25 12h1.5Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);
