var dreamCar = {
    make: "oldsmobile",
    model: "98",
    color: "blue",
    year: 2016,
    bodyStyle: "Luxury Car",
    price: 5000
}
alert("The type of dream car is: " + typeof dreamCar);
document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.model;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " +dreamCar.model;