import React from 'react';
import ContentLoader from 'react-content-loader';

const MerchSkeleton = () => (
    <ContentLoader
        speed={2}
        width={260}
        height={260}
        viewBox="0 0 360 360"
        backgroundColor="#8f8989"
        foregroundColor="#b0a9a9">
        <rect x="0" y="522" rx="10" ry="10" width="95" height="30" />
        <rect x="127" y="413" rx="25" ry="25" width="152" height="45" />
        <rect x="10" y="10" rx="20" ry="20" width="310" height="225" />
        <rect x="10" y="275" rx="10" ry="10" width="310" height="35" />
        <rect x="10" y="324" rx="10" ry="10" width="310" height="35" />
    </ContentLoader>
);

export default MerchSkeleton;
