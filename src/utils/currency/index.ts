export default function Currency(coin: number){
    return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(coin)
}