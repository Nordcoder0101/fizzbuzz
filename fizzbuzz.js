function fizzBuzz(n){
  
  if (n < 0){
    let error = "Please input a positive number"
    console.log(error)
    return error
  }

  let counter = 1
  while(counter <= n){
    if (counter % 15 == 0) {
      console.log("FizzBuzz")
    }
    else if (counter % 5 == 0){
      console.log("Buzz")
    }
    else if (counter % 3 == 0){
      console.log("Fizz")
    }
    else {
      console.log(counter);
    }
    counter ++
  }
  

}

fizzBuzz(15)