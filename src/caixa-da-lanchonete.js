class CaixaDaLanchonete {
    // cafe	Café	R$ 3,00
    // chantily	Chantily (extra do Café)	R$ 1,50
    // suco	Suco Natural	R$ 6,20
    // sanduiche	Sanduíche	R$ 6,50
    // queijo	Queijo (extra do Sanduíche)	R$ 2,00
    // salgado	Salgado	R$ 7,25
    // combo1	1 Suco e 1 Sanduíche	R$ 9,50
    // combo2	1 Café e 1 Sanduíche	R$ 7,50



    calcularValorDaCompra(metodoDePagamento, itens) {
        if (this.isEmpty(itens)) {
            return "Não há itens no carrinho de compra!"
        }

        const orderList = this.getOrderList(itens)


        return "";
    }

    isEmpty(items) {
        return items.lenght == 0
    }

    getOrderList(items) {
        return items.map((item) => {
            const [order, quantity] = item.split(",")
            return {order: order, quantity: quantity}
        })
    }

}

export { CaixaDaLanchonete };
