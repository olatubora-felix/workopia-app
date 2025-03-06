import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useFormValidate = (initialState, schema) => {
  return useForm({
    defaultValues: initialState,
    resolver: zodResolver(schema),
  });
};

export default useFormValidate;
