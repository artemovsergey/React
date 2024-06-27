using Example.Domen.Models;
using MediatR;

namespace Example.Application.Request;

public record UsersRequest() : IRequest<UsersRequest.Response>
{
    public const string RouteTemplate = "api/users";
    public record Response(IEnumerable<User> users);
}
