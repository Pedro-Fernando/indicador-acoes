import Margem from "@/core/utils/Margem";

describe('Margem', () => {
    test('Deve calcular a margem de segurança em porcentagem corretamente', () => {
        const preco = 100;
        const valorIntrinseco = 120;
        const margemSeguranca = Margem.calcularMargemSegurancaEmPorcentagem(preco, valorIntrinseco);
        expect(margemSeguranca).toBe(20);
    });

    test('Deve avaliar a margem corretamente quando há ganho', () => {
        const preco = 100;
        const valorIntrinseco = 120;
        const resultado = Margem.avaliarMargem(preco, valorIntrinseco);
        expect(resultado).toBe('Você terá um ganho de 20%.');
    });

    test('Deve avaliar a margem corretamente quando há perda', () => {
        const preco = 120;
        const valorIntrinseco = 100;
        const resultado = Margem.avaliarMargem(preco, valorIntrinseco);
        expect(resultado).toBe('Você terá uma perda de 16.67%.');
    });
});