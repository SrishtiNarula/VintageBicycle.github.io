$(function () {

    var goToCartIcon = function($addTocartBtn){
      var $cartIcon = $(".my-cart-icon");
      var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
      $addTocartBtn.prepend($image);
      var position = $cartIcon.position();
      $image.animate({
        top: position.top,
        left: position.left
      }, 500 , "linear", function() {
        $image.remove();
      });
    }

    $('.my-cart-btn').myCart({
      currencySymbol: 'Rs',
      classCartIcon: 'my-cart-icon',
      classCartBadge: 'my-cart-badge',
      classProductQuantity: 'my-product-quantity',
      classProductRemove: 'my-product-remove',
      classCheckoutCart: 'my-cart-checkout',
      affixCartIcon: true,
      showCheckoutModal: true,
      numberOfDecimals: 2,
      cartItems: [
        {id: 1, name: 'Electric Bicycle', summary: 'summary 1', price: 16000, quantity: 1, image: 'images/bicycle1.jpg'},
        {id: 2, name: 'Electric Bicycle', summary: 'summary 2', price: 16000, quantity: 2, image: 'images/bicycle2.jpg'},
        {id: 3, name: 'Electric Bicycle', summary: 'summary 3', price: 16000, quantity: 1, image: 'images/bicycle3.jpg'},
        {id: 4, name: 'Electric Bicycle', summary: 'summary 4', price: 16000, quantity: 1, image: 'images/bicycle4.jpg'},
        {id: 5, name: 'Electric Bicycle', summary: 'summary 5', price: 16000, quantity: 1, image: 'images/bicycle5.jpg'},
        {id: 6, name: 'Electric Bicycle', summary: 'summary 6', price: 16000, quantity: 1, image: 'images/bicycle10.jpg'},
        {id: 7, name: 'Electric Bicycle', summary: 'summary 7', price: 16000, quantity: 1, image: 'images/bicycle7.jpg'},
        {id: 8, name: 'Electric Bicycle', summary: 'summary 8', price: 16000, quantity: 1, image: 'images/bicycle8.jpg'},
        {id: 9, name: 'Electric Bicycle', summary: 'summary 9', price: 16000, quantity: 1, image: 'images/bicycle9.jpg'},
      ],
      clickOnAddToCart: function($addTocart){
        goToCartIcon($addTocart);
      },
      
      checkoutCart: function(products, totalPrice, totalQuantity) {
        var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
        checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
        $.each(products, function(){
          checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
        });
        
      },
      getDiscountPrice: function(products, totalPrice, totalQuantity) {
        
        return totalPrice * 0.5;
      }
      
    });

    $("#addNewProduct").click(function(event) {
      var currentElementNo = $(".row").children().length + 1;
      $(".row").append('<div class="col-md-3 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' + currentElementNo + ' - <strong>$' + currentElementNo + '</strong><br><button class="btn my-cart-btn" data-id="' + currentElementNo + '" data-name="product ' + currentElementNo + '" data-summary="summary ' + currentElementNo + '" data-price="' + currentElementNo + '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>')
    });
  });