import { InputBase, InputBaseProps } from "../InputBase";

interface InputPhoneProps extends InputBaseProps {

}
export const InputPhone = (props: InputPhoneProps) => {
  return (
    <InputBase
      placeholder="Phone"
      keyboardType="phone-pad"
      {...props}
    />
  )
}