// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#bababa');
    let deltaColor = new Color('#ffffff');
    
    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    for (i = 35; i <= 550; i = i + 70){
        for (j = 40; j <= 550; j = j + 120){
        let delta = Path.RegularPolygon([i, j], 3, 40);
        let delta2 = Path.RegularPolygon([i - 35, j + 60], 3, 40);
        delta.fillColor = deltaColor;
        delta.strokeColor = '#000000'
        delta2.fillColor = deltaColor;
        delta2.strokeColor = '#000000'
        }
    }
    // 画面を描く。
    view.draw();
});