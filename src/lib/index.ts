/**
 * This file contains the source code importing and re-exporting the
 * HyperFiler, Resource, and dependencies code.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import {
  HyperFiler,
} from './hyperfiler';
import {
  HyperFilerPlugin,
  HyperFilerOptions,
  HyperFilerPrebuiltOptions,
} from './options/hyperfiler-options';
import {
  Resource,
  ResourceCache,
  ResourceResponse,
  ResourceType,
} from './resource';
import {
  checkHyperFilerDependencies,
} from './dependencies';

export {
  HyperFiler,
  HyperFilerPlugin,
  HyperFilerOptions,
  HyperFilerPrebuiltOptions,
  Resource,
  ResourceCache,
  ResourceResponse,
  ResourceType,
  checkHyperFilerDependencies,
};
