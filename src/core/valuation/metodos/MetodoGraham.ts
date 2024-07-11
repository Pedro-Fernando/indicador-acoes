export default class MetodoGraham {
    static CONSTANTE_GRAHAM: number = 22.5;

    public static calcularValorIntrinseco(lpa: number, vpa: number): number {
        const valorIntrinseco = Math.sqrt(this.CONSTANTE_GRAHAM * vpa * lpa);
        return parseFloat(valorIntrinseco.toFixed(2));
    }

}