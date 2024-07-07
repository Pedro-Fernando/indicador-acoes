import MetodoBazin from "@/core/acoes/metodos/MetodoBazin"

test('Deve calcular o preço justo com a metodologia Bazin.', () => {
    const dividendos = [0.65, 0.39, 0.61, 0.58, 0.56, 0.2]
    const mediaDividendos = MetodoBazin.calcularMediaDividendos(dividendos);
    const precoTetoPadrao = MetodoBazin.calcularPrecoTeto(mediaDividendos);
    const precoTetoPersonalizado = MetodoBazin.calcularPrecoTeto(mediaDividendos, 0.07);

    expect(mediaDividendos).toBe(0.49833333333333335);
    expect(precoTetoPadrao).toBe(8.31);
    expect(precoTetoPersonalizado).toBe(7.12);
})

test('Deve lançar erro quando informar media anual de dividendo negativo.', () => {
    expect(() => MetodoBazin.calcularPrecoTeto(-1)).toThrow('A média anual dos dividendos não pode ser negativa');
})

test('Deve lançar erro se o rendimento esperado for menor ou igual a zero.', () => {
    expect(() => MetodoBazin.calcularPrecoTeto(1, 0)).toThrow('O rendimento esperado deve ser maior que zero');
    expect(() => MetodoBazin.calcularPrecoTeto(1, -1)).toThrow('O rendimento esperado deve ser maior que zero');
})

test('Deve lançar erro caso tente calcular média de dividendos com uma lista vazia', () => {
    expect(() => MetodoBazin.calcularMediaDividendos([])).toThrow('A lista de dividendos anuais não pode ser vazia');
})