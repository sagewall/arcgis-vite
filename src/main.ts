import '@arcgis/core/assets/esri/themes/dark/main.css'
import esriConfig from '@arcgis/core/config'
import ArcMap from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery'
import Expand from '@arcgis/core/widgets/Expand'
import Search from '@arcgis/core/widgets/Search'
import './style.css'

esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY as string

const map = new ArcMap({
  basemap: 'arcgis-topographic',
})

const view = new MapView({
  map: map,
  center: [-104.7, 39.6],
  zoom: 13,
  container: 'viewDiv',
})

const search = new Search({
  view,
})

const searchExpand = new Expand({
  content: search,
  expandTooltip: 'Search',
  group: 'top-right',
  view,
})

view.ui.add(searchExpand, {
  position: 'top-right',
})

const basemapGallery = new BasemapGallery({
  view,
})

const basemapGalleryExpand = new Expand({
  content: basemapGallery,
  expandTooltip: 'Choose basemap',
  group: 'top-right',
  view,
})

view.ui.add(basemapGalleryExpand, {
  position: 'top-right',
})
