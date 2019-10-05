window.addEventListener('load',  function() {
    const boxcv = document.querySelector('.box');
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads >  div');
    const spans = document.querySelectorAll('.pads .letter');
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    const letters = [
        "Q",
        "S",
        "D",
        "J",
        "K",
        "L"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            active(index);
        })
    });

    addEventListener('keyup', function(e) {
        const letter = e.key.toUpperCase();
        if (letters.includes(letter)) {
            const index = letters.indexOf(letter);
            active(index);
        }
    });

    const active = index => {
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubbles(index);
        createBox(index);
    };

    const createBox = index => {

        if (document.getElementById('box-cv')){
            document.getElementById('box-cv').remove();
        }

        const box = document.createElement('div');

        box.id = 'box-cv';
        boxcv.appendChild(box);

        box.style.opacity = '0';
        box.style.animation = `fadeIn ease-in 1`;
        box.style.animationFillMode = `forwards`;
        box.style.animationDuration = `1s`;
        box.style.animationDelay = `0.7s`;

        box.style.backgroundColor = colors[index];
        box.style.borderRadius = '15px';
        box.style.bottom = '50%';

        let boxArray = boxTest[index];

        switch (index) {
            case 0 :
                box.appendChild(boxTitle);
                box.appendChild(boxText);
                box.appendChild(boxText2);

                boxTitle.textContent = boxArray.title;
                boxText.textContent = boxArray.core;
                boxText2.textContent = boxArray.core2;

                break;
            case 1 :
                box.appendChild(boxTitle);
                box.appendChild(boxText);
                box.appendChild(boxText2);
                box.appendChild(boxText3);
                boxTitle.textContent = boxArray.title;
                boxText.textContent = boxArray.front;
                boxText2.textContent = boxArray.back;
                boxText3.textContent = boxArray.bonus;

                break;
            case 2 :
                box.appendChild(boxTitle);
                box.appendChild(boxText);
                box.appendChild(boxText2);

                boxTitle.textContent = boxArray.title;
                boxText.textContent = boxArray.core;
                boxText2.textContent = boxArray.stack;


                break;
            case 3 :
                box.appendChild(boxTitle);
                box.appendChild(boxText);
                box.appendChild(boxText2);

                boxTitle.textContent = boxArray.title;
                boxText.textContent = boxArray.core;
                boxText2.textContent = boxArray.stack;


                break;
            case 4 :
                box.appendChild(boxTitle);
                box.appendChild(boxText);
                box.appendChild(boxText2);

                boxTitle.textContent = boxArray.title;
                boxText.textContent = boxArray.core;
                boxText2.textContent = boxArray.stack;

                break;
            case 5 :
                box.appendChild(boxTitle);
                box.appendChild(boxLink);
                box.appendChild(boxLink2);
                box.appendChild(boxLink3);
                box.appendChild(boxLink4);

                boxTitle.textContent = boxArray.title;

                boxLink.setAttribute('href',boxArray.portfolio);
                boxLink.innerHTML = 'Name of your link' + '<br />' ;

                boxLink2.setAttribute('href',boxArray.git);
                boxLink2.innerHTML = 'Name of your link' + '<br />' ;

                boxLink3.setAttribute('href',boxArray.linkedin);
                boxLink3.innerHTML = 'Name of your link' + '<br />';

                boxLink4.setAttribute('href',boxArray.email);
                boxLink4.innerHTML = 'Name of your link';

                break;
        }

    };

    const createBubbles = index => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump${spans[index].innerHTML} 1s ease`;
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    };
});