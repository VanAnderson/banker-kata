import Greeter from './index';
import { equal } from "assert";

describe(('Greeter'), () => {
  it('should say hello', () => {
    const greet = new Greeter()
    equal(greet.sayHello(), 'hello')
  })
})