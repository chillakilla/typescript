import react, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import LabelInput from "../common/LabelInput";
import RightMarginBox from "../common/RightMarginBox";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, Todo } from "../../modules/todos";
import { RootState } from "../../config/configStore";
import HeightBox from "../common/HeightBox";

interface InputProps {}

function Input({}: InputProps) {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector((state: RootState) => state.todos);

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const handleSubmitButton = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };

    dispatch(addTodo(newTodo));

    setTitle("");
    setContents("");
  };

  return (
    <StyledDiv>
      <form onSubmit={handleSubmitButton}>
        <FlexDiv>
          <RightMarginBox margin={10}>
            <LabelInput
              id="title"
              label="제목"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={handleTitleChange}
            />
            <HeightBox height={10} />
            <LabelInput
              id="contents"
              label="내용"
              placeholder="내용을 입력해주세요."
              value={contents}
              onChange={handleContentsChange}
            />
          </RightMarginBox>
          <StyledButton type="submit">제출</StyledButton>
        </FlexDiv>
      </form>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 20px;
  background-color: #ebeffc;
`;

const StyledInput = styled.input`
  height: 30px;
  border: 0;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background-color: #d7b4e0;
  border: 0;
  border-radius: 10px;
  width: 100px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const FlexDiv = styled.div`
  display: flex;
`;

export default Input;
