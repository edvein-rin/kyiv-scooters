import { FC, ReactNode } from "react";

import { styles } from "utils";

export type TextBlockProps = {
  children?: ReactNode;
  className?: string;
};

export const TextBlock: FC<TextBlockProps> = ({ children, className }) => (
  <div className="flex justify-center">
    <div
      className={styles(
        "max-w-[680px] mx-6 w-full min-w-0 py-8 prose md:prose-lg",
        "[&_h1]:mb-5 [&_h1]:text-3xl",
        className
      )}
    >
      {children}
    </div>
  </div>
);
