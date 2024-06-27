namespace Example.Domen.Validations;

public class RoleValidator : AbstractValidator<Role>
{
    public RoleValidator()
    {
        RuleFor(x => x.Name).Length(5).WithMessage("Напишите название роли");
        RuleForEach(x => x.Users).SetValidator(new UserValidator());
    }

}
