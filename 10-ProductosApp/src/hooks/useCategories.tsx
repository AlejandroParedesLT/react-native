import React, {useState, useEffect} from 'react';
import mernAPI from '../api/mernAPI';
import { Categoria, CategoriesResponse } from '../interfaces/appInterfaces';

export const useCategories = () => {
    const [categories, setCategories] = useState<Categoria[]>([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        getCateries();
    });

    const getCateries = async() => {
        const resp = await mernAPI.get<CategoriesResponse>('/categorias');
        setCategories(resp.data.categorias);
        setisLoading(false);
    };

    return {
        isLoading,
        categories,
    };
};
