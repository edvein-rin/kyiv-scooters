import { FC } from "react";
import { styles } from "utils";

export const findSmallest = (values: Value[]): Value =>
  values.reduce<Value>((previousMinValue, value) => {
    if (typeof value === "string" || typeof previousMinValue === "string")
      return previousMinValue;
    if (value === null || previousMinValue === null) return null;
    if (value === undefined) return previousMinValue;
    if (previousMinValue === undefined) return value;

    return value < previousMinValue ? value : previousMinValue;
  }, undefined);

export const findBiggest = (values: Value[]): Value =>
  values.reduce<Value>((previousMinValue, value) => {
    if (typeof value === "string" || typeof previousMinValue === "string")
      return previousMinValue;
    if (value === null || previousMinValue === null) return null;
    if (value === undefined) return previousMinValue;
    if (previousMinValue === undefined) return value;

    return value > previousMinValue ? value : previousMinValue;
  }, undefined);

export type Value = string | number | null | undefined;

export type RowProps = {
  label: string;
  values: Value[];
  highlight?: "min" | "max" | undefined;
  formatValue?: (value: NonNullable<Value> | null) => string;
};

export const Row: FC<RowProps> = ({
  label,
  values,
  highlight,
  formatValue = (value) => value,
}) => {
  const valueToHighlight =
    highlight === undefined
      ? undefined
      : highlight === "min"
      ? findSmallest(values)
      : findBiggest(values);

  return (
    <tr>
      <th>{label}</th>
      {values.map((value, index) => {
        const highlighted =
          value === valueToHighlight && valueToHighlight !== undefined;
        return (
          <td
            key={index}
            className={styles(
              "whitespace-nowrap",
              highlighted && "font-semibold"
            )}
          >
            {value === undefined ? null : formatValue(value)}
          </td>
        );
      })}
    </tr>
  );
};
