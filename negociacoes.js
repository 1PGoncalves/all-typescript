export class Negociacoes {
    constructor() {
        // [] == Array
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // read only [] == ReadonlyArray
    lista() {
        return this.negociacoes;
    }
}
