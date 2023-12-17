import { useDispatch } from "react-redux";
import { removeTodo, switchTodo } from "../../modules/todos";
import { useNavigate } from "react-router-dom";
import HeightBox from "../common/HeightBox";
import styled from "styled-components";

interface TodoProps {
  todo: {
    id: string;
    title: string;
    contents: string;
    isDone: boolean;
  };
  isActive: boolean;
}

function Todo({ todo, isActive }: TodoProps) {
  const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${todo.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitchButton = () => dispatch(switchTodo(todo.id));
  const handleRemoveButton = () => {
    if (window.confirm(CONFIRM_MESSAGE)) dispatch(removeTodo(todo.id));
  };
  const handleToDetailPage = () => {
    navigate(`/${todo.id}`);
  };

  return (
    <StyledDiv>
      <FlexTitleBox>
        <StyledTitle>{todo.title}</StyledTitle>
        <LinkedP onClick={handleToDetailPage}>[상세보기]</LinkedP>
      </FlexTitleBox>
      <HeightBox height={10} />
      <StyledContents>{todo.contents}</StyledContents>
      <HeightBox height={20} />
      <FlexButtonBox>
        <TodoButton onClick={handleSwitchButton}>
          {isActive ? "완료" : "취소"}
        </TodoButton>
        <TodoButton onClick={handleRemoveButton}>삭제</TodoButton>
      </FlexButtonBox>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 30px 20px 30px 20px;
  width: 200px;
  margin: 10px;
  background-color: #f2e8ff;
  border-radius: 20px;
`;

const StyledTitle = styled.p`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
`;

const StyledContents = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
`;

const LinkedP = styled.p`
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

const TodoButton = styled.button`
  background-color: #7684b8;
  width: 49%;
  height: 15px;
  color: white;
  font-weight: 500;
  height: 30px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;

const FlexButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Todo;
