import './Login.css'

export default function Login(){

    function HandleSubmit(e){
        e.preventDefault();
        console.log("submit form")
    }


    return (

        <div className="container text-center">
        <h1> Регистрация</h1>
    
        <div className="row border border-0 border-warning">
            <div className="col-6 offset-3 border border-0 border-primary">
                <form className="form-signin" onSubmit = { (e) => {HandleSubmit(e)} } role="form">
                    <input type="text" name="name" className="form-control m-1" placeholder="Name" required autoFocus/>
                    <input type="email" name="email" className="form-control m-1" placeholder="Email" required />
                    <input type="password" name="password" className="form-control m-1" placeholder="Password" required autoComplete="password"/>
                    <input type="password" name="passwordConfirmation" className="form-control m-1" placeholder="Confirmation" required autoComplete="passwordConfirmation"/>
                    <button className="btn btn-lg btn-primary btn-block m-1">
                        Создать пользователя
                    </button>
                </form>
            </div>
        </div>
    
    </div>
    )

}