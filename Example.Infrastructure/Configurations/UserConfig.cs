using Example.Domen.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Example.Infrastructure.Configurations;

public class UserConfig : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.Property(x => x.Name).IsRequired();
        builder.Property(x => x.Login).IsRequired();
        builder.Property(x => x.Password).IsRequired();
    }
}
