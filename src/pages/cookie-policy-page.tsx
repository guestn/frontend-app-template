import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { marked } from 'marked';
import { Head } from '@/components/ui/head/head';
import { useAsync } from '@/hooks/use-async';
import styles from '@/styles/markdown.module.scss';
import { Skeleton } from '../components/ui';

const COOKIE_POLICY_DOC =
  'https://raw.githubusercontent.com/a-doc/cookie-policy.md';

export const CookiePolicyPage: FC = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useAsync(async () => {
    const res = await fetch(COOKIE_POLICY_DOC);
    const markdown = await res.text();

    return await marked(markdown);
  }, []);

  return (
    <>
      <Head title={t('NAV.FOOTER.COOKIE_POLICY')} />
      <div className={styles.markdown}>
        {isLoading && <Skeleton count={20} />}
        {data && !isLoading && (
          <div dangerouslySetInnerHTML={{ __html: data }} />
        )}
      </div>
    </>
  );
};
