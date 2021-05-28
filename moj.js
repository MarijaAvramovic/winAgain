const a = [05,
    05,
    13,
    04,
    07,
    01,
    09,
    08,
    17,
    03,
    02,
    20,
    19,
    03,
    03,
    09,
    08,
    02,
    08,
    08,
    14,
    11,
    02,
    04,
    07,
    05,
    17,
    02,
    05,
    07,
    04,
    01,
    03,
    07,
    01,
    11,
    02,
    04,
    07,
    05,
    06,
    08,
    06,
    06,
    06,
    06,
    08,
    05,
    04,
    02,
    13,
    10,
    08,
    02,
    09,
    09,
    13,
    07,
    02,
    09,
    03,
    02,
    01,
    10,
    04,
    02,
    04,
    02,
    01,
    09,
    01,
    18,
    09,
    09,
    05,
    06,
    16,
    05,
    17,
    05,
    04,
    19,
    14,
    04,
    07,
    04,
    06,
    10,
    06,
    09]
    
    /*var map = a.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});
       
    console.log(JSON.stringify(map));
    
    moj = JSON.stringify(map);
    console.log(moj);*/
     
    function count_duplicate(a){
        let counts = {}
       
        for(let i =0; i < a.length; i++){ 
            if (counts[a[i]]){
            counts[a[i]] += 1
            } else {
            counts[a[i]] = 1
            }
           }  
           var igrani = [];
           for (let prop in counts){
                 
               if ((counts[prop] < 5) && (prop <=20)) {
                   console.log(prop + " played: " + counts[prop] + " times.")
                   
                   igrani.push(prop);
                   
               }
           }
    
           
         //console.log(counts) 
         //console.log(igrani);
         win1 = igrani[Math.floor(Math.random() * igrani.length)];
         
       }
    
      win1 = count_duplicate(a);
      console.log(win1)
       
          
       /*  3 counted: 3 times.                          FIRST NUM
           4 counted: 2 times.
           { '3': 3, '4': 2, '6': 1 }
       */
      const b = [13, 
        14, 
        14, 
        05, 
        10, 
        03, 
        22, 
        10, 
        26, 
        05, 
        10, 
        24, 
        29, 
        04, 
        05, 
        13, 
        10, 
        23, 
        11, 
        12, 
        16, 
        22, 
        18, 
        11, 
        11, 
        12, 
        18, 
        13, 
        06, 
        10, 
        08, 
        06, 
        14, 
        18, 
        04, 
        25, 
        05, 
        22, 
        14, 
        09, 
        08, 
        18, 
        07, 
        29, 
        14, 
        16, 
        23, 
        08, 
        20, 
        19, 
        16, 
        15, 
        16, 
        16, 
        18, 
        26, 
        16, 
        08, 
        09, 
        12, 
        28, 
        13, 
        16, 
        25, 
        13, 
        06, 
        08, 
        18, 
        09, 
        14, 
        14, 
        25, 
        18, 
        14, 
        13, 
        16, 
        22, 
        12, 
        25, 
        14, 
        11, 
        21, 
        17, 
        20, 
        09, 
        21, 
        09, 
        14, 
        07, 
        21]
        
        function count_duplicate(b){
            let counts = {}
           
            for(let i =0; i < b.length; i++){ 
                if (counts[b[i]]){
                counts[b[i]] += 1
                } else {
                counts[b[i]] = 1
                }
               }  
               var igrani = [];
               for (let prop in counts){
                     
                   if ((counts[prop] < 5) && (prop <=30)) {
                       console.log(prop + " played: " + counts[prop] + " times.")
                       
                       igrani.push(prop);
                       
                   }
               }
        
               
             /*console.log(counts) 
             console.log(igrani);*/
             var win2 = igrani[Math.floor(Math.random() * igrani.length)];
             console.log(win2);
           }
        
           win2 = count_duplicate(b)
           console.log(win2);
           /*  3 counted: 3 times.
               4 counted: 2 times.                              second num
               { '3': 3, '4': 2, '6': 1 }
           */

          const third = [21, 
            17, 
            15, 
            13, 
            15, 
            20, 
            27, 
            16, 
            27, 
            13, 
            22, 
            27, 
            38, 
            13, 
            10, 
            26, 
            23, 
            29, 
            13, 
            27, 
            18, 
            23, 
            28, 
            30, 
            13, 
            15, 
            30, 
            23, 
            07, 
            18, 
            17, 
            09, 
            17, 
            29, 
            11, 
            30, 
            11, 
            24, 
            33, 
            23, 
            11, 
            23, 
            21, 
            35, 
            27, 
            34, 
            31, 
            15, 
            25, 
            20, 
            29, 
            24, 
            27, 
            22, 
            24, 
            27, 
            27, 
            20, 
            15, 
            25, 
            30, 
            21, 
            29, 
            30, 
            22, 
            21, 
            09, 
            33, 
            12, 
            19, 
            15, 
            31, 
            19, 
            22, 
            30, 
            24, 
            29, 
            19, 
            31, 
            21, 
            22, 
            30, 
            23, 
            29, 
            14, 
            28, 
            15, 
            16, 
            10, 
            25]
            
            function count_duplicate(third){
                let counts = {}
               
                for(let i =0; i < third.length; i++){ 
                    if (counts[third[i]]){
                    counts[third[i]] += 1
                    } else {
                    counts[third[i]] = 1
                    }
                   }  
                   var igrani = [];
                   for (let prop in counts){
                         
                       if ((counts[prop] < 5) && (prop <=40)) {
                           console.log(prop + " played: " + counts[prop] + " times.")
                           
                           igrani.push(prop);
                           
                       }
                   }
            
                   
                /* console.log(counts) 
                 console.log(igrani);*/
                 var win3 = igrani[Math.floor(Math.random() * igrani.length)];
                 console.log(win3);
               }
            
               win3 = count_duplicate(third)
               console.log(win3);
               /*  3 counted: 3 times.
                   4 counted: 2 times.                  THIRD num
                   { '3': 3, '4': 2, '6': 1 }
               */
            
              const frt =[30, 
                38, 
                24, 
                19, 
                18, 
                25, 
                34, 
                22, 
                28, 
                27, 
                28, 
                29, 
                39, 
                24, 
                18, 
                32, 
                31, 
                33, 
                27, 
                28, 
                30, 
                27, 
                33, 
                31, 
                15, 
                21, 
                36, 
                28, 
                23, 
                29, 
                35, 
                16, 
                30, 
                31, 
                13, 
                32, 
                18, 
                25, 
                38, 
                27, 
                26, 
                29, 
                26, 
                38, 
                35, 
                35, 
                38, 
                20, 
                36, 
                21, 
                36, 
                32, 
                29, 
                23, 
                29, 
                38, 
                36, 
                23, 
                31, 
                29, 
                40, 
                23, 
                30, 
                37, 
                23, 
                36, 
                23, 
                37, 
                15, 
                22, 
                28, 
                36, 
                23, 
                27, 
                36, 
                38, 
                30, 
                30, 
                36, 
                30, 
                29, 
                36, 
                36, 
                30, 
                19, 
                37, 
                29, 
                19, 
                14, 
                26]
                
                function count_duplicate(frt){
                    let counts = {}
                   
                    for(let i =0; i < frt.length; i++){ 
                        if (counts[frt[i]]){
                        counts[frt[i]] += 1
                        } else {
                        counts[frt[i]] = 1
                        }
                       }  
                       var igrani = [];
                       for (let prop in counts){
                             
                           if ((counts[prop] < 5) && (prop <=40)) {
                               console.log(prop + " played: " + counts[prop] + " times.")
                               
                               igrani.push(prop);
                               
                           }
                       }
                
                       
                     /*console.log(counts) 
                     console.log(igrani);*/
                     const win4 = igrani[Math.floor(Math.random() * igrani.length)];
                     console.log(win4);
                     
                   }
                
                   win4 = count_duplicate(frt)
                   /*  3 counted: 3 times.
                       4 counted: 2 times.
                       { '3': 3, '4': 2, '6': 1 }                   fourth num
                   */
                
                  const fifth =[36,
                    40,
                    42,
                    25,
                    39,
                    40,
                    36,
                    33,
                    41,
                    34,
                    41,
                    41,
                    42,
                    42,
                    30,
                    41,
                    34,
                    34,
                    38,
                    41,
                    36,
                    39,
                    39,
                    33,
                    27,
                    29,
                    39,
                    41,
                    42,
                    36,
                    42,
                    32,
                    38,
                    38,
                    28,
                    42,
                    23,
                    32,
                    40,
                    39,
                    27,
                    36,
                    37,
                    40,
                    42,
                    42,
                    40,
                    36,
                    37,
                    35,
                    41,
                    39,
                    40,
                    30,
                    33,
                    41,
                    37,
                    29,
                    38,
                    38,
                    41,
                    35,
                    40,
                    41,
                    38,
                    37,
                    29,
                    38,
                    22,
                    37,
                    29,
                    41,
                    30,
                    41,
                    37,
                    42,
                    39,
                    35,
                    38,
                    31,
                    39,
                    41,
                    42,
                    37,
                    25,
                    40,
                    30,
                    35,
                    32,
                    34]
                    
                    function count_duplicate(fifth){
                        let counts = {}
                       
                        for(let i =0; i < a.length; i++){ 
                            if (counts[fifth[i]]){
                            counts[fifth[i]] += 1
                            } else {
                            counts[fifth[i]] = 1
                            }
                           }  
                           var igrani = [];
                           for (let prop in counts){
                                 
                               if ((counts[prop] < 5) && (prop <=50)) {
                                   console.log(prop + " played: " + counts[prop] + " times.")
                                   
                                   igrani.push(prop);
                                   
                                   
                               }
                           }
                    
                           
                         /*console.log(counts) 
                         console.log(igrani);*/
                         const win5 = igrani[Math.floor(Math.random() * igrani.length)];
                         console.log(win5);
                         return win5
                       }
                       
                       win5 = count_duplicate(fifth)
                       /*  3 counted: 3 times.
                           4 counted: 2 times.                          fifth num
                           { '3': 3, '4': 2, '6': 1 }
                       */
                 
        var kombina
        kombina = [win1, win2, win3, win4, win5];
        kombina  = kombina.sort();
        console.log(kombina)
     alert(win1 + "  " + win2 + "  " + win3 + "  " + win4 + "  " + win5);
     