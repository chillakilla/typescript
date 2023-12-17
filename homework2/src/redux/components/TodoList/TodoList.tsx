import styled from "styled-components";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import { RootState } from "../../config/configStore";

interface TodoListProps {
  isActive: boolean;
}

function TodoList({ isActive }: TodoListProps) {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <StyledDiv>
      <StyledTodoListHeader>
        {isActive ? "해야 할 일💦" : "완료한 일✅"}
      </StyledTodoListHeader>
      <StyledTodoListBox>
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </StyledTodoListBox>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: #fff6e8;
  padding: 20px;
`;

const StyledTodoListHeader = styled.h3`
  font-size: 15px;
  font-weight: 500;
`;

const StyledTodoListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default TodoList;
