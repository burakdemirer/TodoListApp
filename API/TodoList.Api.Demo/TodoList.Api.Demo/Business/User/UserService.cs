using Microsoft.Extensions.Configuration;
using TodoList.Api.Demo.Models;

namespace TodoList.Api.Demo.Business
{
    public class UserService : IUserService
    {
        private readonly IConfiguration _configuration;

        public UserService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DefaultServiceResponse CheckByUser(UserDto userDto)
        {
            var builder = new DefaultServiceResponse.ResponseBuilder();

            string username = _configuration.GetSection("User:Username").Value;
            string password = _configuration.GetSection("User:Password").Value;
            bool check = userDto.Username.Equals(username) && userDto.Password.Equals(password);
            if (check)
                return builder.Response("Signed in successfully");
            else
                return builder.Response("Username or Password is incorrect", false);
        }
    }
}
