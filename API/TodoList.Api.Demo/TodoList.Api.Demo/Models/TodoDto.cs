namespace TodoList.Api.Demo.Models
{
    public class TodoDto : BaseDto
    {
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
