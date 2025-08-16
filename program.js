async function init() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZTg1ZWY3ZC1hZTI0LTQ4ZTMtOTcyNy04NTEzOGZhZmU3NjQiLCJpZCI6MzMxMzc0LCJpYXQiOjE3NTUwNDI2MTl9.9OAK0UP0eAWeaovGsqi60Ypxrg4yqlW0zLbs3RLm0PE';

    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    try {
        const ds = await Cesium.CzmlDataSource.load('circulo_dinamico.czml');
        viewer.dataSources.add(ds);
        await viewer.zoomTo(ds);
    } catch (e) {
        console.error('Error cargando CZML:', e);
    }
}

init();