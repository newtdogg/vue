var footer = new Vue({
  el: ".footer"
});
Vue.filter( "subvalue", function( val ) {
  return _.multiply( val.price, val.quantity );
});
Vue.filter( "tocurrency", function( num ) {
  return accounting.formatMoney( num );
});
Vue.filter( "zeropad", function( num ) {
  if ( num !== 0 ) {
    return _.padStart( num, 2, '0' );
  } else {
    return 0;
  }
});
Vue.filter( "titlecase", function( str ) {
  return _.startCase( str );
});
Vue.filter( "textcapitalized", function( str ) {
  return _.capitalize( str );
});
var demo = new Vue({
  el: "#app",
  data: {
    products: inventory,
    shopping_cart: [],
    donation: 0,
    subtotal: 0,
    search: "",
    orderDir: "desc",
    sortByParam: "",
  },
  methods: {
    sortProducts: function( sortBy ) {
      this.sortByParam = sortBy;
      this.orderDir = this.orderDir === "asc" ? "desc" : "asc";
      this.products = _.orderBy( this.products, this.sortByParam, this.orderDir );
    },
    addToCart: function( product, option ) {
      var itemName = product.name + " " + option.details;
      var itemPrice = option.price;
      var itemQuantity = 1;
      for ( var index in this.shopping_cart ) {
        var cartItem = this.shopping_cart[Index];
        if ( option.id === cartItem.id ) {
          itemQuantity = parseInt( cartItem.quantity ) + 1;
          itemInCart = this.shopping_cart.indexOf( cartItem );
          this.shopping_cart.splice( itemInCart, 1 );
        }
      }
      var itemToAdd = {
        price: itemPrice,
        listitem: itemName,
        quantity: itemQuantity,
        id: option.id
      }
      this.shopping_cart.push( itemToAdd );
    },
    addOne: function( product ) {
      product.quantity++;
    },
    removeOne: function( product ) {
      product.quantity--;
      if ( product.quantity <= 0 ) {
          this.shopping_cart.$remove( product );
      }
    },
    removeFromCart: function( product ) {
      this.shopping_cart.$remove( product );
    }
  },
  computed: {
    filteredProducts: function() {
      if ( this.search ) {
        var searchQuery = this.search;
        return this.products.filter( function( product ) {
          if ( _.upperCase( product.name).indexOf( _.upperCase( searchQuery )) !== -1 ) {
            return product;
          }
        });
      } else {
        return this.products;
      }
    },
    count: function() {
      var itemCount = 0;
      for ( var idx in this.shopping_cart ) {
        var currentItem = this.shopping_cart[idx];
        itemCount += parseInt( currentItem.quantity );
      }
      return itemCount
    },
    total: function() {
      var totalCost = 0;
      for ( var idx in this.shopping_cart ) {
        var currentItem = this.shopping_cart[idx];
        totalCost += parseInt( currentItem.quantity ) * currentItem.price;
        totalCost += parseInt( this.donation );
      }
      return totalCost
    },
    discount: function() {
      if ( this.total > 100 ) {
        return ( this.total - this.donation ) * 0.1;
      }
      return 0;
    }
  }
});
