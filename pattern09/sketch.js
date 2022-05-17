// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#bd493e');
    let lineColor = new Color('#f5d295');
    
    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    for (i = 0; i <= view.viewSize.width * 1.1; i = i + 8){
        for (j = 0; j < view.viewSize.height; j = j + 150){
            let line1 = Path.Line([i, j], [i - 10, j + 15]);
            line1.strokeColor = lineColor;
            line1.strokeWidth = 3;
            let line2 = Path.Line([i, j + 25], [i - 10, j + 40]);
            line2.strokeColor = lineColor;
            line2.strokeWidth = 3;
            let line3 = Path.Line([i, j + 50], [i - 10, j + 65]);
            line3.strokeColor = lineColor;
            line3.strokeWidth = 3;

            let line4 = Path.Line([j, 0], [j, view.viewSize.height]);
            line4.strokeColor = lineColor;
            line4.strokeWidth = 18;
            // let line5 = Path.Line([j, 0], [j, view.viewSize.height]);
            // line5.strokeColor = backgroundColor;
            // line5.strokeWidth = 1;
        }

    }

    // 画面を描く。
    view.draw();
});