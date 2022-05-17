// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#ffffff');
    let lineColor1 = new Color('#f01313');
    let lineColor2 = new Color('#000000');

    let width = 5;
    let widthB =8;
    let tall = 500;
    let space = 16;
        
    // 長方形 : 左上の座標, 幅と高さ
    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    for (let i = 0; i < view.viewSize.width; i = i + space){
        let baseline = Path.Rectangle([0, i], [tall, width]);
        baseline.fillColor = lineColor2
    }

    for (let j = -view.viewSize.width * 0.5; j < view.viewSize.width * 1.5; j = j + 100){
        let mainline = Path.Rectangle([j, -125], [25, tall*1.5]);
        mainline.fillColor = backgroundColor;
        mainline.rotate(45);
    }

    // 画面を描く。
    view.draw();
});