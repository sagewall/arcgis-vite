import '@arcgis/core/assets/esri/themes/dark/main.css'
import esriConfig from '@arcgis/core/config'
import MapView from '@arcgis/core/views/MapView'
import WebMap from '@arcgis/core/WebMap'
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery'
import BasemapLayerList from '@arcgis/core/widgets/BasemapLayerList'
import Expand from '@arcgis/core/widgets/Expand'
import LayerList from '@arcgis/core/widgets/LayerList'
import Search from '@arcgis/core/widgets/Search'
import './style.css'

esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY as string

const map = new WebMap({
  portalItem: {
    id: 'a08efb8776f04db48982bf2332c1086b',
  },
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

const layerList = new LayerList({
  view,
})

const layerListExpand = new Expand({
  content: layerList,
  expandTooltip: 'Layer list',
  group: 'top-right',
  view,
})

view.ui.add(layerListExpand, {
  position: 'top-right',
})

const basemapGallery = new BasemapGallery({
  view,
})

const basemapGalleryExpand = new Expand({
  content: basemapGallery,
  expandTooltip: 'Basemap gallery',
  group: 'top-right',
  view,
})

view.ui.add(basemapGalleryExpand, {
  position: 'top-right',
})

const basemapLayerList = new BasemapLayerList({
  view,
})

const basemapLayerListExpand = new Expand({
  content: basemapLayerList,
  expandTooltip: 'Basemap layer list',
  group: 'top-right',
  view,
})

view.ui.add(basemapLayerListExpand, {
  position: 'top-right',
})
