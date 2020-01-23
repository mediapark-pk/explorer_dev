import React from 'react';

import * as BlockIconBase64 from 'src/common/component/Icons/icons/block.svg';
import * as CapitalizationIconBase64 from 'src/common/component/Icons/icons/capitalization.svg';
import * as ConvertorIconBase64 from 'src/common/component/Icons/icons/convertor.svg';
import * as DelegateIconBase64 from 'src/common/component/Icons/icons/delegate.svg';
import * as TransactionIconBase64 from 'src/common/component/Icons/icons/transaction.svg';

interface IIconProps {
  className?: string;
}

type CreateIconFunction = (base64String: string) => React.FC<IIconProps>;

const createIcon: CreateIconFunction = (base64String: string) => {
    return ({ className }) => {    
        return (
            <img className={className} src={base64String} />
        );
    };
};

export const BlockIcon = createIcon(BlockIconBase64);
export const DelegateIcon = createIcon(DelegateIconBase64);
export const TransactionIcon = createIcon(TransactionIconBase64);
export const ConvertorIcon = createIcon(ConvertorIconBase64);
export const CapitalizationIcon = createIcon(CapitalizationIconBase64);
