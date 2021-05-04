import Accessor from '@arcgis/core/core/Accessor'
import {
  property,
  subclass,
} from '@arcgis/core/core/accessorSupport/decorators'
import type { HelloWorldViewModelProperties } from './types'

@subclass('HelloWorldViewModel')
export class HelloWorldViewModel extends Accessor {
  constructor(props?: HelloWorldViewModelProperties) {
    super(props)
  }

  @property()
  firstName = 'John'

  @property()
  lastName = 'Smith'

  @property({
    readOnly: true,
    dependsOn: ['firstName', 'lastName'],
  })
  get greeting(): string {
    return `My name is ${this.firstName} ${this.lastName}`
  }
}
