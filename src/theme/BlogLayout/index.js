/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import TOC from '@theme/TOC';
import styles from './styles.module.scss';

function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  return (
    <Layout {...layoutProps}>
      {hasSidebar && (
        <aside className={clsx("col col--2", styles.sidebar)}>
          <BlogSidebar sidebar={sidebar} />
        </aside>
      )}
      <div className="container margin-vert--lg">
        <div className="row">
          <main
            className={clsx('col', 'col--10')}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          {toc && (
            <div className="col col--2">
              <TOC toc={toc} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default BlogLayout;
