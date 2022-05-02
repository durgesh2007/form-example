import { InputBase, InputBaseProps } from "../InputBase";

interface InputEmailProps extends InputBaseProps {

}
export const InputEmail = (props: InputEmailProps) => {
  return (
    <InputBase
      placeholder="Email"
      keyboardType="email-address"
      {...props}
    />
  )
}