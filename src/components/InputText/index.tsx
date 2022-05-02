import { InputBase, InputBaseProps } from "../InputBase";

interface InputTextProps extends InputBaseProps {

}
export const InputText = (props: InputTextProps) => {
  return (
    <InputBase
      placeholder={props.label}
      {...props}
    />
  )
}