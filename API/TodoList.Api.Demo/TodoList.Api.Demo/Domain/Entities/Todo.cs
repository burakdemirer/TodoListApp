namespace TodoList.Api.Demo.Domain.Entities
{
    public class Todo : BaseEntity
    {
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
