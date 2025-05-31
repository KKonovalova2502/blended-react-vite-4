import { useSelector } from 'react-redux';
import Container from './components/Container/Container';
import EditForm from './components/EditForm/EditForm';
import Filter from './components/Filter/Filter';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import TodoList from './components/TodoList/TodoList';

export const App = () => {
  const isEdit = useSelector(state => state.todos.currentTodo !== null);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
