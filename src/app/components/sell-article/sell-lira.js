var app = angular.module("myApp", []);
app.controller("cont", function($scope) {
  $scope.invoice = {
    number: 10,
    tax: 14,
    customer_info: {
      name: "Rohan Arihant",
      web_link: "John Doe Designs Inc.",
      address1: "1 Infinite Loop",
      address2: "Cupertino, California, US",
      postal: "90210"
    },
    items: [
      {
        description: "mangalu",
        quentity: 10,
        cost: 300
      }
    ],
    company_info: {
      name: "Metaware Labs",
      web_link: "www.metawarelabs.com",
      address1: "123 Yonge Street",
      address2: "Toronto, ON, Canada",
      postal: "M5S 1B6"
    }
  };
  $scope.currency_symbol = [
    {
      name: "CanadianDollar",
      currency: "$"
    },
    {
      name: "USDollar",
      currency: "$"
    },
    {
      name: "euro",
      currency: "€"
    },
    {
      name: "norwegian_krone",
      currency: "kr"
    },
    {
      name: "Indian Rupee",
      currency: "₹"
    }
  ];
  $scope.addItem = function() {
    $scope.invoice.items.push([
      {
        description: "description",
        quentity: 1,
        cost: 1
      }
    ]);
  };
  $scope.removeItem = function(m) {
    $scope.invoice.items.splice($scope.invoice.items.indexOf(m), 1);
  };
  $scope.subTotal = function() {
    var total = 0.0;
    angular.forEach($scope.invoice.items, function(item, key) {
      total += item.quentity * item.cost;
    });
    return total;
  };
  $scope.calcuteTax = function() {
    return $scope.subTotal() * $scope.invoice.tax / 100;
  };
  $scope.grandTotal = function() {
    return $scope.subTotal() + $scope.calcuteTax();
  };
});
