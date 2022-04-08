using Microsoft.AspNetCore.Mvc;

namespace TodoList.Api.Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class BasePublicController : ControllerBase
    {

    }
}
