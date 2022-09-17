const convertTemp = ()=>{
    let userIn = document.getElementById('userIn').value;
    let selectChoice = document.getElementById('selectChoice').value;
    console.log(userIn);
    console.log(selectChoice);
    const fahrToCel = (fahr)=>{
          let fahrenheit = Math.round((fahr-32)*5/9);
          return fahrenheit;

    }
    const celTofahr = (cel)=>{
        let celcius = Math.round((cel*9/5)+32);
        return celcius;

    }
    let result ;
    if(selectChoice == 'cel'){
        result = fahrToCel(userIn);
        document.getElementById('result').innerHTML=` ${userIn} °Fahrenheit = ${result} °Celcius `     
        }else{
            result = celTofahr(userIn);
            document.getElementById('result').innerHTML=` ${userIn} °Celcius = ${result} °Fahrenheit `
        }

    }


