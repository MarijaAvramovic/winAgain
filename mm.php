<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>CSS Transformations - Carousel</title>

        <style>
            #main-container {
                perspective: 400px;
                position: relative;
                width: 300px;
                height: 220px;
                margin: 80px auto;
            }

            #tile-container {
                transform: translateZ(-300px) rotate3d(0, 1, 0, 0deg);
                transform-style: preserve-3d;


                animation-name: carousel-animation;
                animation-duration: 4s;
                animation-iteration-count: infinite;
                animation-delay: 1s;
            }


            #tile-container:hover {
                transform: translateZ(-300px) rotate3d(0, 1, 0, 360deg);
            }

            .tile {
                width: 300px;
                height: 220px;
                border-radius: 50%;
                position: absolute;
                margin: 0 auto;
                background-repeat: no-repeat;
                background-position: center;
                background-size: 64px;
                opacity: 0.60;
                text-align: center;
                font-size: 90px;
                
            }
            .tile p{
                margin: auto;
            }
            


            #tile-1 {
                background-image: url("img/like.png");
                background-color: #914E67;
                transform: rotateY(0deg) translateZ(300px);
            }

            #tile-2 {
                background-image: url("img/idea.png");
                background-color: #4FBA6F;
                transform: rotateY(72deg) translateZ(300px);
            }

            #tile-3 {
                background-image: url("img/clock.png");
                background-color: #5192D2;
                transform: rotateY(144deg) translateZ(300px);
            }

            #tile-4 {
                background-image: url("img/star.png");
                background-color: #E8BF1C;
                transform: rotateY(216deg) translateZ(300px);
            }

            #tile-5 {
                background-image: url("img/note.png");
                background-color: #5D7586;
                transform: rotateY(288deg) translateZ(300px);
            }

            @keyframes carousel-animation {
                0% {
                    transform: translateZ(-300px) rotate3d(0, 1, 0, 0deg);
                }

                45% {
                    transform: translateZ(-300px) rotate3d(0, 1, 0, 160deg);
                }

                55% {
                    transform: translateZ(-300px) rotate3d(0, 1, 0, 160deg);
                }

                100% {
                    transform: translateZ(-300px) rotate3d(0, 1, 0, 360deg);
                }
            }
        </style>
    </head>

    <body>
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
                <div class="tile" id="tile-4">
                <?php

                echo rand(0, 9);
                ?>
                </div>
                <div class="tile" id="tile-5">
                <?php

                echo rand(0, 9);
                ?>
                </div>
            </div>
        </div>

    </body>

</html>