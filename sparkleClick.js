const numberOfSparkles = 50;
const lifeSpan = 1200;
const delay = lifeSpan * 0.35;
const flyoutDistance = 250;
const sparklePoolSize = 8;
const blockSize = 1;
let sparklePool = [];
let sparklePoolIndex = 0;

function fillMagicArray(x, y, index) {
    var sparkleMagicArray = [];
    for (var i = 0; i < numberOfSparkles; i++) {
        let div = document.createElement("div");
        div.classList = 'sporkle';
        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
        let px = rand(blockSize, 3);
        div.style.width = `${px}px`;
        div.style.height = `${px}px`;
        sparkleMagicArray.push(div);
        document.body.appendChild(div);
        sparklePool[index] = sparkleMagicArray;
    }
}

function flushMagicArray(index) {
    setTimeout(function () {
        var sparkleMagicArray = sparklePool[index];
        var len = sparkleMagicArray.length;
        for (var i = 0; i < len; i++) {
            sparkleMagicArray[i].remove();
        }
        sparkleMagicArray = [];
    }, lifeSpan);
}

function rand(n, diff) {
    var min = n - diff;
    var max = n + diff;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomCoordinates(x, y) {
    var ypixels = rand(y, flyoutDistance);
    var xPixels = rand(x, flyoutDistance);
    return {
        y: ypixels,
        x: xPixels
    };
}

function explodeMagicArray(x, y, index) {
    setTimeout(function () {
        var sparkleMagicArray = sparklePool[index];
        var len = sparkleMagicArray.length;
        for (var i = 0; i < len; i++) {
            var el = sparkleMagicArray[i];
            var c = randomCoordinates(x, y);
            el.style.top = `${c.y}px`;
            el.style.left = `${c.x}px`;
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            el.style.background = `#${randomColor}`;
            el.style.opacity = 0;
            el.style.transitionDelay = `${rand(delay, delay)}ms`;
            el.style.transitionDuration = `${lifeSpan * 0.8}ms`;
        }
    });
}

function sparkle(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    fillMagicArray(x, y, sparklePoolIndex);
    explodeMagicArray(x, y, sparklePoolIndex);
    flushMagicArray(sparklePoolIndex);
    sparklePoolIndex++;
    if (sparklePoolIndex > sparklePoolSize - 1) {
        sparklePoolIndex = 0;
    }
}


document.addEventListener('click', sparkle, false);