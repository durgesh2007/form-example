import { FormControl, IInputProps, Input, Text } from "native-base";
import { Controller } from "react-hook-form";

export interface InputBaseProps extends IInputProps {
  fieldId: string;
  control: any;
  label: string;
  errors?: any;
  rules?: any;
}

export const InputBase = ({
  isRequired,
  isReadOnly,
  fieldId,
  control,
  label,
  errors,
  rules,
  type = "text",
  ...rest
}: InputBaseProps) => {
  const validations = Object.assign(
    isRequired ? { required: `${label} is required.` } : {},
    { ...rules }
  )
  return (
    <Controller
      name={fieldId}
      control={control}
      rules={validations}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <FormControl
            isRequired={isRequired}
            isReadOnly={isReadOnly}
            isInvalid={errors && (fieldId in errors)}>
            <Input
              type={type}
              {...rest}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
            <FormControl.ErrorMessage>
              <Text>
                {errors && errors[fieldId] ? errors[fieldId].message : ''}
              </Text>
            </FormControl.ErrorMessage>
          </FormControl>
        )
      }}
    />
  )
}