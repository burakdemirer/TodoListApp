using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TodoList.Api.Demo.Business;
using TodoList.Api.Demo.Models;

namespace TodoList.Api.Demo.Controllers
{
    public class TodosController : BasePublicController
    {
        private readonly ITodoService _todoService;

        public TodosController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        /// <summary>
        /// Get All Todos
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<TodoDto> TodoGet()
        {
            var list = _todoService.GetTodos().List;
            return list;
        }

        /// <summary>
        /// Create a Todo
        /// </summary>
        /// <param name="TodoCreateDto"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult TodoCreate([FromBody]TodoDto TodoCreateDto)
        {
            var response = _todoService.CreateTodo(TodoCreateDto);
            return Ok(response);
        }

        /// <summary>
        /// Update a Todo
        /// </summary>
        /// <param name="TodoUpdateDto"></param>
        /// <returns></returns>
        [HttpPut]
        public IActionResult TodoUpdate([FromBody]TodoDto TodoUpdateDto)
        {
            var response = _todoService.UpdateTodo(TodoUpdateDto);
            return Ok(response);
        }

        /// <summary>
        /// Delete a Todo
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("{id:int}")]
        [HttpDelete]
        public IActionResult AirportDelete(int id)
        {
            var response = _todoService.DeleteTodo(id);
            return Ok(response);
        }

    }
}
