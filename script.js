var canvas = CE.defines("game").ready(function(){
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
  
  },
  render: function(stage){
    this.element.x +=1;
    stage.refresh();
  },
  exit: function(stage){
  
  }
});
