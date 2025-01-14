import { Input } from "@material-tailwind/react";

export function InputCustomStyles() {
  return (
    <div className="w-80 h-12">
      <Input
        size="lg"
        type="email"
        placeholder="Email Address"
        className="!border !border-gray-400 bg-white text-gray-900   ring-4 ring-transparent  placeholder:text-gray-500 placeholder:opacity-100 focus:!border-green-400 focus:!border-t-green-400  rounded-xl"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
    </div>
  );
}
