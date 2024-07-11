import ModeloGordon from "@/core/valuation/metodos/ModeloGordon";

describe('Método Bazin', () => {

    test('Deve calcular o valor intrínseco de um fundo imobiliário', () => {
        const taxaDeCrescimento = 0.03; // a taxa de crescimento vária entre 2% e 3%
        const fii = {
            cotacao: 103.00,
            dividendo: 9.18,//valor dividendo ano 2023
        }

        const tesouroDireto = {
            ipcaMaisComoTaxaDeRetorno: 0.1047,//valor  ibge inflação jun/2024 =4,23% somado com 6.24% da taxa a mais do ipca resultando em 10,47%
        }
        const valorIntrinseco: number = ModeloGordon.calcularValorIntrinseco(fii.dividendo,
            tesouroDireto.ipcaMaisComoTaxaDeRetorno,
            taxaDeCrescimento);

        expect(valorIntrinseco).toBe(122.89);
    })

})