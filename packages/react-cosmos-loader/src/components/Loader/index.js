import React from 'react';
import { func, object, arrayOf } from 'prop-types';
import createLinkedList from '@skidding/linked-list';
import { createModuleType } from '../../utils/module-type';
import { PropsProxy } from '../PropsProxy';

/**
 * Loader for rendering React components in isolation.
 *
 * Renders components using fixtures and Proxy middleware. Initialized via
 * props.
 */
const Loader = ({ fixture, proxies, onComponentRef, onFixtureUpdate }) => {
  const firstProxy = createLinkedList([...proxies, PropsProxy]);

  return (
    <firstProxy.value
      nextProxy={firstProxy.next()}
      fixture={fixture}
      onComponentRef={onComponentRef}
      onFixtureUpdate={onFixtureUpdate}
    />
  );
};

Loader.propTypes = {
  fixture: createModuleType(object).isRequired,
  proxies: arrayOf(createModuleType(func)),
  onFixtureUpdate: func,
  onComponentRef: func
};

Loader.defaultProps = {
  proxies: [],
  onFixtureUpdate: () => {},
  onComponentRef: () => {}
};

export { Loader };
