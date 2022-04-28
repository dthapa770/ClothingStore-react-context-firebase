import { FormInputLabel, Input, Group } from "./form-input.styles";
// isntead of using spread operator ...otherProps, we could get objects from inputOptions
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
