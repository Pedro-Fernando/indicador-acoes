export default class MetodoGraham {
    static CONSTANTE_GRAHAM: number = 22.5;

    public static calcularValorIntrinseco(lpa: number, vpa: number): number {
        const valorIntrinseco = Math.sqrt(this.CONSTANTE_GRAHAM * vpa * lpa);
        return parseFloat(valorIntrinseco.toFixed(2));
    }

    public static calcularMargemSegurancaEmPorcentagem(preco: number, valorIntrinseco: number): number {
        const margemSeguranca = ((valorIntrinseco - preco) / preco) * 100;
        return parseFloat(margemSeguranca.toFixed(2));
    }
}