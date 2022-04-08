using System.Linq;
using TodoList.Api.Demo.Domain.Entities;

namespace TodoList.Api.Demo.Data
{
    public class GenericRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        private readonly AppDbContext _context;

        public GenericRepository(AppDbContext context)
        {
            _context = context;
        }

        public IQueryable<TEntity> GetAll()
        {
            return _context.Set<TEntity>().AsQueryable();
        }

        public IQueryable<TEntity> GetAllLocal()
        {
            return _context.Set<TEntity>().Local.AsQueryable();
        }

        public TEntity GetById(int id)
        {
            return _context.Set<TEntity>().AsQueryable().FirstOrDefault(a => a.Id == id);
        }

        public void Create(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            _context.SaveChanges();
        }

        public void Update(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var entity = GetById(id);
            _context.Set<TEntity>().Remove(entity);
            _context.SaveChanges();
        }
    }
}
