import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, selectCurrentTodo, updateTodo } from '../../redux/todoSlice';

const EditForm = () => {
  const currentTodo = useSelector(selectCurrentTodo);

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newTodo = form.elements.text.value.trim();
    if (newTodo) {
      dispatch(updateTodo({ id: currentTodo.id, text: newTodo }));
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo?.text || ''}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(editTodo(null))}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
