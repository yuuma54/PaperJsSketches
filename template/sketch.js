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

    // 画面を描く。
    view.draw();
});