import esriConfig from '@arcgis/core/config'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import MapView from '@arcgis/core/views/MapView'
import WebMap from '@arcgis/core/WebMap'
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery'
import BasemapLayerList from '@arcgis/core/widgets/BasemapLayerList'
import Expand from '@arcgis/core/widgets/Expand'
import LayerList from '@arcgis/core/widgets/LayerList'
import Print from '@arcgis/core/widgets/Print'
import Search from '@arcgis/core/widgets/Search'
import Sketch from '@arcgis/core/widgets/Sketch'
import {
  defineCustomElements,
  setAssetPath,
} from '@esri/calcite-components/dist/custom-elements'
import './style.css'

esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY as string
esriConfig.assetsPath =
  'https://cdn.jsdelivr.net/npm/@arcgis/core@4.22.2/assets'

setAssetPath(
  'https://cdn.jsdelivr.net/npm/@esri/calcite-components@1.0.0-beta.76/dist/calcite/assets'
)
defineCustomElements()

const theme = document.getElementById('theme') as HTMLElement
const calciteAppShell = document.getElementById(
  'calcite-app-shell'
) as HTMLElement
const themeSwitchLabel = document.getElementById(
  'theme-switch-label'
) as HTMLElement

const changeTheme = (localStorageTheme: string) => {
  const url = `${esriConfig.assetsPath}/esri/themes/${localStorageTheme}/main.css`
  theme.setAttribute('href', url)
  if (localStorageTheme === 'dark') {
    calciteAppShell.classList.replace(
      'calcite-theme-light',
      'calcite-theme-dark'
    )
  }
  if (localStorageTheme === 'light') {
    calciteAppShell.classList.replace(
      'calcite-theme-dark',
      'calcite-theme-light'
    )
  }

  themeSwitchLabel.textContent = `${localStorageTheme} theme`
}

const themeSwitch = document.getElementById(
  'theme-switch'
) as HTMLCalciteSwitchElement

let localStorageTheme = localStorage.getItem('theme')
if (!localStorageTheme) {
  localStorageTheme = 'dark'
}
if (localStorageTheme === 'dark') {
  themeSwitch.checked = true
} else {
  themeSwitch.checked = false
}
changeTheme(localStorageTheme)

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
sketchGraphicsLayer.title = 'Sketch Graphics'
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

const print = new Print({
  view,
})

const printExpand = new Expand({
  content: print,
  expandTooltip: 'Print',
  group: 'top-right',
  view,
})

view.ui.add(printExpand, {
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
