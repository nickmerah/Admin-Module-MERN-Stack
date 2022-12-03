import React from "react";
import { useForm } from "react-hook-form";

const TestAPIs = (loadednames) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      schoolname: loadednames.loadednames[0].schoolname,
      schoolabvname: loadednames.loadednames[0].schoolabvname,
    },
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("schoolname")}
          placeholder="First Name"
          type="text"
        />

        <input
          {...register("schoolabvname")}
          placeholder="Last Name"
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TestAPIs;
