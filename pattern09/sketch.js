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

    let gap = 2;
    let x_gap = 3;
    let y_gap = 7;
    let linewidth = 1;
    let linewidth2 = 12;


    // for (i = 0; i <= view.viewSize.width * 1.1; i += 8){
    //     for (j = 0; j < view.viewSize.height; j += 80){
    //         let line1 = Path.Line([i, j], [i - x_gap, j + 15]);
    //         line1.strokeColor = lineColor;
    //         line1.strokeWidth = linewidth;
    //         let line2 = Path.Line([i, j + 25], [i - x_gap, j + 40]);
    //         line2.strokeColor = lineColor;
    //         line2.strokeWidth = linewidth;
    //         let line3 = Path.Line([i, j + 50], [i - x_gap, j + 65]);
    //         line3.strokeColor = lineColor;
    //         line3.strokeWidth = linewidth;

    //         let line4 = Path.Line([j, 0], [j, view.viewSize.height]);
    //         line4.strokeColor = lineColor;
    //         line4.strokeWidth = linewidth2;
    //     }
    // }


    for (i = 0; i <= view.viewSize.width * 1.1; i += 4){
        for (j = 0; j < view.viewSize.height; j += 70){
            let line1 = Path.Line([i, j], [i - x_gap, j + y_gap]);
            line1.strokeColor = lineColor;
            line1.strokeWidth = linewidth;
            let line2 = Path.Line([i, j + y_gap + gap], [i - x_gap, j + y_gap * 2 + gap]);
            line2.strokeColor = lineColor;
            line2.strokeWidth = linewidth;
            // let line3 = Path.Line([i, j + y_gap * 2 + gap * 2], [i - x_gap, j + y_gap * 3 + gap * 2]);
            // line3.strokeColor = lineColor;
            // line3.strokeWidth = linewidth;

            let line4 = Path.Line([j, 0], [j, view.viewSize.height]);
            line4.strokeColor = lineColor;
            line4.strokeWidth = linewidth2;
        }
    }
    // 画面を描く。
    view.draw();
});