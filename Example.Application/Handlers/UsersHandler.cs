using Example.Application.Request;
using Example.Domen.Models;
using Example.Infrastructure.Data;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Example.Application.Handlers;

public class UsersHandler : IRequestHandler<UsersRequest, UsersRequest.Response>
{
    private readonly ExampleContext _db;
    private readonly ILogger<UsersHandler> _log;
    public UsersHandler(ExampleContext db, ILogger<UsersHandler> log)
    {
       _db = db;
       _log = log;
    }

    public async Task<UsersRequest.Response> Handle(UsersRequest request, CancellationToken cancellationToken)
    {
        _log.LogWarning("Обработка запроса из базы данных!");
       
        //var users = new List<User>() { new User() { Id = 1, Name = "user", Login = "login", Password = "password" } };
        var users = _db.Users.ToList();
        
        
        
        return new UsersRequest.Response(users);
    }
}
