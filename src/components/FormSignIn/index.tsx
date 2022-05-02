import { Button, VStack } from "native-base";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputEmail } from "../InputEmail";
import { InputPassword } from "../InputPassword";

interface SignInFields {
  email: string;
  password: string;
  error?: string;
}

export const FormSignIn = () => {
  const {
    control,
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignInFields>({
    defaultValues: {
      error: undefined,
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<SignInFields> = (data) => {
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
      <Button
        isLoading={isSubmitting}
        onPress={handleSubmit(onSubmit)}
      >Submit</Button>
    </VStack>
  )
}