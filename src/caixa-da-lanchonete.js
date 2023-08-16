class Menu {
    getMenu() {
        return  {
                'cafe': {description: 'cafe', price: 3.00},
                'chantily': {description: 'cafe', price: 1.50},
                'suco': {description: 'suco', price: 6.20},
                'sanduiche': {description: 'sanduiche', price: 6.50},
                'queijo': {description: 'sanduiche', price: 2.00},
                'salgado': {description: 'salgado', price: 7.25},
                'combo1': {description: 'combo1', price: 9.50},
                'combo2': {description: 'combo2', price: 7.50},
        } 
    }
}

class Payment {
    getDiscount(paymentMethod, price) {
        if (paymentMethod == 'dinheiro') {
            price -= price * 5 / 100
        } else if (paymentMethod == 'credito') {
            price += price * 3 / 100
        }

        return price
    }
}

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const orderList = this.getOrderList(itens)
        const message = this.orderIsRight(metodoDePagamento, orderList)

        if (message) {
            return message
        } else {
            let price = 0
            const menu = new Menu().getMenu()
            orderList.forEach(item => {
                price += (menu[item.order].price * item.quantity)
            })

            price = new Payment().getDiscount(metodoDePagamento, price)
            return `R$ ${price.toFixed(2).replace('.', ',')}`
        }
    
    }
    
    orderIsRight(paymentMethod, items) {
        if (this.cartIsEmpty(items)) {
            return "Não há itens no carrinho de compra!"
        } else if (!(this.itemExist(items))) {
            return "Item inválido!"
        } else if (!(this.quantityIsValid(items))) {
            return "Quantidade inválida!"
        } else if (!(this.IsFormOfPayment(paymentMethod))) {
            return "Forma de pagamento inválida!"
        } else if (!this.checkExtraWithPrincipal(items)) {
            return "Item extra não pode ser pedido sem o principal"
        }

    }

    checkExtraWithPrincipal(items) {
        let id = true
        items.forEach(item => {
            const menu = new Menu().getMenu()
            if (item != menu[item.order].description) {
                if (!items.find(order => order.order == menu[item.order].description)) {
                    id = false
                }
            }
        })
        return id
    }

    IsFormOfPayment(paymentMethod) {
        return paymentMethod == "dinheiro" || paymentMethod == "debito" || paymentMethod == "credito"
    }

    quantityIsValid(items) {
        let valid = true
        items.forEach(item => {
            if (item.quantity == "0") {
                valid = false
            }
        });
        return valid
    }

    itemExist(items) {
        let exist = true
        items.forEach(item => {
            const menu = new Menu().getMenu()
            if (!(menu[item.order])) {
                exist = false
            }
        })
        return exist
    }
    
    cartIsEmpty(items) {
        return items.length == 0
    }

    getOrderList(items) {
        return items.map((item) => {
            const [order, quantity] = item.split(",")
            return {order: order, quantity: quantity}
        })
    }

}

export { CaixaDaLanchonete };
