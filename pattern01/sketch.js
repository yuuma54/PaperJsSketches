// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: '#000000', // 線の色
        fillColor: null, // 塗りなし
        strokeWidth: 1, // 線の幅
    };

    let backgroundColor = new Color('#ebe546');
    let lineColor1 = new Color('#f01313');
    let lineColor2 = new Color('#000000');
        
    // 長方形 : 左上の座標, 幅と高さ
    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    for (let i = 1; i < 500; i = i + 50){
        let lineA = Path.Line([0, i], [500, i]);
        let lineB = Path.Line([i, 0], [i, 500]);
    }
    lineA.fillColor = lineColor1;


    // 画面を描く。
    view.draw();
});