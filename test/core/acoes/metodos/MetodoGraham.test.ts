import MetodoGraham from "@/core/acoes/metodos/MetodoGraham"

const acaoCMIG = {
    id: 2,
    nome: "CMIG3",
    preco: 12.46,
    vpa: 10.72,
    lpa: 2.38
}

test('Deve calcular o valor intrínseco de uma ação utilizando LPA e VPA.', () => {
    const valorIntrinseco = MetodoGraham.calcularValorIntrinseco(acaoCMIG.lpa, acaoCMIG.vpa)
    expect(valorIntrinseco).toBe(23.96)
})

test('Deve calcular a margem de segurança do valor intrínseco', () => {
    const acaoCMIG = {
        id: 2,
        nome: "CMIG3",
        preco: 12.46,
        vpa: 10.72,
        lpa: 2.38
    }

    const valorIntrinseco = MetodoGraham.calcularValorIntrinseco(acaoCMIG.lpa, acaoCMIG.vpa)
    expect(valorIntrinseco).toBe(23.96)

    const margemSeguranca = MetodoGraham.calcularMargemSegurancaEmPorcentagem(acaoCMIG.preco, valorIntrinseco)
    expect(margemSeguranca).toBe(92.30)
})
