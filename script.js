
// Javascript Code...

    // First-Class Plus Button Handler....

        document.getElementById('firstPlusBtn').addEventListener('click', function(){
                        
            plusButton('firstInput');
        })


    // Economy-Class Plus Button Handler....

        document.getElementById('economyPlusBtn').addEventListener('click',function(){
            
            plusButton('economyInput');
        })


    // First-Class Minus Button Handler....

        document.getElementById('firstMinusBtn').addEventListener('click',function(){
        
            minusButton('firstInput');
        })


    // Economy-Class Minus Button Handler....

        document.getElementById('economyMinusBtn').addEventListener('click',function(){
        
            minusButton('economyInput');
        })


    //  Function For Plus Button...

        function plusButton(oneAdd){

            document.getElementById(oneAdd).value = 1 + ticketQuantity(oneAdd); 

            subtotalCalculation();
            vatCalculation() ;
            totalAmountCalculation();
                
        }

    // Function For Minus Button....

        function minusButton(oneMinus){
            let newValueCase = ticketQuantity(oneMinus);
            if(newValueCase > 0){
                document.getElementById(oneMinus).value = newValueCase - 1 ;
            }

                - 1 * subtotalCalculation();
                - 1 * vatCalculation() ;
                - 1 * totalAmountCalculation();

        }


    //  Count Subtotal...

        function subtotalCalculation(){

            const firstClassPriceInt    = subtotal('firstInput') ;
            const economyClassPriceInt  = subtotal('economyInput') ;

            const totalPrice =  firstClassPriceInt * 150 + economyClassPriceInt * 100 ;
            document.getElementById('subtotal').innerText = totalPrice ;

        }




    // Count Charge 10% VAT...

        function vatCalculation(){

            const vatForPerTicket = document.getElementById('subtotal').innerText ;
            const totalVAT = parseInt(vatForPerTicket);
            document.getElementById('vat').innerText = totalVAT * 0.1 ;
                    
        }

    // Count Total Amount...

        function totalAmountCalculation(){
                const subtotalAmount = totalAmount('subtotal') ;
                const vatAmount      = totalAmount('vat') ;
                const total = subtotalAmount + vatAmount;
                document.getElementById('totalAmount').innerText = total ;

        }


    // Function For Total-Amount...

        function totalAmount(totalDollar){
            const totalAmount = document.getElementById(totalDollar).innerText;
            const totalAmountInt = parseInt(totalAmount);

            return totalAmountInt;
        }


    // Function For Subtotal...

        function subtotal(quantityInput){

            const price = document.getElementById(quantityInput).value ;
            const priceInt = parseInt(price) ;

            return priceInt;
        }

    // Function For Ticket-Quantity...


        function ticketQuantity(id){

            const valueInput = document.getElementById(id).value ;
            const newValue = parseInt(valueInput) ;
            
            return  newValue ;
        }

    // For Second Page By {Book Now}..
        document.getElementById('bookNow').addEventListener('click',function(){
            document.getElementById('firstPage').style.display = 'none';
            document.getElementById('secondPage').style.display = 'block' ;
        
        })