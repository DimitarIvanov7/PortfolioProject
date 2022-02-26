import { useState, useRef, useEffect } from 'react'


const matrixEffect = (canvas, dimensions) => {

    // const canvas = document.querySelectorAll('#canvas');
    console.log(dimensions);

    function matrixAnimation(canvas){

        console.log(canvas);

        const context = canvas.getContext('2d')

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';

        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width/fontSize;

        const rainDrops = [];

        for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
        }

        const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.fillStyle = '#45A29E';
        context.font = fontSize + 'px monospace';

        for(let i = 0; i < rainDrops.length; i++)
        {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
            
            if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
                }
            rainDrops[i]++;
        }
        };

        setInterval(draw, 30);
    }

    canvas.forEach(canv => matrixAnimation(canv.current, dimensions))

}


export default matrixEffect