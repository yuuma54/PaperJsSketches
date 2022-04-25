// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#000000');
    let boxColor = new Color ('#00ffff');
    let boxColor2 = new Color ('#ff00ff');

    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    for (let i = 0; i <= 500; i = i + 120){
        for (let j = 0; j <= 500; j = j + 170){
            let box =  Path.Rectangle([i, j], [60, 60]);
            box.fillColor = boxColor;
            box.rotate(45);
            box.scale(1.2, 0.6);
            
            let boxCopy = box.clone();
            boxCopy.position = [i + 3 , j + 80];
            boxCopy.fillColor = boxColor2;
            boxCopy.rotate(63);

            let boxCopy2 = box.clone();
            boxCopy2.position = [i + 57 , j + 80];
            boxCopy2.fillColor = boxColor2;
            boxCopy2.rotate(117);
        }
        //思ったようにいかなかった
    }
    // 画面を描く。
    view.draw();
});