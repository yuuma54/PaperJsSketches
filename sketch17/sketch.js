// ここにスケッチ名を指定することができる。
let sketchName = 'My Sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。

    function pickRandom(array) {
        let i = Math.floor(Math.random() * array.length);
        return array[i];
    }
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: '#A44A3F', // 線の色
        fillColor: null, // 塗りの色
        strokeWidth: 1 // 線の幅
    };

    let backgroundColor = new Color('#ffffff');

    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    let randomRange = 10000;

    for(let x = 0; x < view.viewSize.width; x += 40){
        for(let y = 0; y < view.viewSize.height; y += 40){
            let rand_x = Math.random() * randomRange - randomRange * 0.5;
            let rand_y = Math.random() * randomRange - randomRange * 0.5;

            let p = Path.Line([x, y], [x + rand_x, y + rand_y]);
            p.strokeColor = '#000000';
            p.strokeWidth = 3
        }
    }

    // 画面を描く。
    view.draw();
});