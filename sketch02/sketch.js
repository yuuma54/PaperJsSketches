// ここにスケッチ名を指定することができる。
let sketchName = '綺麗な絵';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: '#175676', // 塗りの色
        strokeWidth: 1 // 線の幅
    };

    let x = 100;
    let y = 20;
    let tileSize = [150, 100];
    let Width = 20;


    // 長方形 : 左上の座標, 幅と高さ
    let box1 = Path.Rectangle([x, y], tileSize);
    Path.Rectangle([x + tileSize[0] + Width, y + tileSize[1] + Width], tileSize);
    Path.Rectangle([x, y + tileSize[1] + Width], tileSize);
    Path.Rectangle([x + tileSize[0] + Width, y], tileSize);

    box1.fillColor = '#37ad24'
    // 直線 : 開始点の座標, 終了点の座標
    // Path.Line([100, 20], [270, 20]);
    // Path.Line([420, 120], [270, 20]);
    // Path.Line([100, 20], [270, 20]);
    // Path.Line([100, 20], [270, 20]);


    // 画面を描く。
    view.draw();
});