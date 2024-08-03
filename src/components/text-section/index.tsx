import { FC, ReactNode } from "react";

export type TextSectionProps = {
  id?: string;
  children?: ReactNode;
};

export const TextSection: FC<TextSectionProps> = ({ id, children }) => (
  <section id={id} className="flex justify-center">
    <div className="max-w-[680px] mx-6 w-full min-w-0 pt-8 pb-16 prose md:prose-lg">
      {children}
    </div>
  </section>
);
