/** @jsxRuntime classic */
/** @jsx tsx */

import {
  property,
  subclass,
} from '@arcgis/core/core/accessorSupport/decorators'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { tsx } from '@arcgis/core/widgets/support/widget'
import Widget from '@arcgis/core/widgets/Widget'

const CSS = {
  base: 'esri-hello-world',
  emphasis: 'esri-hello-world--emphasis',
}

@subclass('esri.widgets.HelloWorld')
export class HelloWorld extends Widget {
  // eslint-disable-next-line no-useless-constructor
  constructor(params?: unknown) {
    super(params)
  }

  @property()
  firstName = 'John'

  @property()
  lastName = 'Smith'

  @property()
  emphasized = false

  render(): unknown {
    const greeting = this._getGreeting()
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

  private _getGreeting(): string {
    return `My name is ${this.firstName} ${this.lastName}`
  }
}
