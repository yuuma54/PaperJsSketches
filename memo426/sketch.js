// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#bababa');

    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    let x = Math.random();
    let y = Math.random();

    Path.Rectangle([x, y], [10, 10]);

    Path.
    // 画面を描く。
    view.draw();
});