/**
 * This file contains the source code for the all of the base wrapper plugins
 * available by default in HyperFiler, as well as plugin builders for building
 * pipelines of plugins at various stages of the hyper filing process.
 *
 * @author ChowderMan
 * @license AGPLv3
 */
import { HyperFiler } from './hyperfiler';
import { HyperFilerPlugin } from './options/hyperfiler-options';
/**
 * Builds a pipeline of plugins that will run during the
 * `PreCssInlineRemovals` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export declare function buildPreCssInlineRemovalsPluginPipeline(hyperFiler: HyperFiler): HyperFilerPlugin[];
/**
 * Builds a pipeline of plugins that will run during the
 * `PostCssInlineRemovals` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export declare function buildPostCssInlineRemovalsPluginPipeline(hyperFiler: HyperFiler): HyperFilerPlugin[];
/**
 * Builds a pipeline of plugins that will run during the
 * `ResourceModifications` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export declare function buildResourceModificationsPluginPipeline(hyperFiler: HyperFiler): HyperFilerPlugin[];
/**
 * Builds a pipeline of plugins that will run during the
 * `FinalInlineModifications` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export declare function buildFinalInlineModificationsPluginPipeline(hyperFiler: HyperFiler): HyperFilerPlugin[];
/**
 * Builds a pipeline of plugins that will run during the
 * `FinalDocumentCreation` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export declare function buildFinalDocumentCreationPluginPipeline(hyperFiler: HyperFiler): HyperFilerPlugin[];
/**
 * Builds a pipeline of plugins that will run during the
 * `FinalHtmlCreation` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export declare function buildFinalHtmlCreationPluginPipeline(hyperFiler: HyperFiler): HyperFilerPlugin[];
//# sourceMappingURL=plugins.d.ts.map