import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { PaginatedDto } from 'src/general.dto/paginated-dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategory: CreateCategoryDto): Promise<{
        id: number;
        name: string;
        description: string;
        image: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        accountId: number;
    }>;
    findAll(page?: number, perPage?: number): Promise<PaginatedDto<CreateCategoryDto>>;
    findOne(name: string): Promise<{
        posts: {
            id: number;
            description: string;
            image: string;
            slug: string;
            title: string;
        }[];
    } & {
        id: number;
        name: string;
        description: string;
        image: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        accountId: number;
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<void>;
    published(ids: number, published: boolean): Promise<void>;
    remove(ids: number): Promise<void>;
}
