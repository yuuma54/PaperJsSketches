// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);
    
    let backgroundColor = new Color('#000000');
    let arkColor = new Color('#ffffff');
    
    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    for (i = 100; i <= 500; i = i + 100){
        let line1 = Path.Line([i, 0], [i, 500]);
        line1.strokeColor = arkColor;
        line1.strokeWidth = 8;
        for (j = 0; j <= 550; j = j + 40){
            let line2 = Path.Line([i-100, j], [i, j])
            line2.strokeColor = arkColor;
            line2.strokeWidth = 8;
            line2.rotate(45);
        }
    }



    // 画面を描く。
    view.draw();
});