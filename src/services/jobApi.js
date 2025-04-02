import supabase from "../libs/suspabase";

export const createJobApi = async (values) => {
  console.log(values);
  const { data, error } = await supabase
    .from("jobs")
    .insert([values])
    .eq("user_id", values?.user_id)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};
