namespace Example.Domen.Models;

public class User : Base
{
    public string Name { get; set; } = string.Empty;
    public string Login { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public int RoleId { get; set; }
    public Role? Role { get; set; }

}
