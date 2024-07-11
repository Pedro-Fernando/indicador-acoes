export default class MetodoBazin {
    static readonly DIVIDEND_YIELD_BAZIN: number = 0.06;


    public static calcularMediaDividendos(valoresDividendosAnuais: number[]): number {
        this.validarListagemDeDividendosPorAno(valoresDividendosAnuais);
        const somaDividendos = valoresDividendosAnuais.reduce((acc, cur) => acc + cur, 0);
        return somaDividendos / valoresDividendosAnuais.length;
    }

    public static calcularPrecoTeto(mediaAnualDividendo: number, rendimentoEsperado: number = MetodoBazin.DIVIDEND_YIELD_BAZIN): number {
        this.validarMediaDeDividendoAnual(mediaAnualDividendo);
        this.validarRendimentoEsperado(rendimentoEsperado);

        const precoTeto = mediaAnualDividendo / rendimentoEsperado;

        return parseFloat(precoTeto.toFixed(2));
    }

    private static validarListagemDeDividendosPorAno(valoresDividendosAnuais: number[]) {
        if (valoresDividendosAnuais.length === 0) {
            throw new Error("A lista de dividendos anuais não pode ser vazia");
        }
    }

    private static validarRendimentoEsperado(rendimentoEsperado: number) {
        if (rendimentoEsperado <= 0) {
            throw new Error("O rendimento esperado deve ser maior que zero");
        }
    }

    private static validarMediaDeDividendoAnual(mediaAnualDividendo: number) {
        if (mediaAnualDividendo < 0) {
            throw new Error("A média anual dos dividendos não pode ser negativa");
        }
    }
}
