var canvas = CE.defines("game").
  extend(Input).
  extend(Animation).
  extend(Tiled).
  ready(function(){
    canvas.Scene.call("testScene");
});

canvas.Scene.new({
  name: "testScene", //name of the scene
  materials: {
    images: {
      img_id: "examples/tiled/images/tiles_spritesheet.png"
    }
  },
  preload: function(stage, pourcent) {

  },
  ready: function(stage){
    this.element = this.createElement();
    this.element.drawImage("img_id");
    stage.append(this.element);
    
    canvas.Input.keyDown(Input.A, function(e){
      console.log("A is pressed");
    });
  },
  render: function(stage){
    this.element.x +=1;
    stage.refresh();
  },
  exit: function(stage){
  
  }
});
