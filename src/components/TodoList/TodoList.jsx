import { useSelector } from 'react-redux';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo';
import { selectFilteredContacts } from '../../redux/filterSlice';

const TodoList = () => {
  const todos = useSelector(selectFilteredContacts);

  return (
    <>
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo data={todo} counter={index + 1} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default TodoList;
