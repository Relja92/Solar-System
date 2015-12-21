var BjsApp = BjsApp || {};

BjsApp.init = function(){
    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0,0,0);
    var camera = new BABYLON.ArcRotateCamera('camera',3,1,600,new BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas);
    camera.upperRadiusLimit = 800;
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0),scene);
    light.intensity = 0.5;
//Create Planets
    var planet =[];
    for(var i = 0;i<planetStats.length;i++){
        var planetName = planetStats[i].name;
        var planetSize = planetStats[i].size;
        var planetDistance = planetStats[i].distance;
        var planetSpeed = planetStats[i].speed;
        var material = planetName+'Mat';
        var planetMaterial = new BABYLON.StandardMaterial(material, scene);
        planetMaterial.diffuseTexture = new BABYLON.Texture('assets/'+planetName+'map.jpg',scene)
        planetMaterial.specularColor = new BABYLON.Color3(0,0,0);
        planet[i] = BABYLON.Mesh.CreateSphere(planetName,32,planetSize,scene);
        planet[i].position.x=planetDistance;
        planet[i].material = planetMaterial;
        rotate(planet[i],'y',0.025);
        planet[i].orbit = {
            radius:planet[i].position.x,
            speed: planetSpeed,
            angle: 0
        }
    }
// Create Sun
    var sun = BABYLON.Mesh.CreateSphere('sun',32,15,scene);
    var sunMaterial = new BABYLON.StandardMaterial('sunMat', scene);
    sunMaterial.emissiveTexture = new BABYLON.Texture('assets/sun.jpg',scene);
    sunMaterial.diffuseColor = new BABYLON.Color3(0,0,0);
    sunMaterial.specularColor = new BABYLON.Color3(0,0,0);    
    sun.material = sunMaterial;
    var sunLight = new BABYLON.PointLight('sunLight',BABYLON.Vector3.Zero(),scene);
    sunLight.intencity = 1;
    rotate(sun,'y',0.01);
// Create Sky Box
    var skyBox = BABYLON.Mesh.CreateBox('skybox',12000, scene);
    var skyBoxMaterial = new BABYLON.StandardMaterial('skyboxMat',scene);
    skyBoxMaterial.backFaceCulling = false;
    skyBox.infiniteDistance = true;
    skyBox.material = skyBoxMaterial;
    skyBoxMaterial.specularColor = new BABYLON.Color3(0,0,0);
    skyBoxMaterial.diffuseColor = new BABYLON.Color3(0,0,0);
    skyBoxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/skybox',scene);
    skyBoxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE; 

    scene.beforeRender = function(){   
        for(i=0;i<planetStats.length;i++){
            planet[i].position.x = planet[i].orbit.radius* Math.sin(planet[i].orbit.angle);
            planet[i].position.z = planet[i].orbit.radius* Math.cos(planet[i].orbit.angle);
            planet[i].orbit.angle += planet[i].orbit.speed;
        }
    }
    engine.runRenderLoop(function(){
        scene.render();
    })
    
    window.addEventListener('resize', function(){
        engine.resize();
    })
}


