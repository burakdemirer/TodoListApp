using TodoList.Api.Demo.Models;

namespace TodoList.Api.Demo.Business
{
    public interface IUserService
    {
        DefaultServiceResponse CheckByUser(UserDto userDto);
    }
}
