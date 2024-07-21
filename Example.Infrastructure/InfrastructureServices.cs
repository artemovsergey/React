using Example.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Example.Infrastructure;

public static class InfrastructureServices
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {

        // Add DbContext to the services
        services.AddDbContext<ExampleContext>(opts =>
        {
            opts.UseNpgsql(configuration.GetConnectionString("PostgreSQL"));

            //opts.UseNpgsql(configuration.GetConnectionString("PostgreSQL") ??
              //  "Host=localhost;Port=5432;Database=Example;Username=postgres;Password=root");
        });

     
        // Register repositories and services
        //services.AddScoped<IUnitOfWork, UnitOfWork>();
        //services.AddScoped<IUserRepository, UserRepository>();
        //services.AddScoped<IRecordRepository, RecordRepository>();
        //services.AddScoped<IRecordCloudService, CloudService>();
        //services.AddScoped<IQRCodeGeneratorService, QRCodeGeneratorService>();
        //services.AddScoped<ITelegramService, TelegramService>();

        return services;
    }
}
