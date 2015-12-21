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

    
    
// Create Sun
    var sun = BABYLON.Mesh.CreateSphere('sun',32,15,scene);
    var sunMaterial = new BABYLON.StandardMaterial('sunMat', scene);
    sunMaterial.emissiveTexture = new BABYLON.Texture('assets/sun.jpg',scene);
    sunMaterial.diffuseColoe = new BABYLON.Color3(0,0,0);
    sunMaterial.specularColor = new BABYLON.Color3(0,0,0);    
    sun.material = sunMaterial;
    var sunLight = new BABYLON.PointLight('sunLight',BABYLON.Vector3.Zero(),scene);
    sunLight.intencity = 2;
    rotate(sun,'y',0.01);
    
// Create Mercury
    var mercuryMaterial = new BABYLON.StandardMaterial('mercuryMat', scene);
    mercuryMaterial.diffuseTexture = new BABYLON.Texture('assets/mercurymap.jpg',scene)
    mercuryMaterial.specularColor = new BABYLON.Color3(0,0,0);
    var mercury = BABYLON.Mesh.CreateSphere('Mercury',32,1,scene);
    mercury.position.x=30;
    mercury.material = mercuryMaterial;
    rotate(mercury,'y',0.01);
    mercury.orbit = {
        radius:mercury.position.x,
        speed: 0.01,
        angle: 0
    }
// Create Venus
    var venusMaterial = new BABYLON.StandardMaterial('venusMat', scene);
    venusMaterial.diffuseTexture = new BABYLON.Texture('assets/venusmap.jpg',scene)
    venusMaterial.specularColor = new BABYLON.Color3(0,0,0);
    
    var venus = BABYLON.Mesh.CreateSphere('Venus',32,2,scene);
    venus.position.x=56;
    venus.material = venusMaterial;
    rotate(venus,'y',0.01);
    venus.orbit = {
        radius:venus.position.x,
        speed: 0.008,
        angle: 0
    }
//Create Earth
    var earthMaterial = new BABYLON.StandardMaterial('earthMat', scene);
    earthMaterial.diffuseTexture = new BABYLON.Texture('assets/earthmap.jpg',scene)
    earthMaterial.specularColor = new BABYLON.Color3(0,0,0);
    
    var earth = BABYLON.Mesh.CreateSphere('Earth',32,2,scene);
    earth.position.x=92;
    earth.material = earthMaterial;
    rotate(earth,'y',0.01);
    earth.orbit = {
        radius:earth.position.x,
        speed: 0.006,
        angle: 0
    }
// Create Mars
    var marsMaterial = new BABYLON.StandardMaterial('marsMat', scene);
    marsMaterial.diffuseTexture = new BABYLON.Texture('assets/marsmap.jpg',scene)
    marsMaterial.specularColor = new BABYLON.Color3(0,0,0);
    
    var mars = BABYLON.Mesh.CreateSphere('Mars',32,1,scene);
    mars.position.x=118;
    mars.material = marsMaterial;
    rotate(mars,'y',0.01);
    mars.orbit = {
        radius:mars.position.x,
        speed: 0.004,
        angle: 0
    }
    
// Create Jupiter
    var jupiterMaterial = new BABYLON.StandardMaterial('jupiterMat', scene);
    jupiterMaterial.diffuseTexture = new BABYLON.Texture('assets/jupitermap.jpg',scene)
    jupiterMaterial.specularColor = new BABYLON.Color3(0,0,0);
    
    var jupiter = BABYLON.Mesh.CreateSphere('Jupiter',32,6,scene);
    jupiter.position.x=156;
    jupiter.material = jupiterMaterial;
    rotate(jupiter,'y',0.01);
    jupiter.orbit = {
        radius:jupiter.position.x,
        speed: 0.002,
        angle: 0
    }
    
//Create Saturn
    var saturnMaterial = new BABYLON.StandardMaterial('saturnMat', scene);
    saturnMaterial.diffuseTexture = new BABYLON.Texture('assets/saturnmap.jpg',scene)
    saturnMaterial.specularColor = new BABYLON.Color3(0,0,0);
    
    var saturn = BABYLON.Mesh.CreateSphere('Saturn',32,5,scene);
    saturn.position.x=184;
    saturn.material = saturnMaterial;
    rotate(saturn,'y',0.01);
    saturn.orbit = {
        radius:saturn.position.x,
        speed: 0.0008,
        angle: 0
    }
    
//Create Uranus
    var uranusMaterial = new BABYLON.StandardMaterial('uranusMat', scene);
    uranusMaterial.diffuseTexture = new BABYLON.Texture('assets/uranusmap.jpg',scene)
    uranusMaterial.specularColor = new BABYLON.Color3(0,0,0);
    
    var uranus = BABYLON.Mesh.CreateSphere('Uranus',32,3,scene);
    uranus.position.x=218;
    uranus.material = uranusMaterial;
    rotate(uranus,'y',0.01);
    uranus.orbit = {
        radius:uranus.position.x,
        speed: 0.0006,
        angle: 0
    }
    
//Create Neptune
    var neptuneMaterial = new BABYLON.StandardMaterial('neptuneMat', scene);
    neptuneMaterial.diffuseTexture = new BABYLON.Texture('assets/neptunemap.jpg',scene)
    neptuneMaterial.specularColor = new BABYLON.Color3(0,0,0);
    
    var neptune = BABYLON.Mesh.CreateSphere('Neptune',32,3,scene);
    neptune.position.x=248;
    neptune.material = neptuneMaterial;
    rotate(neptune,'y',0.01);
    neptune.orbit = {
        radius:neptune.position.x,
        speed: 0.0004,
        angle: 0
    }
    
//Create Pluto 
    var plutoMaterial = new BABYLON.StandardMaterial('plutoMat', scene);
    plutoMaterial.diffuseTexture = new BABYLON.Texture('assets/plutomap.jpg',scene)
    plutoMaterial.specularColor = new BABYLON.Color3(0,0,0);
    
    var pluto = BABYLON.Mesh.CreateSphere('Pluto',32,1,scene);
    pluto.position.x=280;
    pluto.material = plutoMaterial;
    rotate(pluto,'y',0.01);
    pluto.orbit = {
        radius:pluto.position.x,
        speed: 0.0002,
        angle: 0
    }
    
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
        mercury.position.x = mercury.orbit.radius* Math.sin(mercury.orbit.angle);
        mercury.position.z = mercury.orbit.radius* Math.cos(mercury.orbit.angle);
        mercury.orbit.angle += mercury.orbit.speed;
        
        venus.position.x = venus.orbit.radius* Math.sin(venus.orbit.angle);
        venus.position.z = venus.orbit.radius* Math.cos(venus.orbit.angle);
        venus.orbit.angle += venus.orbit.speed;
        
        earth.position.x = earth.orbit.radius* Math.sin(earth.orbit.angle);
        earth.position.z = earth.orbit.radius* Math.cos(earth.orbit.angle);
        earth.orbit.angle += earth.orbit.speed;
        
        mars.position.x = mars.orbit.radius* Math.sin(mars.orbit.angle);
        mars.position.z = mars.orbit.radius* Math.cos(mars.orbit.angle);
        mars.orbit.angle += mars.orbit.speed;
        
        jupiter.position.x = jupiter.orbit.radius* Math.sin(jupiter.orbit.angle);
        jupiter.position.z = jupiter.orbit.radius* Math.cos(jupiter.orbit.angle);
        jupiter.orbit.angle += jupiter.orbit.speed;
        
        saturn.position.x = saturn.orbit.radius* Math.sin(saturn.orbit.angle);
        saturn.position.z = saturn.orbit.radius* Math.cos(saturn.orbit.angle);
        saturn.orbit.angle += saturn.orbit.speed;
        
        uranus.position.x = uranus.orbit.radius* Math.sin(uranus.orbit.angle);
        uranus.position.z = uranus.orbit.radius* Math.cos(uranus.orbit.angle);
        uranus.orbit.angle += uranus.orbit.speed;
        
        neptune.position.x = neptune.orbit.radius* Math.sin(neptune.orbit.angle);
        neptune.position.z = neptune.orbit.radius* Math.cos(neptune.orbit.angle);
        neptune.orbit.angle += neptune.orbit.speed;
        
        pluto.position.x = pluto.orbit.radius* Math.sin(pluto.orbit.angle);
        pluto.position.z = pluto.orbit.radius* Math.cos(pluto.orbit.angle);
        pluto.orbit.angle += pluto.orbit.speed;
        
        
            }
    engine.runRenderLoop(function(){
        scene.render();
    })
    
    window.addEventListener('resize', function(){
        engine.resize();
    })
}


