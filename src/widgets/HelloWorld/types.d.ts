import WidgetProperties = __esri.WidgetProperties

export interface HelloWorldViewModelProperties {
  firstName?: string
  lastName?: string
}

export interface HelloWorldProperties
  extends WidgetProperties,
    HelloWorldViewModelProperties {
  emphasized?: boolean
}
