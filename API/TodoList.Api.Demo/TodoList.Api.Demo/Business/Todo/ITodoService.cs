using TodoList.Api.Demo.Models;

namespace TodoList.Api.Demo.Business
{
    public interface ITodoService
    {
        ServiceResponse<TodoDto> GetTodos();
        DefaultServiceResponse CreateTodo(TodoDto todoDto);
        DefaultServiceResponse UpdateTodo(TodoDto todoDto);
        DefaultServiceResponse DeleteTodo(int id);
    }
}
