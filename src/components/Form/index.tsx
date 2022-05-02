import { ScrollView, Text, VStack } from "native-base";
import { useForm } from "react-hook-form";
import { FormBase } from "../FormBase";
export const Form = ({ data }: any) => {
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
    <ScrollView>
      <VStack space={4}>
        <Text>{data.formTitle}</Text>
        {data.formElements.map((item: any) => {
          if (item.type === 'Array') {
            return item.gridheaderFields.map((i: any) => {
              return <FormBase
                item={i}
                control={control}
                errors={errors}
              />
            })
          } else {
            return <FormBase
              item={item}
              control={control}
              errors={errors}
              onPress={handleSubmit(onSubmit)}
            />
          }
        })}
      </VStack>
    </ScrollView>
  )
}