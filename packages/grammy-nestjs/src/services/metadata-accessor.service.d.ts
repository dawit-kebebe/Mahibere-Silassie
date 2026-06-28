import { Reflector } from '@nestjs/core';
import { ListenerMetadata, ComposerMetadata } from '../interfaces';
export declare class MetadataAccessorService {
    private readonly reflector;
    constructor(reflector: Reflector);
    isUpdate(target: Function): boolean;
    getListenerMetadata(target: Function): ListenerMetadata[] | undefined;
    getBotMetadata(target: Function): ComposerMetadata[] | undefined;
}
