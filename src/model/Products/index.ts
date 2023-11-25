import {Images} from "@/model/Images";

export interface Products {
        id: string;
        name: string;
        amount: number;
        price: number;
        discount: number;
        created_at: string;
        updated_at: string;
        images: Images[] | [];
    }
