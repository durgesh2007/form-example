import { Button, VStack } from "native-base";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputEmail } from "../InputEmail";
import { InputPassword } from "../InputPassword";
import { InputPhone } from "../InputPhone";

interface SignUpFields {
  email: string;
  password: string;
  phone: string;
  gender: string;
  birthDate: Date;
  error?: string;
}

export const FormSignUp = () => {
  const {
    control,
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpFields>({
    defaultValues: {
      error: undefined,
      email: '',
      password: '',
      phone: '',
      birthDate: new Date(),
      gender: 'Male'
    }
  });

  const onSubmit: SubmitHandler<SignUpFields> = (data) => {
    if (data.email && data.password) {
      console.log(data);
      reset();
    }
  }

  return (
    <VStack space={4}>
      <InputEmail
        fieldId="email"
        label="Email"
        control={control}
        isRequired={true}
        errors={errors}
      />
      <InputPassword
        fieldId="password"
        label="Password"
        control={control}
        isRequired={true}
        errors={errors}
      />
      <InputPhone
        fieldId="phone"
        label="Phone"
        control={control}
        isRequired={true}
        errors={errors}
      />
      <Button
        isLoading={isSubmitting}
        onPress={handleSubmit(onSubmit)}
      >Submit</Button>
    </VStack>
  )
}