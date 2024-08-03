import { AnchorHTMLAttributes, FC } from "react";
import { styles } from "utils";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: FC<LinkProps> = ({ className, children, ...restProps }) => (
  <a
    className={styles("underline hover:no-underline", className)}
    {...restProps}
  >
    {children}
  </a>
);
