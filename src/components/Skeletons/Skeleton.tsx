import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
    <ContentLoader
        speed={2}
        width={360}
        height={400}
        viewBox="0 0 360 360"
        backgroundColor="#8f8989"
        foregroundColor="#b0a9a9">
        <rect x="0" y="422" rx="10" ry="10" width="95" height="30" />
        <rect x="127" y="413" rx="25" ry="25" width="152" height="45" />
        <rect x="10" y="10" rx="20" ry="20" width="310" height="185" />
        <rect x="95" y="217" rx="5" ry="5" width="150" height="25" />
        <rect x="10" y="275" rx="10" ry="10" width="310" height="35" />
        <rect x="10" y="324" rx="10" ry="10" width="310" height="35" />
    </ContentLoader>
);

export default Skeleton;
