export default class MetodoBazin {
    static readonly DIVIDEND_YIELD_BAZIN: number = 0.06;

    public static calcularPrecoTeto(mediaAnualDividendo: number, rendimentoEsperado: number = MetodoBazin.DIVIDEND_YIELD_BAZIN): number {
        if (mediaAnualDividendo < 0) {
            throw new Error("A média anual dos dividendos não pode ser negativa");
        }
        if (rendimentoEsperado <= 0) {
            throw new Error("O rendimento esperado deve ser maior que zero");
        }
        const precoTeto = mediaAnualDividendo / rendimentoEsperado;
        return parseFloat(precoTeto.toFixed(2));
    }

    public static calcularMediaDividendos(valoresDividendosAnuais: number[]): number {
        if (valoresDividendosAnuais.length === 0) {
            throw new Error("A lista de dividendos anuais não pode ser vazia");
        }
        const somaDividendos = valoresDividendosAnuais.reduce((acc, cur) => acc + cur, 0);
        return somaDividendos / valoresDividendosAnuais.length;
    }
}
