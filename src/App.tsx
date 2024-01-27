import { ButtonCreateTodo } from "./ButtonCreateTodo"
import { TodoHeader } from "./TodoHeader"
import { TodoList } from "./TodoList"
import { TodoSearch } from "./TodoSearch"

export const App = () => {
  return <>
    <TodoHeader />
    <TodoSearch />
    <TodoList />
    <ButtonCreateTodo />
  </>
}