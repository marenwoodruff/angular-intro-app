angular.module('IntroToAngularApp')
    .controller('HomeController', HomeController);

function HomeController() {
    this.awesome = true;
    this.checkout = ['t-shirt', 'jeans', 'hat'];
    this.wdiClass = 'WDI 10 is awesome';
    this.price = '5.00';
    this.names = ['Danny', 'Maren', 'Hassan'];
}
