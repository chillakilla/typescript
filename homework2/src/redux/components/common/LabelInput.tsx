import styled from "styled-components";
import { ChangeEvent } from "react";

interface LabelInputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({
  id,
  label,
  placeholder,
  value,
  onChange,
}: LabelInputProps) {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

const StyledInput = styled.input`
  height: 30px;
  width: 230px;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;
`;

const StyledLabel = styled.label`
  margin-right: 10px;
  font-weight: 700;
`;

export default LabelInput;
