

function showResult() {
    
        var dimA = document.getElementById("A").value;
        var dimB = document.getElementById("B").value;
        var dimbf = document.getElementById("bf").value;
        var dimd = document.getElementById("d").value;
        var dimFy = document.getElementById("fy").value;
        var dimFu = document.getElementById("fu").value
        var dimq = document.getElementById("q").value;
        var dimfck = document.getElementById("fck").value;
        var dimA2byA1 = document.getElementById("A2byA1").value;
       
        //Show Area calculation results
        var resArea = (Number(dimq)/(Number(0.35)*(Number(dimfck)*Number(10)))*Number(100))
        document.getElementById('res_area').innerHTML = resArea.toFixed(2) + ' cm²';
        
        // Show fc calculation results
        var resFc = (Number(dimq)/(Number(dimA)*(Number(dimB))));
        document.getElementById('res_fc').innerHTML = 'fc = N/A*B ' + resFc.toFixed(3) + ' KN/cm²';
        
        // Show 035fck calculation results
        var res035Fc = (0.35*(Number(dimfck/10))*(Math.sqrt(Number(dimA2byA1))));
        document.getElementById('res_035fck').innerHTML = res035Fc.toFixed(3) + ' KN/cm²'; 

        // Verify if the dimension is ok for the requisits 
        if (resFc < res035Fc) {
            document.getElementById('res_pass').innerHTML = 'The dimensions meet the requirements.';    
        }else{
            document.getElementById('res_pass').innerHTML = 'The dimensions NOT meet the requirements.';
        }
        // calc n
        var resn = ((((Number(dimB)-(0.8*Number(dimbf))))/2));
        document.getElementById('res_n').innerHTML = 'n= ' + resn.toFixed(3) + ' cm';

        // calc m
        var resm = (((Number(dimA)-0.95*Number(dimd))/2));
        document.getElementById('res_m').innerHTML = 'm= ' + resm.toFixed(3) + ' cm';
        
        // calc nl
        var resnl = (Math.sqrt(((Number(dimbf)*Number(dimd))))/4);
        document.getElementById('res_nl').innerHTML = 'n= ' + resnl.toFixed(2) + ' cm';

        // calc M
        var resmax = Math.max(Number(resn), Number(resm), Number(resnl));
        var resM = Number(resFc)*Math.pow(Number(resmax),2)/2;
        document.getElementById('res_M').innerHTML = 'M= ' + Number(resM).toFixed(3) + ' KN*cm/cm';

        // calc t
        var rest = Math.sqrt((Number(resM)*6)/(1*0.9*Number(dimFy)));
        document.getElementById('res_t').innerHTML = 't= ' + Number(rest).toFixed(2) + ' cm';



        
    }