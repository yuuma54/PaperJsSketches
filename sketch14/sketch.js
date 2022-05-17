// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    function pickRandom(array) {
        let i = Math.floor(Math.random() * array.length);
        return array[i];
    }

    project.currentStyle = {
        strokeColor: '#A44A3F', // 線の色
        fillColor: null, // 塗りの色
        strokeWidth: 0 // 線の幅
    };

    let backgroundColor = new Color('#000000');

    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

    let count = 800;
    let angle = Math.PI * 0.08;
    let length = 0.1;
    let dl = 0.075;
    let randomRange = 0;


    let points = [];
    let theta = Math.PI * 0.05;

    let colors = ["#0ff777"];

    for (let i = 0; i < count; i++) {
        //points.push([x, y]);

        //let rand_x = Math.random() * randomRange - randomRange * 0.5;
        //let rand_y = Math.random() * randomRange - randomRange * 0.5;

        x += Math.cos(theta) * length;
        y += Math.sin(theta) * length;

        angle += Math.PI * 0.000001;
        theta += angle;
        length += dl;

        let circle = Path.Circle([x, y], 5);
        //circle.fillColor = '#ffff00';
        circle.fillColor = pickRandom(colors);
    }

    // 画面を描く。
    view.draw();
});