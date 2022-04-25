// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let x = view.viewSize.width * 0.25;
    let y = view.viewSize.height * 0.3;
    let rectSize = [200, 300];

    // 長方形を追加する。
    let rect = new Path.Rectangle([x, y], rectSize);
    rect.strokeColor = 'black';

    project.currentStyle = {
        strokeColor: '#000000', // 線の色
        fillColor: null, // 塗りなし
        strokeWidth: 5, // 線の幅
        dashArray: [5, 10, 20, 8] // 線の長さ、間隔の長さ、線の長さ、間隔の長さ
    };

    let line = Path.Line([20, 20], [100, 50]);

    // 画面を描く。
    view.draw();
});