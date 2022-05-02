import { Button, Text, VStack } from "native-base";
import React from "react";
import { useForm } from "react-hook-form";
import Sales from "../../data/Sales.json";
import { InputText } from "../InputText";

const Type = {
  LABEL_TEXT_BOX: 'LabeledTextBox',
  DROP_DOWN: 'dropDown',
  SIGNATURE: 'Signature',
  BUTTON: 'Button',
  DATE: 'Date',
  ARRAY: 'Array'
}

interface SignInFields {
  email: string;
  password: string;
  error?: string;
}

export const FormTest = () => {
  const {
    control,
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("data:", data);
  }
  // dynamic forms pass sale or ship here...
  return (
    <VStack space={4}>
      {Sales && Sales.formElements && Sales.formElements.length > 0 &&
        Sales.formElements.map((item, index) => {
          return (
            <>
              <Text>{index} - {item.type}</Text>
              {item.type === Type.LABEL_TEXT_BOX &&
                <InputText
                  key={index.toString()}
                  fieldId={item.serverField}
                  label={item.label}
                  control={control}
                  isRequired={item.isRequired}
                  errors={errors}
                />
              }
              {item.type === Type.BUTTON &&
                <Button
                  isLoading={isSubmitting}
                  onPress={handleSubmit(onSubmit)}>
                  {item.label}
                </Button>
              }
            </>
          )
        })}
      <Button
        isLoading={isSubmitting}
        onPress={handleSubmit(onSubmit)}
      >Submit</Button>
    </VStack>
  )
}