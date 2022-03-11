export class Cliente{

    get clienteCPF(){
        return this._clienteCPF
    }

    constructor(clienteNome,clienteCPF,senha){
        this.clienteNome = clienteNome;
        this._clienteCPF = clienteCPF;
        this._senha = senha;
        
    }

    autenticar(senha){
        return this._senha == senha;
    }
}
