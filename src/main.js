import '@arcgis/core/assets/esri/themes/dark/main.css'
import esriConfig from '@arcgis/core/config'
import ArcMap from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import Search from '@arcgis/core/widgets/Search'
import './style.css'

esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY

const map = new ArcMap({
  basemap: 'arcgis-topographic',
})

const view = new MapView({
  map: map,
  center: [-104.7, 39.6],
  zoom: 13,
  container: 'viewDiv',
})

const searchWidget = new Search({
  view: view,
})

view.ui.add(searchWidget, {
  position: 'top-right',
  index: 2,
})
