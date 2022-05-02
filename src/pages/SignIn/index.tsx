import { Box, Text } from "native-base";
import { FormSignIn } from "../../components/FormSignIn";

export const SignIn = () => {
  return (
    <Box m={4}>
      <Text mb={4} fontWeight="bold">Sign In</Text>
      <FormSignIn />
    </Box>
  )
}