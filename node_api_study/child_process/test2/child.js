const scope_parser_1 = require("scope-parser");

process.on("message", function(data) {
    scope_parser_1.setConfig(data.conf);
    console.log(data.params.upLeft);
    console.log(data.params.downRight);

    scope_parser_1.Carbin.fire4Export(
      JSON.parse(data.params.scopes), 
      data.params.upLeft, 
      data.params.downRight, 
      data.fileName, 
      data.params.crs, 
      data.params.resolution, 
      data.params.dataType, 
      data.params.noDataValue)
    .then(path => setImmediate(() => process.send({ code: 1 })))
    .catch((e) => {
      setImmediate(() => process.send({ code: 2, msg: e.message }));
    });
})