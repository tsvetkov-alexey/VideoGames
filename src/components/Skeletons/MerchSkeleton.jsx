import React from 'react';
import ContentLoader from 'react-content-loader';

const MerchSkeleton = () => (
    <ContentLoader
        speed={2}
        width={270}
        height={370}
        viewBox="0 0 270 370"
        backgroundColor="#8f8989"
        foregroundColor="#b0a9a9">
        <rect x="20" y="20" rx="20" ry="20" width="230" height="250" />
        <rect x="35" y="285" rx="10" ry="10" width="200" height="30" />
        <rect x="10" y="330" rx="10" ry="10" width="250" height="40" />
    </ContentLoader>
);

export default MerchSkeleton;
