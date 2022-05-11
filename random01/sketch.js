// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#000000');

    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;
    
    let randomRange = 5;

    for (let y = 0; y < 500; y += 20) {​​​​
        for (let x = 0; x < 500; x += 20) {​​​​​​​​​​​
            let rand_x = Math.random() * randomRange - randomRange * 0.5;
            let rand_y = Math.random() * randomRange - randomRange * 0.5;

            let r = Math.random();
            let g = Math.random();
            let b = Math.random();

            let circle = Path.Circle([x + rand_x, y + rand_y], 5);

            circle.fillColor = new Color(r, g, b);
        }​​​​​​​​​​​
    }​​​​​​​​​​​​​​​​​​


    // 画面を描く。
    view.draw();
});