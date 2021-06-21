import esriConfig from '@arcgis/core/config'
import MapView from '@arcgis/core/views/MapView'
import WebMap from '@arcgis/core/WebMap'
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery'
import BasemapLayerList from '@arcgis/core/widgets/BasemapLayerList'
import Expand from '@arcgis/core/widgets/Expand'
import LayerList from '@arcgis/core/widgets/LayerList'
import Search from '@arcgis/core/widgets/Search'
import {
  defineCustomElements,
  setAssetPath,
} from '@esri/calcite-components/dist/custom-elements'
import './style.css'
import Sketch from '@arcgis/core/widgets/Sketch'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'

esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY as string
esriConfig.assetsPath =
  'https://cdn.jsdelivr.net/npm/@arcgis/core@4.19.3/assets'

setAssetPath(
  'https://cdn.jsdelivr.net/npm/@esri/calcite-components@1.0.0-beta.55/dist/calcite/assets'
)
defineCustomElements()

const changeTheme = (theme: string) => {
  const url = `${esriConfig.assetsPath}/esri/themes/${theme}/main.css`
  document.getElementById('theme').setAttribute('href', url)
  document.getElementById('calcite-app-shell').setAttribute('theme', theme)
  document.getElementById('theme-switch-label').innerHTML = `${theme} theme`
}

const themeSwitch = document.getElementById(
  'theme-switch'
) as HTMLCalciteSwitchElement

let theme = localStorage.getItem('theme')
if (!theme) {
  theme = 'dark'
}
if (theme === 'dark') {
  themeSwitch.switched = true
} else {
  themeSwitch.switched = false
}
changeTheme(theme)

themeSwitch.addEventListener('calciteSwitchChange', (e) => {
  const theme = (<CustomEvent>e).detail.switched ? 'dark' : 'light'
  localStorage.setItem('theme', theme)
  changeTheme(theme)
})

const map = new WebMap({
  portalItem: {
    id: 'a08efb8776f04db48982bf2332c1086b',
  },
})

const view = new MapView({
  map: map,
  center: [-105.2213, 39.7554],
  zoom: 15,
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

const sketchGraphicsLayer = new GraphicsLayer()
map.add(sketchGraphicsLayer)

const sketch = new Sketch({
  layer: sketchGraphicsLayer,
  view,
})

const sketchExpand = new Expand({
  content: sketch,
  expandTooltip: 'Sketch',
  group: 'top-right',
  view,
})

view.ui.add(sketchExpand, {
  position: 'top-right',
})

// For debugging
declare global {
  interface Window {
    map: WebMap
    view: MapView
  }
}
window.map = map
window.view = view
