using Microsoft.EntityFrameworkCore;
using TodoList.Api.Demo.Domain.Entities;

namespace TodoList.Api.Demo.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Todo> Todos { get; set; }

    }
}
