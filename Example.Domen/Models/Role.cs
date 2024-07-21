namespace Example.Domen.Models;

public class Role : Base
{
    public string Name { get; set; } = string.Empty;
    public IEnumerable<User>? Users { get; set; }
}
