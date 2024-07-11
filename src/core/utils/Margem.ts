export default class Margem {

    public static calcularMargemSegurancaEmPorcentagem(preco: number, valorIntrinseco: number): number {
        const margemSeguranca = ((valorIntrinseco - preco) / preco) * 100;
        return parseFloat(margemSeguranca.toFixed(2));
    }

    public static avaliarMargem(preco: number, valorIntrinseco: number): string {
        const margemSeguranca = this.calcularMargemSegurancaEmPorcentagem(preco, valorIntrinseco);
        const resultado = margemSeguranca >= 0 ? 'ganho' : 'perda';
        const artigo = margemSeguranca >= 0 ? 'um' : 'uma';
        return `Você terá ${artigo} ${resultado} de ${Math.abs(margemSeguranca)}%.`;
    }
}