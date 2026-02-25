import { Category } from '@prisma/client';


export class CategoryEntity implement Category {

    constructor(partial:Partial<CategoryEntity>){
        
        Object.assign(this.partial);
    }

    id : number ,     
    name:      string,
    products  Product[],
    createdAt?: DateTime,
    updatedAt?: Date,
    deletedAt?: Date,
}
