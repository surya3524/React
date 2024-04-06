using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;
public class EFContextClass : DbContext
{
    public EFContextClass(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Activity> Activities { get; set; }
}
