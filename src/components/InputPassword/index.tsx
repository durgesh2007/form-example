import { InputBase, InputBaseProps } from "../InputBase"

interface InputPasswordProps extends InputBaseProps {

}
export const InputPassword = (props: InputPasswordProps) => {
  return (
    <InputBase
      placeholder="Password"
      type="password"
      {...props}
    />
  )
}