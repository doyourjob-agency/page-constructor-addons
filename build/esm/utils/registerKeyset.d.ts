import { i18n } from '../i18n';
import { Lang } from './configure';
type KeysData = Parameters<typeof i18n.registerKeyset>[2];
export declare function registerKeyset<T extends KeysData>(data: Record<Lang, T>, keysetName: string): (key: string, params?: import("@gravity-ui/i18n").Params | undefined) => string;
export {};
