export class SistemaAutenticacao{

    static login(autenticavel,senha){
        if(SistemaAutenticacao.eautenticavel(autenticavel))
            return autenticavel.autenticar(senha);

        return false;

    }

    static eautenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }

}
