import React from 'react';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocPaginator from '@theme/DocPaginator';
/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */
export default function DocItemPaginator() {
  const {metadata} = useDoc();
  const rankString = metadata.permalink.split('/')[1];
  let rank = 0;

  switch (rankString) {
    case 'low-rank': rank = 0; break;
    case 'high-rank': rank = 1; break;
    case 'master-rank': rank = 2; break;
  }

  return <DocPaginator 
      previous={(rank > 0) ? ((rank === 2) ? {title: 'High Rank', permalink: `/high-rank${metadata.slug}`} : {title: 'Low Rank', permalink: `/low-rank${metadata.slug}`}) : null} 
      next={(rank < 2) ? ((rank === 0) ? {title: 'High Rank', permalink: `/high-rank${metadata.slug}`} : {title: 'Master Rank', permalink: `/master-rank${metadata.slug}`}) : null} 
  />;
}
