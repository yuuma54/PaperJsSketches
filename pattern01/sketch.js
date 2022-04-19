// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#ebe546');
    let lineColor1 = new Color('#f01313');
    let lineColor2 = new Color('#000000');

    // 長方形 : 左上の座標, 幅と高さ
    let background = Path.Rectangle([0, 0], [500, 500]);
    background.fillColor = backgroundColor;

    // 直線 : 開始点の座標, 終了点の座標
    let line1 = Path.Line([0, 1], [500, 1]);
    line1.fillColor = lineColor1;

    // 画面を描く。
    view.draw();
});