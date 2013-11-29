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
      tileset: "examples/tiled/images/tiles_spritesheet.png"
    }
  },
  preload: function(stage, percent) {

  },
  ready: function(stage){
    var el = this.createElement();
    var tiled = canvas.Tiled.new();
    tiled.ready(function(){
      var tile_w = this.getTileWidth(),
          tile_h = this.getTileHeight(),
	  layer_object = this.getLayerObject();
      stage.append(el);
    });
    tiled.load(this,el, "map/map.json");

    canvas.Input.keyDown(Input.A, function(e){ //input testing, Picks up A press
      console.log("A is pressed");
    });
  },
  render: function(stage){
    stage.refresh();
  },
  exit: function(stage){
  
  }
});
