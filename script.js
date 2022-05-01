let like1=document.getElementById('heart1');
        like1.addEventListener("click", fonct1);
        function fonct1()
        {
           
            if (like1.style.color!="red")
            {
              
                like1.style.color='red';
            }
            else {
                like1.style.color='blue' ;
                }
        }  
        
        let like2=document.getElementById('heart2');
        like2.addEventListener("click", fonct2);
        function fonct2()
        {
           
            if (like2.style.color!="red")
            {
              
                like2.style.color='red';
            }
            else {
                like2.style.color='blue' ;
                }
        }  
        
        let like3=document.getElementById('heart3');
        like3.addEventListener("click", fonct3);
        function fonct3()
        {
        
            if (like3.style.color!="red")
            {
              
                like3.style.color='red';
            }
            else {
                like3.style.color='blue' ;
                }
        }  
        
        let like4=document.getElementById('heart4');
        like4.addEventListener("click", fonct4);
        function fonct4()
        {
           
            if (like4.style.color!="red")
            {
              
                like4.style.color='red';
            }
            else {
                like4.style.color='blue' ;
                }
        }  
        
        let qty1=0, qty2=0, qty3=0, qty4=0;
        let globalQty= 0;
        let plus1=document.getElementById('plus1');
        let plus2=document.getElementById('plus2');
        let plus3=document.getElementById('plus3');
        let plus4=document.getElementById('plus4');
        let Qty1=document.getElementById('qtyId1');
        let Qty2=document.getElementById('qtyId2');
        let Qty3=document.getElementById('qtyId3');
        let Qty4=document.getElementById('qtyId4');
        let total=document.getElementById('total');
        
        
        plus1.addEventListener('click', increment1);
        function increment1(){
            qty1++;
            
            Qty1.innerText=qty1;
        }
        let moins1=document.getElementById('moins1');
        moins1.addEventListener('click', decrement1);
        function decrement1(){
            if (qty1>0){
                qty1--;
            
                Qty1.innerText=qty1;
            }
            
        }
        plus2.addEventListener('click', increment2);
        function increment2(){
            qty2++;
            
            Qty2.innerText=qty2;
        }
        let moins2=document.getElementById('moins2');
        moins2.addEventListener('click', decrement2);
        function decrement2(){
            if (qty2>0){
                qty2--;
            
                Qty2.innerText=qty2;
            }
            
        }
        plus3.addEventListener('click', increment3);
        function increment3(){
            qty3++;
            
            Qty3.innerText=qty3;
        }

        let moins3=document.getElementById('moins3');
        moins3.addEventListener('click', decrement3);
        function decrement3(){

            if (qty3>0){
                qty3--;
                Qty3.innerText=qty3;
            } 
        }


        plus4.addEventListener('click', increment4);
        function increment4(){
            qty4++;
            
            Qty4.innerText=qty4;
        }
        let moins4=document.getElementById('moins4');
        moins4.addEventListener('click', decrement4);
        function decrement4(){
            if (qty4>0){
                qty4--;
            
                Qty4.innerText=qty4;
            }
            
        }
        
        let fill=document.getElementById('fill');
        fill.addEventListener('click',fillF);
        
        
        function fillF(){
            globalQty= qty1 + qty2+ qty3+ qty4;
            total.innerText=globalQty;
        }

        let cancel=document.getElementById('cancel');
        cancel.addEventListener('click',cancelF);
        function cancelF(){
            globalQty= 0;
            total.innerText=globalQty;
        }