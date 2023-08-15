class Menu {
    getMenu() {
        return  {
                'cafe': {principalDish: true, price: 3.00},
                'chantily': {principalDish: false, price: 1.50},
                'suco': {principalDish: true, price: 6.20},
                'sanduiche': {principalDish: true, price: 6.50},
                'queijo': {principalDish: false, price: 2.00},
                'salgado': {principalDish: true, price: 7.25},
                'combo1': {principalDish: true, price: 9.50},
                'combo2': {principalDish: true, price: 7.50},
        } 
    }
}

class Payment {
    
}
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const orderList = this.getOrderList(itens)

        const message = this.orderIsRight(orderList)

        


        return "";
    }
    
    orderIsRight(paymentMethod, items) {
        if (this.cartIsEmpty(items)) {
            return "Não há itens no carrinho de compra!"
        } else if (!this.itemExist(items)) {
            return "Item inválido!"
        } else if (!(this.quantityIsValid(items))) {
            return "Quantidade inválida!"
        } else if (!(this.IsFormOfPayment(paymentMethod))) {
            return "Forma de pagamento inválida!"
        }
    }

    IsFormOfPayment(paymentMethod) {
        return paymentMethod == "dinheiro" || paymentMethod == "debito" || paymentMethod == "credito"
    }

    quantityIsValid(items) {
        items.forEach(item => {
            if (item.quantity == 0) return item.quantity
            
        });
    }

    itemExist(items) {
        items.forEach(item => {
            const menu = new Menu().getMenu()
            if (!menu[item.order]) {
                return false
            }
        })
    }
    
    cartIsEmpty(items) {
        return items.lenght == 0
    }

    getOrderList(items) {
        return items.map((item) => {
            const [order, quantity] = item.split(",")
            return {order: order, quantity: quantity}
        })
    }

}
console.log(new CaixaDaLanchonete().calcularValorDaCompra('debito', ['cafe,1','chantily,1']))
export { CaixaDaLanchonete };
