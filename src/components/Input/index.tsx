import React from "react";
import { useController } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  name: string;
  control: any;
  label: string;
}

export const Input = ({ name, control, label }: InputProps) => {
  const { field } = useController({
    control,
    name,
    defaultValue: ''
  });
  return (
    <View style={{ paddingVertical: 10 }}>
      <Text>{label}</Text>
      <TextInput
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10
        }}
        value={field.value}
        onChangeText={field.onChange}
      />
    </View>
  )
}