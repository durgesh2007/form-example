import { Text, VStack } from "native-base";
import { useForm } from "react-hook-form";
import { FormControlBase } from "../FormControlBase";

export const FormBase = ({ data }: any) => {
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <VStack space={4}>
      <Text>{data.formTitle}</Text>
      {data.formElements.map((item: any) => {
        return <FormControlBase
          item={item}
          control={control}
          errors={errors}
          onPress={handleSubmit(onSubmit)}
        />
      })}
    </VStack>
  )
}