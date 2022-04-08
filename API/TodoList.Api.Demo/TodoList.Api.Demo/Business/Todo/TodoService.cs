using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using TodoList.Api.Demo.Data;
using TodoList.Api.Demo.Domain.Entities;
using TodoList.Api.Demo.Models;

namespace TodoList.Api.Demo.Business
{
    public class TodoService : ITodoService
    {
        private readonly IRepository<Todo> _todoRepository;
        private readonly IMapper _mapper;

        public TodoService(IRepository<Todo> todoRepository, IMapper mapper)
        {
            _todoRepository = todoRepository;
            _mapper = mapper;
        }

        public ServiceResponse<TodoDto> GetTodos()
        {
            var builder = new ServiceResponse<TodoDto>.ResponseBuilder();
            List<Todo> todos = _todoRepository.GetAll().OrderBy(o => o.Id).ToList();
            var list = _mapper.Map<List<TodoDto>>(todos);
            return builder.BuildServiceResponse(list);
        }

        public DefaultServiceResponse CreateTodo(TodoDto todoDto)
        {
            var builder = new DefaultServiceResponse.ResponseBuilder();
            Todo entity = _mapper.Map<Todo>(todoDto);
            _todoRepository.Create(entity);
            return builder.Response("To-do created successfully");
        }

        public DefaultServiceResponse UpdateTodo(TodoDto todoDto)
        {
            var builder = new DefaultServiceResponse.ResponseBuilder();
            Todo entity = _mapper.Map<Todo>(todoDto);
            _todoRepository.Update(entity);
            return builder.Response("To-do updated successfully");
        }

        public DefaultServiceResponse DeleteTodo(int id)
        {
            var builder = new DefaultServiceResponse.ResponseBuilder();
            _todoRepository.Delete(id);
            return builder.Response("To-do deleted successfully");
        }

    }
}
