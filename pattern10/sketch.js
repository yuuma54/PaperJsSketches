// ここにスケッチ名を指定することができる。
let sketchName = 'my sketch';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function(){
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);

    let backgroundColor = new Color('#e0e8c1');
    let lineColor1 = new Color('#99b37b');
    let lineColor2 = new Color('#f54940')
    let lineColor3 = new Color('#4b7d40')
    
    let background = Path.Rectangle([0, 0], view.viewSize);
    background.fillColor = backgroundColor;

    for (i = 10; i < 500; i = i + 100){
        //縦
        let line1 = Path.Line([i, 0], [i, 500]);
        line1.strokeColor = lineColor1;
        line1.strokeWidth = 5;
        let line2 = Path.Line([i + 20, 0], [i + 20, 500]);
        line2.strokeColor = lineColor1;
        line2.strokeWidth = 5;
        
        let line3 = Path.Line([i + 60, 0], [i + 60, 500]);
        line3.strokeColor = lineColor1;
        line3.strokeWidth = 3;
        let line4 = Path.Line([i + 50, 0], [i + 50, 500]);
        line4.strokeColor = lineColor1;
        line4.strokeWidth = 3;
        let line5 = Path.Line([i + 40, 0], [i + 40, 500]);
        line5.strokeColor = lineColor1;
        line5.strokeWidth = 3;
        let line6 = Path.Line([i + 70, 0], [i + 70, 500]);
        line6.strokeColor = lineColor1;
        line6.strokeWidth = 3;
        let line7 = Path.Line([i + 80, 0], [i + 80, 500]);
        line7.strokeColor = lineColor1;
        line7.strokeWidth = 3;
    }
    for (j = 10; j < 500; j = j + 100){
      //横
      let line8 = Path.Line([0, j], [500, j]);
      line8.strokeColor = lineColor2;
      line8.strokeWidth = 8;
      let line9 = Path.Line([0, j + 20], [500, j + 20]);
      line9.strokeColor = lineColor2;
      line9.strokeWidth = 8;

      let line10 = Path.Line([0, j + 60], [500, j + 60]);
      line10.strokeColor = ('#404040');
      line10.strokeWidth = 10;

      let line11 = Path.Line([0, j + 50], [500, j + 50]);
      line11.strokeColor = lineColor3
      line11.strokeWidth = 4;
      let line12 = Path.Line([0, j + 70], [500, j + 70]);
      line12.strokeColor = lineColor3
      line12.strokeWidth = 4;

    }

    // 画面を描く。
    view.draw();
});