import { useForm } from "react-hook-form";
import { Button } from "react-native";
import { Input } from "../Input";

export const FormFirst = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <>
      <Input
        label="First Name"
        control={control}
        name={"FirstName"}
      />
      <Input
        label="Last Name"
        control={control}
        name={"LastName"}
      />
      <Input
        label="Email"
        control={control}
        name={"Email"}
      />
      <Button
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
    </>
  )
}