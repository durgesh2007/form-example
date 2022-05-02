import { Box, Text } from "native-base";
import { FormSignUp } from "../../components/FormSignUp";

export const SignUp = () => {
  return (
    <Box m={4}>
      <Text mb={4} fontWeight="bold">Sign Up</Text>
      <FormSignUp />
    </Box>
  )
}