
class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

get _idProducto(){
    return this._idProducto;
}

get nombre(){
    return this._nombre;
}

set nombre(nombre){
    this._nombre = nombre;
}
 get precio(){
    return this._precio;
 }

 set precio(precio){
    return this._precio = precio;
 }

toString (){
    return 'idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio} ';
}

}

class Orden{
    static contadorOrdenes = 0;
    static get max_productos (){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
      
    }
    get _idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.max_productos){
            this._productos.push(producto); 
           

        }else{
            console.log ('no se puede agregar mas productos');
        }
        
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden ='';
        for (let producto of this._productos){
            productoOrden += '\n ´{' + producto-toString() + '} ';
        }
        console.log('Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productoOrden}');
    }
}
  let producto1 = new Producto('Pantalon', 2000);
  let producto2 = new Producto('Zapato', 5000);
  let orden1 = new Orden();
  orden1.agregarProducto(producto1);
  orden1.agregarProducto(producto2);
  orden1.mostrarOrden();

  let orden2 = new Orden();
  let producto3 = new Producto('Camiza', 3000);
  orden2.agregarProducto(producto3);
  orden2.agregarProducto(producto2);
  orden2.agregarProducto(producto1);
  orden2.mostrarOrden();

 



//console.log (producto1.toString());
//console.log (producto2.toString());