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

    let backgroundColor = new Color('#000000');

    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    let randomRange = 5;

    for(let x = 0; x < view.viewSize.width; x += 50){
        for(let y = 0; y < view.viewSize.height; y += 50){
            let rand_x = Math.random() * randomRange - randomRange * 0.5;
            let rand_y = Math.random() * randomRange - randomRange * 0.5;

            let p = Path.Line([0, 0], [x + rand_x, y + rand_y]);
            p.fillColor = '#ffffff';
        }
    }

    // 画面を描く。
    view.draw();
});