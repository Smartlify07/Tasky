"use client";
import { useField } from "formik";

const TextInput = ({ label, Icon, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-semibold text-purple-700">{label}</label>

      <div className="relative w-full">
        <input
          {...field}
          {...props}
          className="rounded-md px-4 w-full py-3 bg-none bg-transparent border-2 border-violet-500 text-orange-500 font-medium transition-all placeholder:text-orange-500 focus:outline-none focus:border-none focus:ring-4 focus:ring-violet-700 "
        />

        <Icon className="size-6 absolute right-3.5 top-3 " />
      </div>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
