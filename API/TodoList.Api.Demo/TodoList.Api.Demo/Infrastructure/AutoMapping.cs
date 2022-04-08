using AutoMapper;
using TodoList.Api.Demo.Domain.Entities;
using TodoList.Api.Demo.Models;

namespace TodoList.Api.Demo.Infrastructure.Mapper
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<Todo, TodoDto>().ReverseMap();
        }
    }
}
