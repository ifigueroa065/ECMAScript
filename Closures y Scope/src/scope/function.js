function greeting() {
    let userName = 'Ana'; 
    console.log(userName);
  
    if (userName === 'Ana') {
      console.log(`Hello ${userName}!`)
    }
  
  }
  //no podemos acceder a la variable 
  greeting();
  console.log(userName);