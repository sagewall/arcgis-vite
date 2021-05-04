/** @jsxRuntime classic */
/** @jsx tsx */

import {
  aliasOf,
  property,
  subclass,
} from '@arcgis/core/core/accessorSupport/decorators'
import { tsx } from '@arcgis/core/widgets/support/widget'
import Widget from '@arcgis/core/widgets/Widget'
import { HelloWorldViewModel } from './HelloWorldViewModel'
import type { HelloWorldProperties } from './types'

const CSS = {
  base: 'esri-hello-world',
  emphasis: 'esri-hello-world--emphasis',
}

@subclass('HelloWorld')
export class HelloWorld extends Widget {
  constructor(params?: HelloWorldProperties) {
    super(params)
  }

  @property()
  viewModel: HelloWorldViewModel = new HelloWorldViewModel()

  @aliasOf('viewModel.firstName')
  firstName = 'John'

  @aliasOf('viewModel.lastName')
  lastName = 'Smith'

  @property()
  emphasized = false

  render(): tsx.JSX.Element {
    const greeting = this.viewModel.greeting
    const classes = {
      [CSS.emphasis]: this.emphasized,
    }

    return (
      <calcite-panel>
        <div slot="header-content">Hello World!</div>
        <div class={this.classes(CSS.base, classes)}>{greeting}</div>
        <div slot="footer">A custom widget...</div>
      </calcite-panel>
    )
  }
}
