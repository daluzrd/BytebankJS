import { Cliente } from "../Cliente.js";

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instânciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get agencia() {
        return this._agencia;
    }

    set agencia(numAgencia) {
        this._agencia = numAgencia;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        throw new Error("O método sacar da classe Conta é abstrato.");
    }

    _sacar(valor, taxa) {
        let valorSacado = valor * taxa;

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return this._saldo;
        }
        return this.saldo
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        return conta.depositar(valorSacado);
    }
}
