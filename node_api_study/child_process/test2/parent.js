var spawn = require('child_process').spawn;

let child = spawn('node', [`${__dirname}/child.js`], {
  stdio: ['ignore', 'inherit', 'ignore', 'ipc'],
  detached: true,
  cwd: __dirname
});

child.on("message", function (data) {
  console.log(data);
  child.kill();
})

child.send({
  conf: {"queryMillHost":"https://engine-granary.gagogroup.cn","queryAssetHost":"http://greate.engine.gagogroup.cn","cacheServiceHost":"http://192.168.8.156:3123","logLevel":"info","logDir":"/tmp"},
  params: {"scopes":"[[\"0\",{\"type\":\"Invocation\",\"functionName\":\"ImageCollection.load\",\"arguments\":{\"id\":\"sentinel-2\"}}],[\"1\",{\"type\":\"Invocation\",\"functionName\":\"DateRange\",\"arguments\":{\"start\":\"2018-08-15T00:00:00.000Z\",\"end\":\"2018-08-17T00:00:00.000Z\"}}],[\"2\",{\"type\":\"Invocation\",\"functionName\":\"Filter.dateRangeContains\",\"arguments\":{\"leftValue\":{\"type\":\"ValueRef\",\"value\":\"1\"},\"rightField\":\"timestamp\"}}],[\"3\",{\"type\":\"Invocation\",\"functionName\":\"Collection.filter\",\"arguments\":{\"collection\":{\"type\":\"ValueRef\",\"value\":\"0\"},\"filter\":{\"type\":\"ValueRef\",\"value\":\"2\"}}}],[\"4\",{\"type\":\"Geometry.asset\",\"assetId\":\"375274452\"}],[\"5\",{\"type\":\"Invocation\",\"functionName\":\"Filter.intersects\",\"arguments\":{\"leftField\":\".all\",\"rightValue\":{\"type\":\"ValueRef\",\"value\":\"4\"}}}],[\"6\",{\"type\":\"Invocation\",\"functionName\":\"Collection.filter\",\"arguments\":{\"collection\":{\"type\":\"ValueRef\",\"value\":\"3\"},\"filter\":{\"type\":\"ValueRef\",\"value\":\"5\"}}}],[\"7\",{\"type\":\"Invocation\",\"functionName\":\"ImageCollection.mosaic\",\"arguments\":{\"collection\":{\"type\":\"ValueRef\",\"value\":\"6\"}}}],[\"8\",{\"type\":\"Invocation\",\"functionName\":\"Image.clip\",\"arguments\":{\"input\":{\"type\":\"ValueRef\",\"value\":\"7\"},\"geometry\":{\"type\":\"ValueRef\",\"value\":\"4\"}}}],[\"9\",{\"type\":\"Invocation\",\"functionName\":\"DateRange\",\"arguments\":{\"start\":\"2018-08-13T00:00:00.000Z\",\"end\":\"2018-08-15T00:00:00.000Z\"}}],[\"10\",{\"type\":\"Invocation\",\"functionName\":\"Filter.dateRangeContains\",\"arguments\":{\"leftValue\":{\"type\":\"ValueRef\",\"value\":\"9\"},\"rightField\":\"timestamp\"}}],[\"11\",{\"type\":\"Invocation\",\"functionName\":\"Collection.filter\",\"arguments\":{\"collection\":{\"type\":\"ValueRef\",\"value\":\"0\"},\"filter\":{\"type\":\"ValueRef\",\"value\":\"10\"}}}],[\"12\",{\"type\":\"Invocation\",\"functionName\":\"Collection.filter\",\"arguments\":{\"collection\":{\"type\":\"ValueRef\",\"value\":\"11\"},\"filter\":{\"type\":\"ValueRef\",\"value\":\"5\"}}}],[\"13\",{\"type\":\"Invocation\",\"functionName\":\"ImageCollection.mosaic\",\"arguments\":{\"collection\":{\"type\":\"ValueRef\",\"value\":\"12\"}}}],[\"14\",{\"type\":\"Polygon\",\"coordinates\":[[[75.96624838036385,39.802303216101734],[75.36749349755132,39.54862730047449],[75.27410970847393,39.264255848099026],[75.75201498191461,38.91036861715611],[75.96624838036385,39.802303216101734]]]}],[\"15\",{\"type\":\"Invocation\",\"functionName\":\"Image.clip\",\"arguments\":{\"input\":{\"type\":\"ValueRef\",\"value\":\"13\"},\"geometry\":{\"type\":\"ValueRef\",\"value\":\"14\"}}}],[\"16\",{\"type\":\"Invocation\",\"functionName\":\"DateRange\",\"arguments\":{\"start\":\"2018-08-12T00:00:00.000Z\",\"end\":\"2018-08-14T00:00:00.000Z\"}}],[\"17\",{\"type\":\"Invocation\",\"functionName\":\"Filter.dateRangeContains\",\"arguments\":{\"leftValue\":{\"type\":\"ValueRef\",\"value\":\"16\"},\"rightField\":\"timestamp\"}}],[\"18\",{\"type\":\"Invocation\",\"functionName\":\"Collection.filter\",\"arguments\":{\"collection\":{\"type\":\"ValueRef\",\"value\":\"0\"},\"filter\":{\"type\":\"ValueRef\",\"value\":\"17\"}}}],[\"19\",{\"type\":\"Invocation\",\"functionName\":\"Collection.filter\",\"arguments\":{\"collection\":{\"type\":\"ValueRef\",\"value\":\"18\"},\"filter\":{\"type\":\"ValueRef\",\"value\":\"5\"}}}],[\"20\",{\"type\":\"Invocation\",\"functionName\":\"ImageCollection.mosaic\",\"arguments\":{\"collection\":{\"type\":\"ValueRef\",\"value\":\"19\"}}}],[\"21\",{\"type\":\"Polygon\",\"coordinates\":[[[79.9279128578018,40.40868737002617],[79.41155543592492,40.18244191498823],[79.38958277966901,39.588123573797816],[79.49944606093146,39.44404256154698],[79.66424098279936,39.60505463003025],[80.03777613904703,39.921745122717084],[80.08721461562283,40.052218164006575],[79.9279128578018,40.40868737002617]]]}],[\"22\",{\"type\":\"Invocation\",\"functionName\":\"Image.clip\",\"arguments\":{\"input\":{\"type\":\"ValueRef\",\"value\":\"20\"},\"geometry\":{\"type\":\"ValueRef\",\"value\":\"21\"}}}],[\"23\",[{\"type\":\"ValueRef\",\"value\":\"8\"},{\"type\":\"ValueRef\",\"value\":\"15\"},{\"type\":\"ValueRef\",\"value\":\"22\"}]],[\"24\",{\"type\":\"Invocation\",\"functionName\":\"ImageCollection.load\",\"arguments\":{\"images\":{\"type\":\"ValueRef\",\"value\":\"23\"}}}],[\"25\",{\"type\":\"Invocation\",\"functionName\":\"ImageCollection.mosaic\",\"arguments\":{\"collection\":{\"type\":\"ValueRef\",\"value\":\"24\"}}}],[\"26\",{\"type\":\"Invocation\",\"functionName\":\"Image.clip\",\"arguments\":{\"input\":{\"type\":\"ValueRef\",\"value\":\"25\"},\"geometry\":{\"type\":\"ValueRef\",\"value\":\"4\"}}}],[\"27\",[\"B02\",\"B03\",\"B04\",\"B08\"]],[\"28\",{\"type\":\"Invocation\",\"functionName\":\"Image.select\",\"arguments\":{\"input\":{\"type\":\"ValueRef\",\"value\":\"26\"},\"bandSelectors\":{\"type\":\"ValueRef\",\"value\":\"27\"}}}]]","upLeft":[8537548.522017956,4899358.916159506],"downRight":[8588748.522017956,4848158.916159506],"crs":"EPSG:3857","resolution":50,"dataType":2},
  fileName: "/tmp/346134fe911abcad41f701a7aa5d381755b06bd945ffcc5eef21244e56d88b45.tif" 
});


setTimeout(() => console.log("i am die"), 1000 * 3600);
