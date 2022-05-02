import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, FormControl, Input, Select, Text } from "native-base";
import { useState } from "react";
import { Controller } from "react-hook-form";

const Type = {
  LABEL_TEXT_BOX: 'LabeledTextBox',
  NUMERIC_LABEL_TEXT_BOX: 'NumericLabeledTextBox',
  DROP_DOWN: 'dropDown',
  SIGNATURE: 'Signature',
  BUTTON: 'Button',
  DATE: 'Date',
  ARRAY: 'Array'
}

export const FormControlBase = ({ control, errors, item, ...props }: any) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const { type, serverField, isRequired, label, custom } = item;
  var isReadOnly = false;
  if (custom === 'ReadOnly') {
    isReadOnly = true;
  } else {
    isReadOnly = false;
  }
  const validations = Object.assign(
    isRequired ? { required: `${label} is required.` } : {},
    {}
  )

  return (
    <Controller
      name={serverField}
      control={control}
      rules={validations}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <FormControl
            isRequired={isRequired}
            isInvalid={errors && (serverField in errors)}>
            {(type === Type.LABEL_TEXT_BOX) &&
              <Input
                placeholder={label}
                serverFieldId={serverField}
                isReadOnly={isReadOnly}
                label={label}
                isRequired={isRequired}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            }
            {type === Type.NUMERIC_LABEL_TEXT_BOX &&
              <Input
                keyboardType='number-pad'
                placeholder={item.label}
                fieldId={props.serverField}
                label={props.label}
                isRequired={props.isRequired}
              />
            }
            <FormControl.ErrorMessage>
              <Text>
                {errors && errors[serverField] ? errors[serverField].message : ''}
              </Text>
            </FormControl.ErrorMessage>
          </FormControl>
        )
      }}
    />
  )

  switch (type) {
    case Type.LABEL_TEXT_BOX:
      return (
        <Controller
          name={serverField}
          control={control}
          rules={validations}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <FormControl
                isRequired={isRequired}
                isInvalid={errors && (serverField in errors)}>
                <Input
                  placeholder={label}
                  serverFieldId={serverField}
                  isReadOnly={isReadOnly}
                  label={label}
                  isRequired={isRequired}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
                <FormControl.ErrorMessage>
                  <Text>
                    {errors && errors[serverField] ? errors[serverField].message : ''}
                  </Text>
                </FormControl.ErrorMessage>
              </FormControl>
            )
          }}
        />
      )
    case Type.NUMERIC_LABEL_TEXT_BOX:
      return (
        <Input
          keyboardType='number-pad'
          placeholder={item.label}
          fieldId={props.serverField}
          label={props.label}
          isRequired={props.isRequired}
        />
      )
    case Type.BUTTON:
      return (
        <Button
          onPress={props.onPress}>
          {item.label}
        </Button>
      )
    case Type.DROP_DOWN:
      return (
        <Select
          placeholder={item.label}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
        </Select>
      )
    case Type.DATE:
      return (
        <>
          <Input
            placeholder={item.label}
            onPressIn={() => setShow(true)}
          />
          {
            show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                onChange={() => console.log}
              />
            )
          }
        </>
      )
    default:
      return (
        <Text>{item.label}</Text>
      )
      break;
  }
}