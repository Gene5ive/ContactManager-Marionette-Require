requirejs.config({
  baseUrl: "assets/js",
  paths: {
    jquery: "vendor/jquery"
  }
});

require(["jquery"], function(jq){
  console.log("jQuery version: ", jq.fn.jquery);
  console.log("jQuery version: ", $.fn.jquery);
});
