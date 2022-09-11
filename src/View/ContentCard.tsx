import * as React from 'react';
import {FC, memo, useCallback} from 'react';
import {ContentItemType} from "../FireBase/FireBase";
import {useActions, useAppSelector} from "../Common/CustomHooks/CustomHooks";
import {ContentCardView} from "./ContentCardView";

type ContentCardType = {
    contentItem: ContentItemType
}

export const ContentCard: FC<ContentCardType> = memo(({contentItem}) => {
    const selectedProduct = useAppSelector(state => state.contentState.shoppingCart.find(item => item.id === contentItem.id))
    const {addProductToCart, addUnitOfProduct, removeUnitOfProduct} = useActions()

    const addProductHandler = useCallback((id: string) => {
        addProductToCart({id})
    }, [addProductToCart])

    const addUnitOfProductHandler = useCallback((id: string) => {
        addUnitOfProduct({id})
    }, [addUnitOfProduct])

    const removeUnitOfProductHandler = useCallback((id: string) => {
        removeUnitOfProduct({id})
    }, [removeUnitOfProduct])

    return (
        <ContentCardView contentItem={contentItem}
                         selectedProduct={selectedProduct}
                         addProductHandler={addProductHandler}
                         removeUnitOfProductHandler={removeUnitOfProductHandler}
                         addUnitOfProductHandler={addUnitOfProductHandler}
        />
    );
})

