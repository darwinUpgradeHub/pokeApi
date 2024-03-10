//Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.




const runTimeOut = async () => {
    const promise = await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    });

    console.log('Time out!');
};

runTimeOut();



