// @flow

import { createFixture } from 'react-cosmos-flow/fixture';
import ComponentPlayground from '..';
import { getOptions, routerProps, init } from './_shared';

export default createFixture({
  component: ComponentPlayground,

  props: {
    options: getOptions(),
    router: routerProps
  },

  fetch: [
    {
      matcher: 'end:_loader-mock.html',
      response: 200
    }
  ],

  init
});
