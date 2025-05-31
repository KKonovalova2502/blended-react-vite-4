import Text from '../Text/Text';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../redux/todoSlice';

const Todo = ({ data: { id, text }, counter }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter}
      </Text>

      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(editTodo({ id, text }))}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default Todo;
