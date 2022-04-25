// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#ffffff');
    let starColor = new Color('#CFE9FC');
        
    // 長方形 : 左上の座標, 幅と高さ
    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    for (let i = 0; i <= 500; i = i + 100){
        for (let j = 0; j <= 500; j = j + 100){
        let star = Path.Star([i, j], 4, 25, 50);
        star.fillColor = starColor;
        star.rotate(45);
        
        let star2 = Path.Star([i + 50, j + 50], 4, 25, 50);
        star2.fillColor = starColor;
        star2.rotate(45);

        }
    }

    // 画面を描く。
    view.draw();
});