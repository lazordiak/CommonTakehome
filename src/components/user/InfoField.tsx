import { ChangeEvent, FC } from "react";

type InfoFieldProps = {
  editingAcct: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  formName: string;
  title: string;
};

export const InfoField: FC<InfoFieldProps> = ({
  editingAcct,
  handleChange,
  value,
  formName,
  title,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <input
        className={
          "flex-2 border-b border-1-black rounded border " +
          `${editingAcct ? "bg-slate-100 " : "bg-white"}`
        }
        name={formName}
        value={value}
        onChange={handleChange}
        disabled={!editingAcct}
      ></input>
      <p className="font-semibold flex-1 lg:text-end">{title}</p>
    </div>
  );
};
