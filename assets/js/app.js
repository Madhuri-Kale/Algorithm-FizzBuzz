var cl = console.log;

// if a number is divisible by 3 then print Fizz,
// if a number is divisible by 5 then print Buzz, and
// if a number is divisible by both 3 and 5 then print FizzBuzz,

//3 == Fizz 5 == Buzz 3 && % == FizzBuzz

for(var i = 1; i <= 15; i++){
    if(i % 3 === 0 && i % 5 === 0){
        cl('FizzBuzz')
    } else if(i % 3 === 0){
        cl('Fizz')
    } else if(i % 5 === 0){
        cl('Buzz')
    } else{
        cl(i)
    }
}

function FizzBuzz(min, max){
    if(min >= max){
        alert("Please enter valid number range");
        return;
    }
    for(i = min; i <= max; i++){
        if(i % 3 === 0 && i % 5 === 0){
            cl('FizzBuzz')
        } else if(i % 3 === 0){
            cl('Fizz')
        } else if(i % 5 === 0){
            cl('Buzz')
        } else{
            cl(i)
        }
    }
}
FizzBuzz(50,100);
FizzBuzz(500,100);