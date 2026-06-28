import { ComposerMetadataChatType, ComposerMetadataPredicate } from '../interfaces';
export declare function createComposerDecorator(method: ComposerMetadataChatType['method']): (arg: ComposerMetadataChatType['arg']) => MethodDecorator;
export declare function createComposerDecorator(method: ComposerMetadataPredicate['method']): (arg: ComposerMetadataPredicate['arg']) => MethodDecorator;
