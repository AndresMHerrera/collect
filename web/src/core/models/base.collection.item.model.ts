import { ITEM_CONDITION } from '../Enum/condition.enum';

export abstract class BaseCollectionItemModel {

    name: string;
    condition: ITEM_CONDITION;
    quantity: number;
    itemLocation: string;
    description: string;
    images: string[];
}