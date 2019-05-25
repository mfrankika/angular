export default class Veiculo {
    //private modelo: string
    protected modelo: string //p poder ser alterada pelas class filhas
    //private numeroPortas: number //vai para classe carro na modularização 
    protected velocidade: number = 0

    /* constructor(modelo: string, numeroPortas: number) {
        this.modelo = modelo
        this.numeroPortas = numeroPortas
    } */
    
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}
