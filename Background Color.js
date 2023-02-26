
alert('Refresh Complete')


$(document).ready(function(){ 

    let body= $('document.body');

    let color =[

        '#140f07',
        '#131b28',
        '#0e3d58',
        '#0a6893',
        '#06a1d8',
        '#08e1ff',
        '#06a1d8',
        '#0a6893',
        '#0e3d58',
        '#131b28'
        


        // 'aqua',
        // 'aquamarine',
        // 'yellowgreen',
        // 'chartreuse',
        // 'darkcyan',
        // 'cornflowerblue',
        // 'blue',
        // 'cyan'
    ];


    let i = 0;
        
    function changeColor(){


        document.body.style.backgroundColor=color[i];
        // body.css('background',color[i]);
        i++;

        if(i>=color.length){
            i=0;
        };
    }

    setInterval(changeColor,2000);

    // changeColor();

})

