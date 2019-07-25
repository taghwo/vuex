const _products = [
    {'id' : 1,'name': 'shoe','instock':true,'price':250,'inventory':10},
    {'id' : 2,'name': 'bag','instock':false,'price':300,'inventory':5},
    {'id' : 3,'name': 'gown','instock':true,'price':400,'inventory':10},
];

export default{
    getProducts(){
        return _products
    }
}