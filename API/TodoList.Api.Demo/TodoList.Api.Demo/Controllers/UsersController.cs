using Microsoft.AspNetCore.Mvc;
using TodoList.Api.Demo.Business;
using TodoList.Api.Demo.Models;

namespace TodoList.Api.Demo.Controllers
{
    public class UsersController : BasePublicController
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        /// <summary>
        /// Check User
        /// </summary>
        /// <param name="UserDto"></param>
        /// <returns></returns>
        [Route("Login")]
        [HttpPost]
        public IActionResult Login([FromBody]UserDto UserDto)
        {
            var response = _userService.CheckByUser(UserDto);
            return Ok(response);
        }

    }
}
