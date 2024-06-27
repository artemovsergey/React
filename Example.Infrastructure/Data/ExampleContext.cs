using Example.Domen.Models;
using Example.Infrastructure.Configurations;
using Microsoft.EntityFrameworkCore;

namespace Example.Infrastructure.Data;

public class ExampleContext : DbContext
{

    public DbSet<User> Users { get; set; }

    public ExampleContext(DbContextOptions<ExampleContext> opt) : base(opt)
    {
       Database.EnsureCreated(); 
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfiguration(new UserConfig());
    }


}
