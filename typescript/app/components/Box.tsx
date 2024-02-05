"use client";
import { Dispatch, SetStateAction } from "react";
// type propsType = {
//   label: string;
//   value: T;
// };
type inputvaltype = string | number;
export default function Box<T extends inputvaltype>({
  label,
  value,
  setter,
  placeholder,
}: {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>;
  placeholder: string;
}) {
  return (
    <form>
      <label className="block">{label}</label>
      <input
        className="py-2 border-2 border-black/20"
        type="text"
        value={value}
        onChange={(e) => setter(e.target.value as T)}
        placeholder={placeholder}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
