namespace Example.Domen.Validations;

public class UserValidator : AbstractValidator<User>
{
    public UserValidator()
    {
        RuleFor(x => x.Name).Length(5).WithMessage("Напишите имя");
        RuleFor(x => x.Login).NotEmpty().WithMessage("Напишите логин");
        RuleFor(x => x.Password).NotEmpty().WithMessage("Напишите пароль");
    }
}
