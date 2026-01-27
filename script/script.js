
// Section for each type of projects
function element_remover1() {
  let ele1 = document.getElementById("ele1_container");
  let ele2 = document.getElementById("ele2_container");
  let ele3 = document.getElementById("ele3_container");
  if (ele1.style.display === "none") {
    ele1.style.display = "block";
    ele2.style.display = "none";
    ele3.style.display = "none";
  } else {
    ele1.style.display = "block";
    ele2.style.display = "none";
    ele3.style.display = "none";
  }
}

function element_remover2() {
  let ele1 = document.getElementById("ele1_container");
  let ele2 = document.getElementById("ele2_container");
  let ele3 = document.getElementById("ele3_container");
  if (ele2.style.display === "none" && ele1.style.display === "block" || ele3.style.display === "block" ) {
    ele2.style.display = "block";
    ele1.style.display = "none";
    ele3.style.display = "none";
  } else {
    ele2.style.display = "block";
    ele1.style.display = "none";
    ele3.style.display = "none";
  }
}

function element_remover3() {
  let ele1 = document.getElementById("ele1_container");
  let ele2 = document.getElementById("ele2_container");
  let ele3 = document.getElementById("ele3_container");
  if (ele3.style.display === "none" && ele1.style.display === "block" || ele2.style.display === "block" ) {
    ele3.style.display = "block";
    ele2.style.display = "none";
    ele1.style.display = "none";
  } else {
    ele3.style.display = "block";
    ele1.style.display = "none";
    ele2.style.display = "none";
  }
}


// Secret code!
const allowedKeys = {
  ArrowLeft: 'left',
  ArrowUp: 'up',
  ArrowRight: 'right',
  ArrowDown: 'down',
  a: 'a',
  b: 'b',
  Enter: 'enter'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.key];
  var requiredKey = konamiCode[konamiCodePosition];
  if (key == requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == konamiCode.length) {
      activated();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

// Function that runs the secret
function activated() {
  let audio = new Audio("./public/video/mikudayo.mp3");
  audio.play();
  let konamicode = document.getElementById("cheat");
  konamicode.volume = 0.15;
  let images = document.getElementsByTagName("img");
  let html = document.getElementsByTagName("html")[0];
  let mizuki = document.getElementById("cheat_on");
  mizuki.style.display = "block";

  setTimeout(() => {
    konamicode.src = "public/video/konamicode.mp4";
    konamicode.muted = !konamicode.muted;

    for let index = 0; index < images.length; index++) {
      if (!images[index].src.includes("mizuki.gif") && !images[index].src.includes("twemoji--flag-united-states.svg") && !images[index].src.includes("twemoji--flag-france.svg")) {
          images[index].src = "public/placeholder/BlahajNoBG.gif";
      }
    };

    mizuki.style.opacity = "1";
    html.style.fontFamily = "Comic Sans MS, Comic Sans, sans-serif";

  }, 2000);

}

// Function for the language switch
function languageswitch() {
  let button_img = document.getElementById("button_img");
  let alt_flag = document.getElementById("alt-flag");
  const french = document.querySelectorAll("body [lang='fr']");
  const english = document.querySelectorAll("body [lang='en']");
  let button_flex = document.querySelectorAll(".other_button");

  if (document.documentElement.lang === "fr") {
    french.forEach((document) => {
      document.style.display = "none";
    });
    english.forEach((document2) => {
      document2.style.display = "block";
    });
    button_flex[1].style.display = "flex";
    document.documentElement.lang = "en";
    button_img.src = "public/Skills/twemoji--flag-united-states.svg";
    alt_flag.src = "public/Skills/twemoji--flag-france.svg";
  } else {
    french.forEach((document) => {
      document.style.display = "block";
    });
    english.forEach((document2) => {
      document2.style.display = "none";
    });
    button_flex[0].style.display = "flex";
    document.documentElement.lang = "fr";
    button_img.src = "public/Skills/twemoji--flag-france.svg";
    alt_flag.src = "public/Skills/twemoji--flag-united-states.svg";

  }
}

console.log(`%c    ..-.                                                                                                                                              -:    
 -++%@+                                   :                                                                                                           .@%=- 
 +*@@                                    :                                                                                                              @@* #@=                                    .:                                                                                                               #@:
:@:                                     -:                                                                                                                -:
:* .                 =.                                                                                                                  
                                       .=                                                                                                                   
                    .                  .=                                                                                                                   
                   ..                  :=                                                                                                                   
                   =.                  --                                                                                                                   
                  :-                   =-                                                           ..          .                                           
                 :-                   .-:                                                            .           .                                          
                 +                    :-=                                                            ..          .                                          
                --                   .-::                                                             .           .                                         
               .=.                   ::::                                                             -:          .                            ..           
               =:                   ..::-         .                                                   .+           .                            .           
              :=                    =:.:+         :                                                    ==          ..                           =           
             :=:                   :=  :+.        -.              :                                    .-:          .                           =           
      .      .-:                   =:   =-.       :-              :-                        ..          -=.         ..                          ::          
      .      :::                  .+    :-:       -=              :-                        :+          :=:          =.         .               .-          
      .      -=.                  ::     -=.      :=-              =.                       .+=          :--.        .:          .               +          
            .=:.                  -      :+       .-:.             ==                       .-=+         :. +.        -:          =             .+.         
     .      .-.                  .:      .*-      ---.             =--                      :. +-        .+  =        .:          .:             =-         
     .      --.      .           -:       :=:     .=:+:            :-=:.                    .-  ==        +=  -        .=          -.            --         
     .      --.      .           +.        .*.     * +:           ...=-                    .=   ==        +  .=        --         .=:           -+         
    ..     .--       -.          * :=.    +   +.           .  +=    .              .=    +-       .#   ==       -:         .+           -=         
    .      :--       .=         .-           ==    -.   +:          .:  +:    ..            .+     +:       -:   --       =:         =:          =-:        
    .      :-:   .    =.        ::            +-   :=    =:          -  -#.   ::            .+     .+-      .* -+.      =         .=.        .--.        
    .      -+.    .   :-        =.            .==   +     +=         ..  :*-   ..            *.     .=* :=    -+:     :=         :=        ::=:        
    .      --      .   *:       -               ** -.     .+         .   +%:   :            -:       =#:     =:    .=* =:         =:      .-.=.        
    .      ++.      .  -+:      *%#+             =- :=      .*.       ..   -*-  :+           -=        .*-    .=.     :+.   -*.        .+-      ::-:        
    .      --                   :  -%%#           ...=        +:       .    .=#   =          .+          #+    .=       +:   --         -=.     :.-.  ..    
    .      ==          *:  .    +     +%@%.         .+-        .=      .      -#. ::          -           =#.   ::        ..  --         ::    .----  ..... 
   ..     .==           .    .  +        :%@%#.       .          -:    ..      .*+.-:         -             ::   =*%%@@@@%@%*=--=:        =+   :--=- ..     
   ..     .=-                  .=           .*%@%=                .-    .        .==-.        ::         .-*%%@%=.--         -=:--        -=-. --:+-     .  
    .     .=-                  ..               *%@@%-              -=.  .         =**:       .=      #%@@%=.   :..-          :**-=-:      .+-::::=.        
    :      =:                                       +%@@%%            -=             =#* -   +%%* .*#.          #+===.   .  ==.=-:-. .      
   .-      +:                                           .+#%%*.         :**.           .#+     :*++.                .+.          .#*-==.    .-=--:-.   .    
   .-      +-                                                              .             .=+.   .                                  -%+=*:    -+:::=.  ... . 
   .-     .=:                                                                               :+. =                                    .###+:   :-=-.   ..    
    -      =-                               .-+**++=                                           -+-                                      :%%* .::-:..  .  : 
    -      +. =@%-                                 :#%@%=                                                                                 .#%#=::=.    .  : 
    -.     +.   *@@@@@@@@@@@@@@@@%+.                    +=                                         .%%%@@%%%*=.                              .+==:. . .. .= 
    :.     --    %@%+.*%@@@@@@@@@@@@@@@@@@@@%#:..                                                :##-.                                         .#-  .... -= 
    :=     -:  .+   +#%=.   :+%%%@%@@@@@@@@@@@@@@@@@%-.                                                                                     .   -. ...   -- 
    .+.    -==#+=#@@.                  .--##%%%@@@@@@@@%*.                                            ..*+%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:  .=  .   .=-. 
     --    . .%%%@#. .-:-. :+-*++::--:.       .    --%@+                                         .#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%-*%@@* :=. .   :.:  
     :=     .*%#*%+         ==:-=##++-:#%%%*=.       .:%%.                                         =%%@%%%%%%##***#=+++=:....     .*@%  :%+    =:  ... :-.  
      =.   *#%%%*%-         %#++:..   :+*+#%-        =. :+.                                      +@@=                :-===:. . .     .%%:.     =. ..  .:.   
   .  -- .+-= .%@@.           #+   .. =%#+*%+       .%:                                        .=* .*-:-+%+=:-#%%##--.     **-.  :.:   %@@%#+:=+   . .-. .. 
      .-        +%#             -+    -%%%%%= .     ++                                              -*%*.  . :#%+%#-       .+* =. =%%%%:  :...  --.... 
       +-   :-   *%           .++..... -##+:  ...-- =-                                                 .     =%*=*%* .*#         #%+#%%* : . +: ... 
       --.  .+    =+         =* .....      .::.=%#:*.                                                  +* -%%%%%-       :*#         %%%%%%%=-.  .=:      
       .*=   =.              =- ...:...........    :=                                                .%+. ..  -%%#:  .:..:  .-         %@* -   == ...   
        -+:  --               -. ...          .... #                                                =%. ...:..     ....%%+ -* *@=   :     .=.  . .  
    .   .=:. .+               .*.              ...+.                                                 + ....:.-....:::. .   ==        %%.   ..    .+-   ..   
        .=.   -:                =+              +%                                                   =+  .          .... .++         .    .+ .   +*: ...  . 
        .#. :  =                 :*.          .=.                                                     #=              . .+* =:   -=*-.  .:. . 
         *+ .+.-.                   .=-=+=*+-=.                                                        =#.             +%.               --.:. :--. ..:  .+ 
  ..     +#   ...                                                                                       .+:          .%:         .      ::. .  =+=.  ::  .+ 
   .-.   :#-   .+=                                                                                         --*******=                  .::..  -+-.  .::  -= 
    -=   -=*.   :%=                                                                                                                    - .:  .*=-. ..:   -= 
     #-.  =*+     +:                                                                                                                 .++..   .*=-  ==  ..-. 
     .#+  -=+=     =.                                                                                                               +=-     .++:. -+- . ::. 
      -#+=-=-+=                                                                                                                    %=.     .+=+:  += .. -.. 
       :+=::-==.                                                                                                                 :%=      .+*=:  ==.. . =:. 
     .  .=#=-.=#*.                                           :%-                                                                -=       .+-=:. -+. :   -.. 
 ..   .   .-+=--+=-..                                          #%:                     *@-                                      .        =:--:=:-: . .  -.. 
      .     .-+::--=:..                                          =%#.               =%%.                                               =%-.-::===. .... -:  
  .   ...... .-=-*:-..-:.                                           ..:::     ...*#-                                              . ..#=:.-=--=.  ....  -.  
        ....   -+=-=-..---:..                                                                                                   .....*+:..::+=-  ....:. --- 
   .      ....  .-===-...=--:-:..                                                                                            ..:+::.+=:. -:==:   .  ....:+- 
        :. ....  :==-+-..:::--:-+-...                                                                                      .::--:..+-..=-=-+:  . .::... :+: 
        . . ..:  ..==-:-..::.:::-:-==-::..                                                                             ...-:-:-:...=:.-:-=+:.  : .  ... .== 
        .   ..:... :+==-.:::.::::::::---=:-:...                                                                 ......::..:....:...-::-==-   . . ......  ++ 
        ..   .:-   .---:=.....:::.:::::::---=++--....                                                    . ......--::.:......:..  =.-==+:  ..-........: .-= 
      .  .  ...=+.   ++.-.:--:::::::::::::::::::==+====:....                                       . ...::::-:-::.::::.......:....==++=.  --. .. ..:.:. .-- 
    ....  .. ...=--. :+:-:.:.....:..:.::::::::::--::-:-===+==+*-.:-                   .......:::---:=---:::::::::::.:::::--:....++=-=   ==.......... .. .-: 
 ..  .:.......  :*+  -=.:..:::::.::.:.:...:..:::-.::. .         .:::--------------=. .:::-:=-:-::..:..::::::...:....::....::...=+===. .+-. .:......... .-:. 
 . . .-.  . .. . :-+ :*.-..:::::::..:..:::::::-.:               :=--::::::::::::::--         :-:::-:::::..::::::..:......:-.. -===-  -#.. ............ .::. 
 : . :=: ..  .  .:-# ..=-..:-::..:::::::::::::.    -=               ..  ... .....                ::-:.:.::.::::::::::::::-..:==+=.  +=:  ............ .:.:: 
 .   -+. :   .....:+-.:+-:.::....:::.::..::::.:      #                                         * .-::::::::...::::::::::.=-+==:. +*:  .........:... ..::- 
 :.  ++...--. ..   +- +:-..:::.:...:::::::::.:-      =-                                      *=     :-::::.:::.:::::::::::.-:==. .=+ .........:.....  :-..= 
 -  -+-....=+:.. ..==..::.::::..::::::::::.:... -     =%%               +%=                 .=      :::.:::::::.::::::::-..:+=-..-*-.:.....:. ...:   =-..:- 

%c
Portfolio - Claire Maitre
BUT MMI S1 - Intégration S1`,
"color: #F5A9B8; font-family: monospace; line-height: 1;",
"color: #D3CCD1; font-weight: bold; font-family: sans-serif;"

);

