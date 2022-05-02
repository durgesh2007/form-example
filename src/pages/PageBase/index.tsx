import { ScrollView } from "native-base";
import { FormBase } from "../../components/FormBase";
import Sales from "../../data/Sales.json";

export const PageBase = () => {
  return (
    <ScrollView p={4}>
      <FormBase data={Sales} />
    </ScrollView>
  )
}