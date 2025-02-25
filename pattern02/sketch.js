// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#47a025');
    let lineColor1 = new Color('#f01313');
    let lineColor2 = new Color('#000000');
    let starColor = new Color('#ffe66d');

    let width = 2;
    let widthB =8;
    let tall = 500;
    let space = 4;
        
    // 長方形 : 左上の座標, 幅と高さ
    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    for (let i = 0; i < 500; i = i + 40){
        //縦の赤線
        let line1 = Path.Rectangle([i, 0], [width, tall]);
        line1.fillColor = lineColor1;
        let line2 = Path.Rectangle([i+space, 0], [width, tall]);
        line2.fillColor = lineColor1;
        //横の赤線
        let line3 = Path.Rectangle([0, i], [tall, width]);
        line3.fillColor = lineColor1;
        let line4 = Path.Rectangle([0, i+space], [tall, width]);
        line4.fillColor = lineColor1;
        //星
        for (let j = 23; j < 500; j = j + 40){
            let star = Path.Star([j, i+23], 5, 5, 10);
            star.fillColor = starColor;
        }
    }

    // 画面を描く。
    view.draw();
});