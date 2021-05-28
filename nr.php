<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>lineweb</title>
        <meta name="author" content="Marija Avramovic">
        <link href="style.css" type="text/css" rel="stylesheet">

        <link href="css/all.min.css"  type="text/css" rel="stylesheet"> <!--font awesome-->
        
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet">
    </head>
    <body>
        <div id="wrapper">
            <div id="header">
                <div id="logo_holder">
                    <img src="pic/ele.jpg" alt="" class="logo"> 
                </div>
                
                <p class="moto">Georgia lottery winners Raphel &amp; Maria </p>

            
            </div><!-- header-->
            <div id="nav">

                <ul>
                    <li><a href="index.html">Home</a></li>

                    <li><a href="powerball.html">Power Ball</a></li>

                    <li><a href="megamillion.html">Mega Million</a></li>
                    <li><a href="pick3.html">Pick3 </a></li>
                    <li><a href="pick4.html">Pick 4 </a></li>
                    <li><a href="pick5.html">Pick5</a></li>
                    <li><a href="fantasy5.html">Fantasy 5</a></li>
                    
                </ul>
                <div id="social">
                   <a href="#"><i class="fas fa-money-check-alt"></i></a> 
                   <a href="#"><i class="fas fa-money-check-alt"></i></a> 
                   <a href="#"><i class="fas fa-money-check-alt"></i></a> 



                </div>
            </div><!-- nav-->

            <div id="central">
                <div id="main">
                    <h1>I am now manifesting a big lottery win</h1>
                    <p>To manifest the lottery win or any other object for that matter, your entire being has to vibrate at the same frequency and send out a strong signal to the Universe.</p>
                    <img src="pic/hero.jpg" alt="hero">
                    <h2>Lorem, ipsum.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste qui provident dicta consequatur earum temporibus, error perspiciatis quibusdam neque autem harum eum in nihil esse mollitia a ab incidunt dolorum repellendus maiores consectetur. Pariatur velit dicta consequuntur ex fugiat, sequi ea. Expedita commodi tenetur dolores repellendus unde voluptates ullam aut necessitatibus voluptate id amet repudiandae delectus, iusto fuga, harum dignissimos ex aliquam neque velit eius! Unde possimus ut harum a qui doloremque porro quod asperiores modi odio. Earum magni amet asperiores ducimus laborum sed, aliquid illo cumque culpa mollitia quidem officia illum odit cupiditate, consectetur hic. Praesentium sed consequatur tenetur.</p>
                    
                    <div id="main-container">
            <div id="tile-container">
                <div class="tile" id="tile-1">
                    <p>
                <?php

                echo rand(0, 9);
                ?>
                </p>
                </div>
                <div class="tile" id="tile-2">
                <?php

                echo rand(0, 9);
                ?>
                </div>
                <div class="tile" id="tile-3">
                <?php

                echo rand(0, 9);
                ?>
                </div>
            </div>
        </div>

                </div><!--main-->
                <div id="sidebar">
                    <div class="block">
                    <h2>WINNING TICKET - next step</h2>
                    <p>Sign and print your name on the back of your Winning ticket.</p>
                    </div>

                <div class="block">
                    <h2>PRINT AND FILL OUT FORM</h2>
                    <p>A Winner Claim Form and Present two forms of valid identification. </p>
                </div>

                <div class="block">
                    <h2>CLAIM at Georgia Lottery Corporation</h2>
                    <img src="pic/location.png" alt="">
                   <p><a href="#">250 Williams Street, Suite 3000 Atlanta, GA 30303</a></p>
                 </div>
                </div><!--sidebar-->

            </div><!-- central-->

            <div id="footer">

                <p>Copyright &copy; Lineweb</p>
            
            </div><!-- footer-->
        </div><!--wrapper-->
    </body>
</html>