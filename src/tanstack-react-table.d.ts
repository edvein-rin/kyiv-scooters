import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  export interface ColumnMeta<TData extends RowData, TValue> {
    align?: "left" | "center" | "right";
  }
}
