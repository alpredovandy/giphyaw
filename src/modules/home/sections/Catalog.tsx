import { FC } from 'react';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Empty from '@/components/Empty';
import { CatalogProps } from '@/modules/home/types.ts';

const Catalog: FC<CatalogProps> = ({ gifs, isPending, loadButton, showButton = true }) => {
    if (isPending)
        return (
            <div className="grid flex-auto md:grid-cols-2 xl:grid-cols-3 flex-wrap gap-2">
                {new Array(12).fill(0).map((_, index) => (
                    <Card key={`skeleton-${index}`} data={{}} isLoading={true} />
                ))}
            </div>
        );

    return (
        <>
            {gifs?.length > 0 ? (
                <>
                    <div className="grid flex-auto md:grid-cols-2 xl:grid-cols-3 flex-wrap gap-2">
                        {gifs?.map((gif) => <Card key={gif?.slug} data={gif} isLoading={isPending} />)}
                    </div>
                    {showButton && <Button title="Load more" onAction={loadButton} isLoading={isPending} />}
                </>
            ) : (
                <Empty />
            )}
        </>
    );
};

export default Catalog;
