export default class ModeloGordon {

    public static calcularValorIntrinseco(dividendo: number, taxaRetorno: number, taxaCrescimento: number): number {
        const valorIntrinseco = dividendo / (taxaRetorno - taxaCrescimento);
        return parseFloat(valorIntrinseco.toFixed(2))
    }

}